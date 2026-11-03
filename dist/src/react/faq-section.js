'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { CaretDown } from '@arki/icons/phosphor';
import { cn } from '@arki/ui/cn';
import { FAQSchema } from './faq-schema.js';
/**
 * FAQ Section component with accordion functionality and optional schema.org markup.
 * Provides both user-friendly UI and SEO-optimized structured data.
 */
export function FAQSection({ title = 'Frequently Asked Questions', description, faqs, className, includeSchema = true, initialCount, expandLabel = hiddenCount => `Show all ${hiddenCount} more questions`, collapseLabel = 'Show fewer questions', }) {
    const [openIndex, setOpenIndex] = useState(null);
    const [showAll, setShowAll] = useState(false);
    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    if (faqs.length === 0)
        return null;
    const isProgressive = typeof initialCount === 'number' && initialCount > 0 && initialCount < faqs.length;
    const visibleFaqs = isProgressive && !showAll ? faqs.slice(0, initialCount) : faqs;
    const hiddenCount = faqs.length - (initialCount ?? faqs.length);
    return (_jsxs("section", { className: cn('py-12', className), children: [includeSchema && _jsx(FAQSchema, { faqs: faqs }), _jsxs("div", { className: "mx-auto max-w-3xl", children: [_jsxs("div", { className: "mb-8 text-center", children: [_jsx("h2", { className: "font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl", children: title }), description && _jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: description })] }), _jsx("div", { className: "divide-y divide-border", children: visibleFaqs.map((faq, index) => (_jsxs("div", { className: "py-4", children: [_jsxs("button", { type: "button", id: `faq-question-${index}`, onClick: () => toggleItem(index), className: "flex w-full items-center justify-between text-left", "aria-expanded": openIndex === index, "aria-controls": `faq-answer-${index}`, children: [_jsx("span", { className: "pr-4 text-lg font-medium text-foreground", children: faq.question }), _jsx(CaretDown, { "aria-hidden": "true", className: cn('h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-200', openIndex === index && 'rotate-180') })] }), _jsx("div", { id: `faq-answer-${index}`, role: "region", "aria-labelledby": `faq-question-${index}`, className: cn('overflow-hidden transition-all duration-200', openIndex === index ? 'mt-4 max-h-96' : 'max-h-0'), children: _jsx("p", { className: "text-muted-foreground", children: faq.answer }) })] }, index))) }), isProgressive && (_jsx("div", { className: "mt-6 flex justify-center", children: _jsxs("button", { type: "button", onClick: () => setShowAll(prev => !prev), className: cn('inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2', 'text-sm font-medium text-foreground shadow-sm transition-colors', 'hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'), "aria-expanded": showAll, children: [showAll ? collapseLabel : expandLabel(hiddenCount), _jsx(CaretDown, { "aria-hidden": "true", className: cn('h-4 w-4 text-muted-foreground transition-transform duration-200', showAll && 'rotate-180') })] }) }))] })] }));
}
/**
 * Compact FAQ list using native details/summary elements.
 * Suitable for sidebars or smaller sections.
 */
export function FAQCompact({ faqs, className, includeSchema = false, }) {
    if (faqs.length === 0)
        return null;
    return (_jsxs("div", { className: cn('space-y-4', className), children: [includeSchema && _jsx(FAQSchema, { faqs: faqs }), faqs.map((faq, index) => (_jsxs("details", { className: "group rounded-lg border border-border", children: [_jsxs("summary", { className: "flex cursor-pointer items-center justify-between p-4 font-medium text-foreground", children: [faq.question, _jsx(CaretDown, { className: "h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180" })] }), _jsx("div", { className: "border-t border-border px-4 pb-4 pt-3 text-muted-foreground", children: faq.answer })] }, index)))] }));
}
//# sourceMappingURL=faq-section.js.map