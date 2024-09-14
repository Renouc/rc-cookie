import { parseCookie } from "./parsecookie";

/**
 * @class CookieStorage
 * @description cookie 存储器
 */
export class CookieStorage {
  static getItem(key) {
    return parseCookie(key);
  }

  /**
   *
   * @param {string} key
   * @param {string} value
   */
  static setItem(key, value) {
    document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
  }

  /**
   * @param {*} key
   * @description 删除所有 cookie
   */
  static clear() {
    const cookies = parseCookie();
    Object.keys(cookies).forEach((key) => {
      document.cookie = `${encodeURIComponent(key)}=; max-age=0`;
    });
  }

  /**
   * @description 删除单个 cookie
   */

  static removeItem(key) {
    document.cookie = `${encodeURIComponent(key)}=; max-age=0`;
  }
}
