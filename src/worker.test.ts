import { describe, expect, it, vi } from "vitest";
import { worker } from "./worker";

function assetEnvironment(response = new Response("asset", { status: 200 })) {
  return {
    ASSETS: {
      fetch: vi.fn(async () => response),
    },
  };
}

describe("canonical URL worker", () => {
  it("serves canonical HTTPS requests from the asset binding", async () => {
    const env = assetEnvironment();
    const request = new Request("https://calculette-mauricette.pro/contact/");

    const response = await worker.fetch(request, env);

    expect(response.status).toBe(200);
    expect(env.ASSETS.fetch).toHaveBeenCalledOnce();
  });

  it("redirects HTTP and www to the canonical origin in one hop", async () => {
    const env = assetEnvironment();
    const request = new Request("http://www.calculette-mauricette.pro/a-propos?source=test");

    const response = await worker.fetch(request, env);

    expect(response.status).toBe(301);
    expect(response.headers.get("location")).toBe(
      "https://calculette-mauricette.pro/a-propos/?source=test",
    );
    expect(env.ASSETS.fetch).not.toHaveBeenCalled();
  });

  it("adds a trailing slash to document routes without changing file URLs", async () => {
    const env = assetEnvironment();
    const documentResponse = await worker.fetch(
      new Request("https://calculette-mauricette.pro/mentions-legales"),
      env,
    );
    const fileResponse = await worker.fetch(
      new Request("https://calculette-mauricette.pro/sitemap.xml"),
      env,
    );

    expect(documentResponse.status).toBe(301);
    expect(documentResponse.headers.get("location")).toBe(
      "https://calculette-mauricette.pro/mentions-legales/",
    );
    expect(fileResponse.status).toBe(200);
  });
});
