export enum ENV {
  PRODUCTION = 'production',
  PREPRODUCTION = 'preproduction',
  DEVELOPMENT = 'development',
  LOCAL = 'local'
}

export enum STATUS {
  PENDING = 'pending',
  SUCCESS = 'success',
  FAILURE = 'failure'
}

export const toastSettings: object = {
  position: 'bottom-left',
  autoClose: 3000,
  limit: 3,
  theme: 'light',
  newestOnTop: true
}

export enum ROLES {
  USER = '2001',
  EDITOR = '1984',
  ADMIN = '5150'
}
