// Example usage
// console.log(getCountryByLanguage('es')); // Output: 'es'
// console.log(getCountryByLanguage('fr')); // Output: 'fr'
// This function takes a language code as input and returns the corresponding country code. It uses a predefined mapping of language
// codes to country codes. If the input language code is not found in the mapping, it defaults to 'us' (United States). This function is
// useful for converting language codes to country codes for localization or internationalization purposes.
// The mapping is defined as a constant object, and the function uses the Record type to ensure type safety. The function can be easily
// extended to include more language-country pairs as needed.

export const languageToCountryMap: Record<string, string> = {
  en: 'US', // default to 'us' for English
  es: 'ES', // Spanish
  fr: 'FR', // French
  ja: 'JP', // Japanese
  ko: 'KR', // Korean
  zh: 'CN', // Chinese
  it: 'IT', // Italian
  de: 'DE', // German
  hi: 'IN', // Hindi
  pt: 'PT', // Portuguese
  ru: 'RU', // Russian
  tr: 'TR', // Turkish
  ar: 'AE', // Arabic (UAE)
  nl: 'NL', // Dutch
  pl: 'PL', // Polish
  sv: 'SE', // Swedish
  da: 'DK', // Danish
};
