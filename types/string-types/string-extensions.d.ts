declare module 'string-extensions' {
  // Declare the module's exports here
  //export function myFunction(arg: string): number
  //export const myVariable: string
  export function capitalize(str: string): string;
  export interface String {
    capitalize(): string;
  }
}
