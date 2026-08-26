/**
 * Helper to resolve static assets with correct absolute URL for GitHub Pages, Custom Domains, and Local Dev.
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

  // Strip leading slash
  const cleanPath = path.replace(/^\/+/, '');

  // In browser, dynamically resolve against the loaded origin and directory
  if (typeof window !== 'undefined' && window.location) {
    const origin = window.location.origin || '';
    let pathname = window.location.pathname || '/';

    // If pathname points to an html or index file, remove the filename
    if (/\.[a-zA-Z0-9]+$/.test(pathname)) {
      pathname = pathname.substring(0, pathname.lastIndexOf('/') + 1);
    }

    // Ensure pathname ends with a trailing slash
    if (!pathname.endsWith('/')) {
      pathname = `${pathname}/`;
    }

    return `${origin}${pathname}${cleanPath}`;
  }

  // Fallback for build / SSR
  const base = import.meta.env.BASE_URL || './';
  const prefix = base.endsWith('/') ? base : `${base}/`;
  return `${prefix}${cleanPath}`;
}

