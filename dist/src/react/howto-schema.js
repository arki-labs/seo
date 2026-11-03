import { jsx as _jsx } from "react/jsx-runtime";
import { JsonLdScript } from './json-ld-script.js';
/**
 * HowTo schema for step-by-step guides.
 * Displays step-by-step instructions in search results.
 *
 * @see https://schema.org/HowTo
 */
export function HowToSchema({ name, description, steps, totalTime, }) {
    const data = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name,
        description,
        totalTime,
        step: steps.map((step, index) => ({
            '@type': 'HowToStep',
            position: index + 1,
            name: step.name,
            text: step.text,
            image: step.image,
        })),
    };
    return _jsx(JsonLdScript, { id: "howto-schema", data: data });
}
//# sourceMappingURL=howto-schema.js.map