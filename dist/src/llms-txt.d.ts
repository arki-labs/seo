type LlmsTxtItem = {
    title: string;
    url: string;
    description: string;
};
type LlmsTxtSection = {
    heading: string;
    items: LlmsTxtItem[];
};
type LlmsTxtInput = {
    /** Site/project name */
    name: string;
    /** Short tagline */
    tagline: string;
    /** Longer description paragraph */
    description: string;
    /** Grouped sections of links */
    sections: LlmsTxtSection[];
};
type LlmsFullTxtInput = LlmsTxtInput & {
    /** Additional detailed content per section or tool (keyed by section heading or item title) */
    details: Record<string, string>;
};
/**
 * Generates an llms.txt file content as a markdown string.
 *
 * The llms.txt convention provides LLM-friendly site descriptions,
 * helping AI models discover and understand site content.
 *
 * @see https://llmstxt.org/
 *
 * @example
 * ```ts
 * const content = generateLlmsTxt({
 *   name: 'Acme CSS',
 *   tagline: 'Free CSS tools in your browser',
 *   description: 'Free online CSS tools...',
 *   sections: [
 *     { heading: 'Tools', items: [{ title: 'Gradient Generator', url: '...', description: '...' }] },
 *   ],
 * });
 * ```
 */
export declare function generateLlmsTxt(input: LlmsTxtInput): string;
/**
 * Generates an extended llms-full.txt with additional detail sections.
 * Used for comprehensive AI model consumption with full capabilities listing.
 */
export declare function generateLlmsFullTxt(input: LlmsFullTxtInput): string;
export {};
//# sourceMappingURL=llms-txt.d.ts.map