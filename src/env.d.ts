/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL?: string;
  readonly PUBLIC_PUBLISHER_NAME?: string;
  readonly PUBLIC_PUBLISHER_TYPE?: string;
  readonly PUBLIC_CONTACT_EMAIL?: string;
  readonly PUBLIC_CONTACT_FORM_ENDPOINT?: string;
  readonly PUBLIC_CONTACT_FORM_PROVIDER?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
