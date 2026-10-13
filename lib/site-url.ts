// Set SITE_URL to the final public origin in the hosting environment before launch.
const configuredUrl = process.env.SITE_URL?.trim();
export const siteOrigin = configuredUrl
  ? new URL(configuredUrl).origin
  : 'http://localhost:3000';

export function absoluteUrl(path: string) {
  return new URL(path, `${siteOrigin}/`).toString();
}
