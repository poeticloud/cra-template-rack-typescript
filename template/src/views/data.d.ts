export interface SettingsItem {
  is_production: 'true' | 'false';
  api_origin: string;
  api_pathname: string;
}
export interface LoginInfo {
  email: string;
  password: string;
  is_admin: boolean;
}
export interface RegisterInfo {
  id: number;
  name: string;
  email: string;
  password: string;
  ts: number;
  sign: string;
}

export interface Pagination {
  current: number;
  pageSize: number;
  total: number;
}
