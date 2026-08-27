/**
 * Resolves static asset paths cleanly for Google AI Studio, custom domains, GitHub Pages, and local development.
 */
export function getAssetUrl(path: string | undefined | null): string {
  if (!path) return '';
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }

  const cleanPath = path.replace(/^\/+/, '');
  return `/${cleanPath}`;
}


