import { jsx as _jsx } from "react/jsx-runtime";
import { JsonLdScript } from './json-ld-script.js';
/**
 * BreadcrumbList schema for navigation breadcrumbs.
 * Displays breadcrumb trail in search results.
 *
 * @see https://schema.org/BreadcrumbList
 */
export function BreadcrumbSchema({ items, siteUrl }) {
    const data = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.label,
            item: item.href.startsWith('http') ? item.href : `${siteUrl}${item.href}`,
        })),
    };
    return _jsx(JsonLdScript, { id: "breadcrumb-schema", data: data });
}
//# sourceMappingURL=breadcrumb-schema.js.map