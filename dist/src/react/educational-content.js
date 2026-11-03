import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '@arki/ui/cn';
const CALLOUT_STYLES = {
    info: {
        border: 'border-blue-200 dark:border-blue-800',
        bg: 'bg-blue-50/50 dark:bg-blue-950/30',
        icon: 'ℹ',
        iconColor: 'text-blue-600 dark:text-blue-400',
    },
    warning: {
        border: 'border-amber-200 dark:border-amber-800',
        bg: 'bg-amber-50/50 dark:bg-amber-950/30',
        icon: '⚠',
        iconColor: 'text-amber-600 dark:text-amber-400',
    },
    tip: {
        border: 'border-emerald-200 dark:border-emerald-800',
        bg: 'bg-emerald-50/50 dark:bg-emerald-950/30',
        icon: '💡',
        iconColor: 'text-emerald-600 dark:text-emerald-400',
    },
};
/**
 * Server-rendered educational content with semantic HTML.
 *
 * Renders structured educational sections based on their type:
 * - `text` — heading + paragraph
 * - `list` — heading + paragraph + unordered list
 * - `comparison` — heading + paragraph + description list (dt/dd pairs)
 * - `table` — heading + paragraph + data table
 * - `callout` — highlighted box with icon (info/warning/tip) for key facts
 * - `steps` — numbered step-by-step instructions
 * - `formula` — math formula block with explanation
 * - `stat-highlight` — large-number callout cards for key statistics
 *
 * All output uses semantic HTML elements (h2, p, ul, ol, dl, table) for
 * maximum extractability by search engines and LLM crawlers.
 */
export function EducationalContent({ sections, className }) {
    if (sections.length === 0)
        return null;
    return (_jsx("div", { className: cn('space-y-10', className), children: sections.map((section, index) => (_jsxs("section", { children: [_jsx("h2", { className: "font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl", children: section.heading }), section.type === 'callout' ? (() => {
                    const style = CALLOUT_STYLES[section.variant ?? 'info'];
                    return (_jsx("div", { className: cn('mt-4 rounded-lg border p-4', style.border, style.bg), children: _jsxs("div", { className: "flex gap-3", children: [_jsx("span", { className: cn('text-lg leading-none', style.iconColor), "aria-hidden": "true", children: style.icon }), _jsx("p", { className: "text-sm leading-relaxed text-foreground", children: section.content })] }) }));
                })() : (_jsx("p", { className: "mt-3 text-muted-foreground leading-relaxed", children: section.content })), section.type === 'list' && Array.isArray(section.items) && (_jsx("ul", { className: "mt-4 list-disc space-y-1 pl-6 text-muted-foreground", children: section.items.map((item, i) => (_jsx("li", { className: "leading-relaxed", children: item }, i))) })), section.type === 'comparison' && section.items && !Array.isArray(section.items) && (_jsx("dl", { className: "mt-4 space-y-3", children: Object.entries(section.items).map(([term, definition]) => (_jsxs("div", { className: "border-b border-border pb-3 last:border-b-0", children: [_jsx("dt", { className: "font-medium text-foreground", children: term }), _jsx("dd", { className: "mt-1 text-muted-foreground", children: definition })] }, term))) })), section.type === 'table' && section.items && !Array.isArray(section.items) && (_jsx("div", { className: "mt-4 overflow-x-auto", children: _jsxs("table", { className: "w-full border-collapse text-sm", children: [_jsx("thead", { children: _jsxs("tr", { className: "border-b border-border", children: [_jsx("th", { className: "py-2 pr-4 text-left font-medium text-foreground", children: "Category" }), _jsx("th", { className: "py-2 text-left font-medium text-foreground", children: "Value" })] }) }), _jsx("tbody", { children: Object.entries(section.items).map(([key, value]) => (_jsxs("tr", { className: "border-b border-border last:border-b-0", children: [_jsx("td", { className: "py-2 pr-4 text-muted-foreground", children: key }), _jsx("td", { className: "py-2 text-muted-foreground", children: value })] }, key))) })] }) })), section.type === 'steps' && Array.isArray(section.items) && (_jsx("ol", { className: "mt-4 list-decimal space-y-3 pl-6 text-muted-foreground", children: section.items.map((step, i) => (_jsx("li", { className: "leading-relaxed pl-1", children: step }, i))) })), section.type === 'formula' && section.formula && (_jsx("div", { className: "mt-4 overflow-x-auto rounded-lg border border-border bg-muted/30 px-6 py-4", children: _jsx("code", { className: "block font-mono text-sm leading-relaxed text-foreground whitespace-pre-wrap", children: section.formula }) })), section.type === 'stat-highlight' && section.items && !Array.isArray(section.items) && (_jsx("div", { className: "mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4", children: Object.entries(section.items).map(([label, value]) => (_jsxs("div", { className: "rounded-lg border border-border bg-muted/20 p-4 text-center", children: [_jsx("p", { className: "font-mono text-2xl font-bold text-foreground", children: value }), _jsx("p", { className: "mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground", children: label })] }, label))) }))] }, index))) }));
}
//# sourceMappingURL=educational-content.js.map