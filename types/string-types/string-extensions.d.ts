declare module 'string-extensions' {
  // Declare the module's exports here
  //export function myFunction(arg: string): number
  //export const myVariable: string
  export interface String {
    /**
     * Capitalizes the first character of the string.
     * @returns {string} The capitalized string.
     */
    capitalize(): string
  }
}