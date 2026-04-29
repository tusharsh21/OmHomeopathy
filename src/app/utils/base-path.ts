export function getBaseAssetUrl(assetPath: string) {
  const normalizedBase = import.meta.env.BASE_URL || "/";
  const normalizedPath = assetPath.replace(/^\/+/, "");

  return `${normalizedBase}${normalizedPath}`;
}
