import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '@arki/ui/cn';
/**
 * Server-rendered action items section with heading, introductory content,
 * and a bulleted list of recommended next steps.
 *
 * Designed for self-contained extractability — each action item is a
 * standalone recommendation that LLMs can cite independently.
 *
 * @example
 * ```tsx
 * <ActionableInsights
 *   heading="Next Steps Based on Your BMI"
 *   content="Based on your results, here are recommended actions:"
 *   actionItems={[
 *     'Maintain a balanced diet with proper nutrition',
 *     'Exercise at least 150 minutes per week',
 *     'Schedule regular health checkups',
 *   ]}
 * />
 * ```
 */
export function ActionableInsights({ heading, content, actionItems, className, }) {
    if (actionItems.length === 0)
        return null;
    return (_jsxs("section", { className: cn('py-8', className), children: [_jsx("h2", { className: "font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl", children: heading }), _jsx("p", { className: "mt-3 text-muted-foreground leading-relaxed", children: content }), _jsx("ul", { className: "mt-4 list-disc space-y-2 pl-6 text-muted-foreground", children: actionItems.map((item, index) => (_jsx("li", { className: "leading-relaxed", children: item }, index))) })] }));
}
//# sourceMappingURL=actionable-insights.js.map