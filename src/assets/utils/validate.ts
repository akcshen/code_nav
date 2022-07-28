/**
 * @purpose 判断url链接是否是https?:|mailto:|tel: 开头的
 * @param {string} path
 * @returns {Boolean}
 */
export const isExternal = (path: string) => /^(https?:|mailto:|tel:)/.test(path)
