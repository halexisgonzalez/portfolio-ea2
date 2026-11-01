import { useEffect } from 'react';
import { siteConfig } from '../config/site';

/**
 * Sets the browser tab title for the current page, e.g. "Proyectos · Portfolio EA2".
 * Pass nothing on the home page to use the site's full title.
 */
export function useDocumentTitle(pageTitle?: string) {
  useEffect(() => {
    document.title = pageTitle ? `${pageTitle} · ${siteConfig.name}` : siteConfig.title;
  }, [pageTitle]);
}
