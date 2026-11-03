import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '@arki/ui/cn';
/**
 * Server-rendered rich examples with multi-step calculation walkthroughs.
 *
 * Each deep-dive renders as a self-contained case study with industry context,
 * step-by-step calculations, optional before/after comparisons, and practical
 * decision guidance. Optimized for LLM snippet extraction — each section is
 * written to stand alone.
 *
 * @example
 * ```tsx
 * <DeepDiveShowcase
 *   deepDives={[{
 *     title: "Pouring a 20x20 ft Patio",
 *     industry: "home improvement",
 *     scenario: "A homeowner planning a backyard patio...",
 *     calculationSteps: [
 *       { label: "Area", value: "20 × 20 = 400 sq ft" },
 *       { label: "Volume", value: "400 × (4/12) = 133.3 cu ft" },
 *     ],
 *     decisionGuidance: "For a patio, 4 inches is standard.",
 *   }]}
 * />
 * ```
 */
export function DeepDiveShowcase({ title = 'In-Depth Examples', deepDives, className, }) {
    if (deepDives.length === 0)
        return null;
    return (_jsxs("section", { className: cn('py-8', className), children: [_jsx("h2", { className: "font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl", children: title }), _jsx("div", { className: "mt-6 space-y-8", children: deepDives.map((example, index) => (_jsxs("div", { className: "rounded-lg border border-border bg-muted/30 p-6", children: [_jsxs("div", { className: "flex items-start justify-between gap-4", children: [_jsx("h3", { className: "text-lg font-medium text-foreground", children: example.title }), example.industry && (_jsx("span", { className: "inline-flex flex-shrink-0 items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary", children: example.industry }))] }), _jsx("p", { className: "mt-2 text-muted-foreground leading-relaxed", children: example.scenario }), _jsx("div", { className: "mt-4 overflow-x-auto", children: _jsxs("table", { className: "w-full border-collapse text-sm", children: [_jsx("thead", { children: _jsxs("tr", { className: "border-b border-border", children: [_jsx("th", { className: "py-2 pr-4 text-left font-medium text-foreground", children: "Step" }), _jsx("th", { className: "py-2 text-left font-medium text-foreground", children: "Calculation" })] }) }), _jsx("tbody", { children: example.calculationSteps.map((step, i) => (_jsxs("tr", { className: "border-b border-border last:border-b-0", children: [_jsx("td", { className: "py-2 pr-4 font-medium text-foreground", children: step.label }), _jsx("td", { className: "py-2 font-mono text-sm text-muted-foreground", children: step.value })] }, i))) })] }) }), example.comparison && (_jsxs("div", { className: "mt-4 grid grid-cols-2 gap-4", children: [_jsxs("div", { className: "rounded-md border border-border bg-background p-3 text-center", children: [_jsx("p", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: "Before" }), _jsx("p", { className: "mt-1 font-mono text-sm text-foreground", children: example.comparison.before })] }), _jsxs("div", { className: "rounded-md border border-primary/30 bg-primary/5 p-3 text-center", children: [_jsx("p", { className: "text-xs font-medium uppercase tracking-wider text-primary", children: "After" }), _jsx("p", { className: "mt-1 font-mono text-sm text-foreground", children: example.comparison.after })] })] })), _jsxs("p", { className: "mt-4 text-sm font-medium text-foreground", children: [_jsx("strong", { children: "Decision guidance:" }), ' ', _jsx("span", { className: "font-normal text-muted-foreground", children: example.decisionGuidance })] })] }, index))) })] }));
}
//# sourceMappingURL=deep-dive-showcase.js.map