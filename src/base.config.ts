// Base URLs
const BASE_URL_LOCAL = "http://localhost:4321";
const BASE_URL_PROD = "https://codary.tech";
export const BASE_URL = import.meta.env.DEV ? BASE_URL_LOCAL : BASE_URL_PROD;

// cookies identifiers
export const ACCESS_TOKEN = "sb-access-token";
export const REFRESH_TOKEN = "sb-refresh-token";
