import type { DeepDiveExample } from '../types.js';
type DeepDiveShowcaseProps = {
    /** Section title. Defaults to "In-Depth Examples" */
    title?: string;
    /** Array of deep-dive examples to render */
    deepDives: DeepDiveExample[];
    /** Additional CSS class names */
    className?: string;
};
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
export declare function DeepDiveShowcase({ title, deepDives, className, }: DeepDiveShowcaseProps): import("react").JSX.Element | null;
export {};
//# sourceMappingURL=deep-dive-showcase.d.ts.map