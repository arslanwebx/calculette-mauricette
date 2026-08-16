const readPublicValue = (value: string | undefined) => value?.trim() ?? "";
const defaultContactEmail = "contact@calculette-mauricette.pro";
const web3FormsEndpoint = "https://api.web3forms.com/submit";
const web3FormsAccessKey = "a598f339-a1c9-42d5-8532-4b2c31256af4";

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
    email: readPublicValue(import.meta.env.PUBLIC_CONTACT_EMAIL) || defaultContactEmail,
    formEndpoint: web3FormsEndpoint,
    formProvider: "Web3Forms",
    formAccessKey: web3FormsAccessKey,
  },
  hosting: {
    name: "Cloudflare, Inc.",
    address: "101 Townsend St, San Francisco, CA 94107, États-Unis",
    website: "https://www.cloudflare.com/",
    privacyPolicy: "https://www.cloudflare.com/privacypolicy/",
  },
} as const;
