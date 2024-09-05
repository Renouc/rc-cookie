/**
 *
 * @param {*} name cookie 名称
 * @returns cookie 值 或 null
 */

export const parseCookie = (name) => {
  const cookies = {};

  document.cookie.split(";").forEach((cookie) => {
    const [key, value] = cookie.trim().split("=");
    cookies[key] = value;
  });

  if (name) return cookies[name];

  return cookies;
};
