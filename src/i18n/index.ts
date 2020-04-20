import i18n from './i18n'

type TReturnTypes = string | string[] | Record<string, any>

export const createT = (prefix: string) => {
  return function customT<T extends TReturnTypes = string>(
    key: string,
    options?: Record<string, any>,
  ) {
    return i18n.t<T>(`${prefix}${key}`, options)
  }
}

export default i18n
