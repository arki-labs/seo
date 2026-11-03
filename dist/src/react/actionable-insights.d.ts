import type { ActionableInsightsData } from '../types.js';
type ActionableInsightsProps = ActionableInsightsData & {
    /** Additional CSS class names */
    className?: string;
};
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
export declare function ActionableInsights({ heading, content, actionItems, className, }: ActionableInsightsProps): import("react").JSX.Element | null;
export {};
//# sourceMappingURL=actionable-insights.d.ts.map