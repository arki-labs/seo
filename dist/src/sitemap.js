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
const DEFAULT_CACHE_SECONDS = 3600; // 1 hour
const SITEMAP_NS = 'http://www.sitemaps.org/schemas/sitemap/0.9';
const escapeXml = (value) => value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
/**
 * The date as ISO text, or `undefined` for an Invalid Date. `toISOString()` throws on an
 * Invalid Date, which would fail the whole sitemap for one entry; `<lastmod>` is optional,
 * so the entry stays listed without it.
 */
const toIsoDate = (date) => Number.isFinite(date.getTime()) ? date.toISOString() : undefined;
const lastmodLine = (date) => {
    const iso = toIsoDate(date);
    return iso === undefined ? [] : [`    <lastmod>${iso}</lastmod>`];
};
const renderUrlEntry = (entry) => {
    const lines = [
        '  <url>',
        `    <loc>${escapeXml(entry.url)}</loc>`,
        ...lastmodLine(entry.lastModified),
    ];
    if (entry.changeFrequency) {
        lines.push(`    <changefreq>${entry.changeFrequency}</changefreq>`);
    }
    if (typeof entry.priority === 'number') {
        lines.push(`    <priority>${entry.priority.toFixed(1)}</priority>`);
    }
    lines.push('  </url>');
    return lines.join('\n');
};
const renderIndexEntry = (entry) => [
    '  <sitemap>',
    `    <loc>${escapeXml(entry.url)}</loc>`,
    ...lastmodLine(entry.lastModified),
    '  </sitemap>',
].join('\n');
/**
 * Renders a sitemap urlset XML body. An entry with an Invalid Date is listed without `<lastmod>`.
 * Use directly when you need the raw string; otherwise prefer `sitemapResponse`.
 */
export function renderUrlset(entries) {
    return [
        '<?xml version="1.0" encoding="UTF-8"?>',
        `<urlset xmlns="${SITEMAP_NS}">`,
        ...entries.map(entry => renderUrlEntry(entry)),
        '</urlset>',
        '',
    ].join('\n');
}
/**
 * Renders a sitemap index XML body that points at sharded sitemaps.
 * Use when a single sitemap would exceed the 50,000-URL Google limit.
 */
export function renderSitemapIndex(entries) {
    return [
        '<?xml version="1.0" encoding="UTF-8"?>',
        `<sitemapindex xmlns="${SITEMAP_NS}">`,
        ...entries.map(entry => renderIndexEntry(entry)),
        '</sitemapindex>',
        '',
    ].join('\n');
}
const xmlResponse = (body, cacheSeconds) => new Response(body, {
    headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': `public, max-age=${cacheSeconds}, s-maxage=${cacheSeconds}`,
    },
});
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
export function sitemapResponse(options) {
    return xmlResponse(renderUrlset(options.entries), options.cacheSeconds ?? DEFAULT_CACHE_SECONDS);
}
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
export function sitemapIndexResponse(options) {
    return xmlResponse(renderSitemapIndex(options.shards), options.cacheSeconds ?? DEFAULT_CACHE_SECONDS);
}
//# sourceMappingURL=sitemap.js.map