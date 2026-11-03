type ToolMetadataInput = {
    /** The tool/page title (without site suffix — Next.js template adds it) */
    title: string;
    /** Rich, keyword-aware description */
    description: string;
    /** URL path, e.g., '/gradient-generator' */
    path: string;
    /** Optional keywords for OG/Twitter metadata */
    keywords?: string[];
    /** Site name, e.g., 'Acme CSS' */
    siteName: string;
    /** Full site URL, e.g., 'https://example.com' */
    siteUrl: string;
};
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
export declare function createToolMetadata({ title, description, path, keywords, siteName, siteUrl, }: ToolMetadataInput): {
    title: string;
    description: string;
    keywords: string[] | undefined;
    alternates: {
        canonical: string;
    };
    openGraph: {
        title: string;
        description: string;
        url: string;
        type: 'website';
    };
    twitter: {
        title: string;
        description: string;
    };
};
export {};
//# sourceMappingURL=metadata-helpers.d.ts.map