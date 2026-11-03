type FAQItem = {
    question: string;
    answer: string;
};
type FAQSectionProps = {
    title?: string;
    description?: string;
    faqs: FAQItem[];
    className?: string;
    /** Whether to include the FAQ schema for SEO */
    includeSchema?: boolean;
    /**
     * Optional progressive disclosure. When set, only the first `initialCount`
     * questions render until the user clicks "Show all". Useful on long pages
     * where the visible accordion would otherwise dominate scroll depth.
     *
     * AEO note: this affects the visible accordion only. If schema is needed
     * for the hidden questions, ensure `includeSchema` is true (or that a
     * separate FAQSchema covers the full set), so search/AI engines still see
     * every question.
     */
    initialCount?: number;
    /** Override the "Show all N questions" / "Show fewer questions" button labels. */
    expandLabel?: (hiddenCount: number) => string;
    collapseLabel?: string;
};
/**
 * FAQ Section component with accordion functionality and optional schema.org markup.
 * Provides both user-friendly UI and SEO-optimized structured data.
 */
export declare function FAQSection({ title, description, faqs, className, includeSchema, initialCount, expandLabel, collapseLabel, }: FAQSectionProps): import("react").JSX.Element | null;
/**
 * Compact FAQ list using native details/summary elements.
 * Suitable for sidebars or smaller sections.
 */
export declare function FAQCompact({ faqs, className, includeSchema, }: {
    faqs: FAQItem[];
    className?: string;
    includeSchema?: boolean;
}): import("react").JSX.Element | null;
export {};
//# sourceMappingURL=faq-section.d.ts.map