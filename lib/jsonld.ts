/**
 * Safely serializes an object for inline JSON-LD script tags.
 * Escapes <, >, and & so malicious values cannot break out of <script> context.
 */
export function safeJsonLd(data: Record<string, unknown>): string {
  return JSON.stringify(data)
    .replace(/</g,  '\\u003c')
    .replace(/>/g,  '\\u003e')
    .replace(/&/g,  '\\u0026')
}
