import { jsx as _jsx } from "react/jsx-runtime";
import { JsonLdScript } from './json-ld-script.js';
/**
 * Organization schema for the homepage.
 * Helps Google understand your brand and display in knowledge panels.
 *
 * @see https://schema.org/Organization
 */
export function OrganizationSchema({ siteName, siteUrl, siteDescription, authorName, logoPath = '/icon.png', sameAs = [], }) {
    const data = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteName,
        url: siteUrl,
        logo: `${siteUrl}${logoPath}`,
        description: siteDescription,
        sameAs,
        founder: {
            '@type': 'Person',
            name: authorName,
        },
    };
    return _jsx(JsonLdScript, { id: "organization-schema", data: data });
}
//# sourceMappingURL=organization-schema.js.map