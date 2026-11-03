import type { EducationalSection } from '../types.js';
type EducationalContentProps = {
    /** Array of educational sections to render */
    sections: EducationalSection[];
    /** Additional CSS class names */
    className?: string;
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
export declare function EducationalContent({ sections, className }: EducationalContentProps): import("react").JSX.Element | null;
export {};
//# sourceMappingURL=educational-content.d.ts.map