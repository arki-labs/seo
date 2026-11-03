/**
 * SEO and Metadata Components for TanStack Start
 *
 * Provides components for managing document head, meta tags, and SEO.
 */
import React from 'react';
export type MetaProps = {
    /**
     * Page title
     */
    title?: string;
    /**
     * Title template (e.g., "%s | My App")
     */
    titleTemplate?: string;
    /**
     * Page description
     */
    description?: string;
    /**
     * Canonical URL
     */
    canonical?: string;
    /**
     * Open Graph metadata
     */
    openGraph?: {
        title?: string;
        description?: string;
        type?: 'website' | 'article' | 'product';
        url?: string;
        siteName?: string;
        images?: {
            url: string;
            width?: number;
            height?: number;
            alt?: string;
        }[];
        locale?: string;
        publishedTime?: string;
        authors?: string[];
    };
    /**
     * Twitter Card metadata
     */
    twitter?: {
        card?: 'summary' | 'summary_large_image' | 'player';
        site?: string;
        creator?: string;
        title?: string;
        description?: string;
        image?: string;
    };
    /**
     * Additional meta tags
     */
    additionalMetaTags?: {
        name?: string;
        property?: string;
        content: string;
    }[];
    /**
     * Additional link tags
     */
    additionalLinkTags?: {
        rel: string;
        href: string;
        sizes?: string;
        type?: string;
    }[];
    /**
     * Robots meta tag
     */
    robots?: {
        index?: boolean;
        follow?: boolean;
        noarchive?: boolean;
        nosnippet?: boolean;
        noimageindex?: boolean;
    };
};
/**
 * Generates meta tags for the document head
 *
 * @example
 * ```tsx
 * // In your route component
 * export const Route = createFileRoute('/')({
 *   head: () => ({
 *     meta: Meta({
 *       title: 'Home',
 *       description: 'Welcome to our app',
 *       openGraph: {
 *         title: 'Home | My App',
 *         type: 'website',
 *       },
 *     }),
 *   }),
 * });
 * ```
 */
export declare function Meta(props: MetaProps): {
    name?: string;
    property?: string;
    content: string;
}[];
export type HeadProps = {
    /**
     * Page title
     */
    title?: string;
    /**
     * Meta tags from Meta() function
     */
    meta?: ReturnType<typeof Meta>;
    /**
     * Children elements for the head
     */
    children?: React.ReactNode;
};
/**
 * Head component for document head management
 * Use with TanStack Start's built-in head support
 */
export declare function Head(props: HeadProps): React.ReactElement;
export type ScriptsProps = {
    /**
     * Defer script loading
     * @default true
     */
    defer?: boolean;
    /**
     * Async script loading
     * @default false
     */
    async?: boolean;
};
/**
 * Scripts component placeholder
 * TanStack Start handles script injection automatically
 */
export declare function Scripts(_props: ScriptsProps): null;
//# sourceMappingURL=tanstack-start.d.ts.map