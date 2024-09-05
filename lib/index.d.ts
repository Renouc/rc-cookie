declare module "rc-cookie" {
  /**
   * Get cookie value by name
   * @param name Cookie name
   * @returns Cookie value
   */
  export function parseCookie(name: string): string;

  /**
   * Get all cookies
   * @returns All cookies
   */
  export function parseCookie(): Record<string, string>;
}
