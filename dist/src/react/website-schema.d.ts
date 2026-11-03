import type { WebSiteSchemaProps } from '../types.js';
/**
 * WebSite schema with optional SearchAction for sitelinks search box.
 *
 * The SearchAction includes Google's `query-input` extension which is not
 * part of the official schema.org spec (and therefore not in schema-dts types),
 * so we widen the type to accommodate it.
 *
 * @see https://schema.org/WebSite
 * @see https://developers.google.com/search/docs/appearance/structured-data/sitelinks-searchbox
 */
export declare function WebSiteSchema({ siteName, siteUrl, siteDescription, searchUrlTemplate, }: WebSiteSchemaProps): import("react").JSX.Element;
//# sourceMappingURL=website-schema.d.ts.map