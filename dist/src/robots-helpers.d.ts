/**
 * Framework-agnostic robots.txt builder.
 *
 * Apps invoke `robotsTxtResponse({ baseUrl, ... })` from a server handler
 * (TanStack Start route, Hono handler, plain Node) and return the resulting
 * `Response` directly.
 *
 * Crawlers parse robots.txt by content, not URL extension, so the builder is
 * decoupled from the routing framework.
 */
export type RobotsTxtOptions = {
    /** Absolute base URL of the site, used to build the `Sitemap:` line. */
    baseUrl: string;
    /** Path of the sitemap relative to `baseUrl`. Defaults to `/sitemap.xml`. */
    sitemapPath?: string;
    /**
     * Paths blocked for the wildcard `*` user-agent. Defaults to `['/api/', '/auth/']`.
     * Pass `[]` to allow everything.
     */
    disallow?: readonly string[];
    /**
     * AI crawler user-agents to explicitly allow with their own permissive rule.
     * Defaults to GPTBot, ClaudeBot, PerplexityBot, Applebot, Bingbot, Google-Extended.
     * Pass `[]` to omit AI-specific rules entirely (e.g. for apps that should not be
     * indexed by AI), or pass a custom list.
     */
    allowAiBots?: readonly string[];
    /** Extra rule blocks appended verbatim after the default rules. */
    extraRules?: readonly string[];
};
/**
 * Builds the body of a robots.txt file.
 *
 * @example
 * ```ts
 * renderRobotsTxt({
 *   baseUrl: 'https://example.com',
 *   disallow: ['/api/', '/auth/', '/debug/'],
 * });
 * ```
 */
export declare function renderRobotsTxt(options: RobotsTxtOptions): string;
/**
 * Builds a complete `Response` for a `/robots.txt` route.
 * Sets `Content-Type: text/plain; charset=utf-8` and a 1-day cache by default.
 */
export declare function robotsTxtResponse(options: RobotsTxtOptions & {
    cacheSeconds?: number;
}): Response;
//# sourceMappingURL=robots-helpers.d.ts.map