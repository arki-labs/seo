'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from '@tanstack/react-router';
import { ArrowRight, Compass } from '@arki/icons/phosphor';
import { Badge } from '@arki/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@arki/ui/card';
import { cn } from '@arki/ui/cn';
import { ItemListSchema } from './item-list-schema.js';
function SectionHeader({ title, description, count, itemLabel, }) {
    return (_jsx("div", { className: "mb-8", children: _jsxs("div", { className: "flex items-start gap-4", children: [_jsx("div", { className: "flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/80 to-primary shadow-lg shadow-primary/25", children: _jsx(Compass, { className: "h-7 w-7 text-primary-foreground" }) }), _jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("h2", { className: "font-serif text-2xl font-bold tracking-tight text-foreground", children: title }), _jsxs(Badge, { variant: "secondary", className: "bg-primary/10 text-primary", children: [count, " ", itemLabel, count === 1 ? '' : 's'] })] }), _jsx("p", { className: "mt-2 max-w-2xl text-base text-muted-foreground", children: description })] })] }) }));
}
function ItemCard({ item, itemLabel, hrefBuilder, Icon, }) {
    return (_jsx(Link, { to: hrefBuilder(item.key), className: "group block h-full", children: _jsxs(Card, { className: cn('relative flex h-full flex-col overflow-hidden transition-all duration-300', 'border border-border bg-card', 'hover:-translate-y-1 hover:shadow-xl', 'hover:border-primary/50', 'hover:shadow-primary/10'), children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" }), _jsx(CardHeader, { className: "relative flex-shrink-0 pb-3", children: _jsxs("div", { className: "flex items-start gap-3", children: [_jsx("div", { className: "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20", children: _jsx(Icon, { className: "h-5 w-5 text-primary" }) }), _jsx("div", { className: "min-w-0 flex-1", children: _jsx(CardTitle, { className: "line-clamp-2 text-base font-semibold leading-snug transition-colors duration-300 group-hover:text-primary", children: item.title }) }), _jsx(ArrowRight, { className: "h-4 w-4 flex-shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" })] }) }), _jsxs(CardContent, { className: "relative flex flex-1 flex-col pt-0", children: [_jsx(CardDescription, { className: "line-clamp-3 flex-1 text-sm leading-relaxed", children: item.description }), _jsxs("div", { className: "mt-4 flex items-center text-sm font-medium text-primary", children: [_jsxs("span", { children: ["Try this ", itemLabel] }), _jsx(ArrowRight, { className: "ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" })] })] })] }) }));
}
/**
 * Related items section for internal linking and SEO.
 * Displays a grid of related items with optional schema.org markup.
 * Generalized from domain-specific patterns to work across any app.
 */
export function RelatedItems({ items, title = 'Related Items', description = 'Explore more items that might be useful for you', className, includeSchema = true, schemaId = 'related-items', itemLabel = 'item', hrefBuilder = (key) => `/${key}`, icon: Icon = ArrowRight, siteUrl, }) {
    if (items.length === 0)
        return null;
    const schemaItems = items.map(item => ({
        name: item.title,
        url: hrefBuilder(item.key),
        description: item.description,
    }));
    return (_jsxs("section", { className: cn('border-t border-border bg-muted/50 px-4 py-12 sm:px-6 lg:px-8', className), children: [includeSchema && (_jsx(ItemListSchema, { name: title, description: description, items: schemaItems, id: schemaId, siteUrl: siteUrl })), _jsx(SectionHeader, { title: title, description: description, count: items.length, itemLabel: itemLabel }), _jsx("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3", children: items.map(item => (_jsx(ItemCard, { item: item, itemLabel: itemLabel, hrefBuilder: hrefBuilder, Icon: Icon }, item.key))) })] }));
}
/**
 * Compact inline list of related items for sidebar or footer.
 */
export function RelatedItemsCompact({ items, title = 'Related', className, hrefBuilder = (key) => `/${key}`, icon: Icon = ArrowRight, }) {
    if (items.length === 0)
        return null;
    return (_jsxs("div", { className: cn('', className), children: [title && _jsx("h3", { className: "mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground", children: title }), _jsx("ul", { className: "space-y-2", children: items.map(item => (_jsx("li", { children: _jsxs(Link, { to: hrefBuilder(item.key), className: "group flex items-center gap-2 text-foreground transition-colors hover:text-primary", children: [_jsx(Icon, { className: "h-4 w-4 flex-shrink-0 text-muted-foreground group-hover:text-primary" }), _jsx("span", { className: "truncate text-sm", children: item.title })] }) }, item.key))) })] }));
}
//# sourceMappingURL=related-items.js.map