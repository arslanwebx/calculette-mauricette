const readPublicValue = (value: string | undefined) => value?.trim() ?? "";

export const siteConfig = {
  name: "Calculette Mauricette",
  url: "https://calculette-mauricette.pro",
  purpose: "Un outil gratuit pour calculer les heures de travail.",
  legalUpdatedAt: "16 août 2026",
  publisher: {
    name: readPublicValue(import.meta.env.PUBLIC_PUBLISHER_NAME),
    type: readPublicValue(import.meta.env.PUBLIC_PUBLISHER_TYPE),
  },
  contact: {
    email: readPublicValue(import.meta.env.PUBLIC_CONTACT_EMAIL),
    formEndpoint: readPublicValue(import.meta.env.PUBLIC_CONTACT_FORM_ENDPOINT),
    formProvider: readPublicValue(import.meta.env.PUBLIC_CONTACT_FORM_PROVIDER),
  },
  hosting: {
    name: "Cloudflare, Inc.",
    address: "101 Townsend St, San Francisco, CA 94107, États-Unis",
    website: "https://www.cloudflare.com/",
    privacyPolicy: "https://www.cloudflare.com/privacypolicy/",
  },
} as const;
