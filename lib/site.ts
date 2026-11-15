/**
 * Endereço público do site. Defina NEXT_PUBLIC_SITE_URL na hospedagem
 * (ex.: https://seu-dominio.com.br). Sem a variável, usa localhost.
 */
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
);
