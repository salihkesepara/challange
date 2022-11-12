import { ENV } from 'src/constants'

export const isProduction = process.env.REACT_APP_CUSTOM_NODE_ENV === ENV.PRODUCTION
export const isPreproduction = process.env.REACT_APP_CUSTOM_NODE_ENV === ENV.PREPRODUCTION
export const isDevelopment = process.env.REACT_APP_CUSTOM_NODE_ENV === ENV.DEVELOPMENT
export const local = process.env.REACT_APP_CUSTOM_NODE_ENV === ENV.LOCAL
export const baseURL = process.env.REACT_APP_BASE_URL
export const appVersion = process.env.REACT_APP_VERSION || '1.0.0'
export const appDefaultLanguage = process.env.REACT_APP_DEFAULT_LANGUAGE
