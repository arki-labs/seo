import { jsx as _jsx } from "react/jsx-runtime";
import { JsonLdScript } from './json-ld-script.js';
/**
 * FAQPage schema for FAQ sections.
 * Displays FAQ accordion in search results.
 *
 * @see https://schema.org/FAQPage
 */
export function FAQSchema({ faqs }) {
    if (faqs.length === 0)
        return null;
    const data = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            ...(faq.datePublished && { datePublished: faq.datePublished }),
            ...(faq.dateModified && { dateModified: faq.dateModified }),
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
    return _jsx(JsonLdScript, { id: "faq-schema", data: data });
}
//# sourceMappingURL=faq-schema.js.map