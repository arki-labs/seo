import { jsx as _jsx } from "react/jsx-runtime";
import { JsonLdScript } from './json-ld-script.js';
/**
 * SoftwareApplication schema for web-based tools and applications.
 *
 * @see https://schema.org/SoftwareApplication
 */
export function SoftwareApplicationSchema({ name, description, url, category, keywords, id, siteName, siteUrl, }) {
    const fullUrl = url.startsWith('http') ? url : `${siteUrl}${url}`;
    const data = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name,
        description,
        url: fullUrl,
        applicationCategory: category,
        operatingSystem: 'Web',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
        },
        provider: {
            '@type': 'Organization',
            name: siteName,
        },
        keywords: keywords?.join(', '),
    };
    return _jsx(JsonLdScript, { id: `software-app-schema-${id}`, data: data });
}
//# sourceMappingURL=software-application-schema.js.map