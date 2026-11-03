/**
 * Framework-agnostic sitemap.xml builders.
 *
 * Apps invoke `sitemapResponse(...)` from a server handler (TanStack Start
 * route, Hono handler, plain Node) and return the resulting `Response`.
 * Crawlers parse responses by `Content-Type: application/xml`, so the URL
 * extension doesn't matter for sharded sitemaps that need dynamic segments.
 *
 * - Static sitemap: `sitemapResponse({ entries })`
 * - Sitemap index pointing at shards: `sitemapIndexResponse({ shards })`
 */
export type ChangeFreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
export type SitemapEntry = {
    /** Absolute URL of the page. Will be XML-escaped automatically. */
    url: string;
    /** Date the page was last modified. */
    lastModified: Date;
    /** Hint for crawlers about how often the page changes. Optional. */
    changeFrequency?: ChangeFreq;
    /** SEO weight 0.0–1.0. Optional; defaults to omitted (search engines treat as 0.5). */
    priority?: number;
};
export type SitemapIndexEntry = {
    /** Absolute URL of the shard sitemap. Will be XML-escaped automatically. */
    url: string;
    /** Date the shard was last regenerated. */
    lastModified: Date;
};
/**
 * Renders a sitemap urlset XML body. An entry with an Invalid Date is listed without `<lastmod>`.
 * Use directly when you need the raw string; otherwise prefer `sitemapResponse`.
 */
export declare function renderUrlset(entries: readonly SitemapEntry[]): string;
/**
 * Renders a sitemap index XML body that points at sharded sitemaps.
 * Use when a single sitemap would exceed the 50,000-URL Google limit.
 */
export declare function renderSitemapIndex(entries: readonly SitemapIndexEntry[]): string;
/**
 * Builds a complete `Response` for a `/sitemap.xml` route.
 * Sets `Content-Type: application/xml; charset=utf-8` and a 1-hour cache by default.
 *
 * @example
 * ```ts
 * sitemapResponse({
 *   entries: [
 *     { url: 'https://example.com', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
 *     { url: 'https://example.com/about', lastModified: new Date(), changeFrequency: 'monthly' },
 *   ],
 * });
 * ```
 */
export declare function sitemapResponse(options: {
    entries: readonly SitemapEntry[];
    cacheSeconds?: number;
}): Response;
/**
 * Builds a complete `Response` for a sitemap index that points at shard sitemaps.
 *
 * @example
 * ```ts
 * sitemapIndexResponse({
 *   shards: shardIds.map(id => ({
 *     url: `${baseUrl}/sitemap/${id}`,
 *     lastModified: new Date(),
 *   })),
 * });
 * ```
 */
export declare function sitemapIndexResponse(options: {
    shards: readonly SitemapIndexEntry[];
    cacheSeconds?: number;
}): Response;
//# sourceMappingURL=sitemap.d.ts.map