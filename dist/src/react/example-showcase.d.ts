import type React from 'react';
import type { ExampleItem } from '../types.js';
type ExampleShowcaseProps = {
    /** Section title. Defaults to "Examples" */
    title?: string;
    /** Array of worked examples */
    examples: ExampleItem[];
    /** Additional CSS class names */
    className?: string;
    /** Render prop for an interactive action on examples that have `inputs`.
     *  Receives the example's input values and returns a React node (typically a client button).
     *  This keeps ExampleShowcase as a server component while allowing interactive islands. */
    renderExampleAction?: (inputs: Record<string, unknown>) => React.ReactNode;
};
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
export declare function ExampleShowcase({ title, examples, className, renderExampleAction, }: ExampleShowcaseProps): React.JSX.Element | null;
export {};
//# sourceMappingURL=example-showcase.d.ts.map