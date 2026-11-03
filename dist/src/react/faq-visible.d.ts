import type { FAQItem } from '../types.js';
type FAQVisibleProps = {
    /** Section title. Defaults to "Frequently Asked Questions" */
    title?: string;
    /** Optional description below the title */
    description?: string;
    /** Array of question/answer pairs */
    faqs: FAQItem[];
    /** Additional CSS class names */
    className?: string;
    /** Whether to include FAQPage schema.org markup for rich results. Defaults to true */
    includeSchema?: boolean;
};
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
export declare function FAQVisible({ title, description, faqs, className, includeSchema, }: FAQVisibleProps): import("react").JSX.Element | null;
export {};
//# sourceMappingURL=faq-visible.d.ts.map