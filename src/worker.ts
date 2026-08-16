const CANONICAL_HOST = "calculette-mauricette.pro";

interface Env {
  ASSETS: {
    fetch(request: Request): Promise<Response>;
  };
}

function needsTrailingSlash(pathname: string): boolean {
  if (pathname === "/" || pathname.endsWith("/")) {
    return false;
  }

  const finalSegment = pathname.slice(pathname.lastIndexOf("/") + 1);
  return !finalSegment.includes(".");
}

export const worker = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const needsCanonicalOrigin = url.protocol !== "https:" || url.hostname !== CANONICAL_HOST;
    const needsCanonicalPath = needsTrailingSlash(url.pathname);

    if (needsCanonicalOrigin || needsCanonicalPath) {
      url.protocol = "https:";
      url.hostname = CANONICAL_HOST;
      url.port = "";

      if (needsCanonicalPath) {
        url.pathname = `${url.pathname}/`;
      }

      return Response.redirect(url.href, 301);
    }

    return env.ASSETS.fetch(request);
  },
};

export default worker;
