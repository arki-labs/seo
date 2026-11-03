import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '@arki/ui/cn';
import { FAQSchema } from './faq-schema.js';
/**
 * Server-rendered FAQ section with all answers visible in static HTML.
 *
 * Unlike FAQSection (accordion) and FAQCompact (details/summary), this component
 * renders all Q&A pairs as visible h3 + p elements without any JavaScript toggling.
 * This is critical for:
 * - LLM crawlers (GPTBot, ClaudeBot, PerplexityBot) that don't execute JS
 * - Google's initial HTML indexing pass
 * - Content extractability by AI search systems
 *
 * Use this component for primary page FAQs. Use FAQSection/FAQCompact for
 * supplementary or sidebar FAQs where space conservation matters.
 *
 * @example
 * ```tsx
 * <FAQVisible
 *   title="Frequently Asked Questions about BMI"
 *   faqs={[
 *     { question: 'What is BMI?', answer: 'BMI stands for Body Mass Index...' },
 *     { question: 'How is BMI calculated?', answer: 'BMI is calculated by...' },
 *   ]}
 * />
 * ```
 */
export function FAQVisible({ title = 'Frequently Asked Questions', description, faqs, className, includeSchema = true, }) {
    if (faqs.length === 0)
        return null;
    return (_jsxs("section", { className: cn('py-12', className), children: [includeSchema && _jsx(FAQSchema, { faqs: faqs }), _jsxs("div", { className: "mx-auto max-w-3xl", children: [_jsxs("div", { className: "mb-8 text-center", children: [_jsx("h2", { className: "font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl", children: title }), description && (_jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: description }))] }), _jsx("div", { className: "space-y-8", children: faqs.map((faq, index) => (_jsxs("div", { className: "border-b border-border pb-6 last:border-b-0", children: [_jsx("h3", { className: "text-lg font-medium text-foreground", children: faq.question }), _jsx("p", { className: "mt-2 text-muted-foreground leading-relaxed", children: faq.answer })] }, index))) })] })] }));
}
//# sourceMappingURL=faq-visible.js.map