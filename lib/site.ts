/**
 * Endereço público do site, usado em metadados, Open Graph, sitemap e robots.
 *
 * Ordem de prioridade:
 *   1. NEXT_PUBLIC_SITE_URL, quando você define a variável manualmente;
 *   2. VERCEL_PROJECT_PRODUCTION_URL, que a Vercel preenche sozinha;
 *   3. localhost, para desenvolvimento local.
 */
const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined;

export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? vercelProductionUrl ?? "http://localhost:3000"
);
