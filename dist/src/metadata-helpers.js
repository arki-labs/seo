/**
 * Creates consistent metadata for tool/app pages.
 * Generates title, description, canonical URL, OpenGraph, and Twitter card metadata.
 *
 * @example
 * ```ts
 * export const metadata = createToolMetadata({
 *   title: 'CSS Gradient Generator',
 *   description: 'Design beautiful CSS gradients...',
 *   path: '/gradient-generator',
 *   keywords: ['css gradient', 'gradient generator'],
 *   siteName: config.appTitle,
 *   siteUrl: config.appLink,
 * });
 * ```
 */
export function createToolMetadata({ title, description, path, keywords, siteName, siteUrl, }) {
    const url = `${siteUrl}${path}`;
    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: path,
        },
        openGraph: {
            title: `${title} | ${siteName}`,
            description,
            url,
            type: 'website',
        },
        twitter: {
            title: `${title} | ${siteName}`,
            description,
        },
    };
}
//# sourceMappingURL=metadata-helpers.js.map