import type { ComponentType } from 'react';
type RelatedItem = {
    key: string;
    title: string;
    description: string;
};
type RelatedItemsProps = {
    items: RelatedItem[];
    title?: string;
    description?: string;
    className?: string;
    /** Whether to include the ItemList schema for SEO */
    includeSchema?: boolean;
    /** Unique ID for the schema (e.g., 'related-to-gradient') */
    schemaId?: string;
    /** Label for each item type (e.g., 'tool', 'calculator'). Used in CTAs. */
    itemLabel?: string;
    /** Builds the href for each item. Defaults to `(key) => \`/\${key}\`` */
    hrefBuilder?: (key: string) => string;
    /** Icon component for each item card */
    icon?: ComponentType<{
        className?: string;
    }>;
    /** Site URL for schema generation */
    siteUrl: string;
};
/**
 * Related items section for internal linking and SEO.
 * Displays a grid of related items with optional schema.org markup.
 * Generalized from domain-specific patterns to work across any app.
 */
export declare function RelatedItems({ items, title, description, className, includeSchema, schemaId, itemLabel, hrefBuilder, icon: Icon, siteUrl, }: RelatedItemsProps): import("react").JSX.Element | null;
/**
 * Compact inline list of related items for sidebar or footer.
 */
export declare function RelatedItemsCompact({ items, title, className, hrefBuilder, icon: Icon, }: {
    items: RelatedItem[];
    title?: string;
    className?: string;
    hrefBuilder?: (key: string) => string;
    icon?: ComponentType<{
        className?: string;
    }>;
}): import("react").JSX.Element | null;
export {};
//# sourceMappingURL=related-items.d.ts.map