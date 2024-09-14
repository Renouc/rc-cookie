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

  export class CookieStorage {
    static clear(): void;
    static getItem(key: string): string | null;
    static removeItem(key: string): void;
    static setItem(key: string, value: string): void;
  }
}
