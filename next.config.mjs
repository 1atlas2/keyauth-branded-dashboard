!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

const config = {
  reactStrictMode: true,

  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
export default config;
