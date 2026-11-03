import { jsx as _jsx } from "react/jsx-runtime";
import { JsonLdScript } from './json-ld-script.js';
/**
 * ItemList schema for category pages listing multiple items.
 *
 * @see https://schema.org/ItemList
 */
export function ItemListSchema({ name, description, items, id, siteUrl, }) {
    const data = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name,
        description,
        numberOfItems: items.length,
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            url: item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`,
            description: item.description,
        })),
    };
    return _jsx(JsonLdScript, { id: `item-list-schema-${id}`, data: data });
}
//# sourceMappingURL=item-list-schema.js.map