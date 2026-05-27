export const SITE_URL = "https://meerzeit.studio";

/** Build an absolute URL for a path or imported asset (which Vite resolves to "/assets/..."). */
export const absUrl = (path: string): string => {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

export const canonical = (routePath: string) => ({
  rel: "canonical" as const,
  href: absUrl(routePath),
});
