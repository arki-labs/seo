import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '@arki/ui/cn';
/**
 * Server-rendered worked examples with self-contained paragraphs.
 *
 * Each example renders as a self-contained block with scenario, explanation,
 * and takeaway — optimized for LLM snippet extraction. LLMs tend to cite
 * individual paragraphs, so each section is written to stand alone.
 *
 * @example
 * ```tsx
 * <ExampleShowcase
 *   title="Calculation Examples"
 *   examples={[
 *     {
 *       heading: 'BMI Calculation',
 *       scenario: 'A person who is 5\'10" and weighs 165 lbs.',
 *       explanation: 'The BMI formula yields 23.7, which falls in the normal range.',
 *       takeaway: 'A BMI between 18.5 and 24.9 indicates a healthy weight.',
 *     },
 *   ]}
 * />
 * ```
 */
export function ExampleShowcase({ title = 'Examples', examples, className, renderExampleAction, }) {
    if (examples.length === 0)
        return null;
    return (_jsxs("section", { className: cn('py-8', className), children: [_jsx("h2", { className: "font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl", children: title }), _jsx("div", { className: "mt-6 space-y-8", children: examples.map((example, index) => (_jsxs("div", { className: "rounded-lg border border-border bg-muted/30 p-6", children: [_jsx("h3", { className: "text-lg font-medium text-foreground", children: example.heading }), _jsx("p", { className: "mt-2 text-muted-foreground leading-relaxed", children: example.scenario }), _jsx("p", { className: "mt-3 text-muted-foreground leading-relaxed", children: example.explanation }), _jsxs("p", { className: "mt-3 text-sm font-medium text-foreground", children: [_jsx("strong", { children: "Key takeaway:" }), ' ', _jsx("span", { className: "font-normal text-muted-foreground", children: example.takeaway })] }), example.inputs && renderExampleAction && (_jsx("div", { className: "mt-4 border-t border-border pt-4", children: renderExampleAction(example.inputs) }))] }, index))) })] }));
}
//# sourceMappingURL=example-showcase.js.map