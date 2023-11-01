// o ideal é colocar no .env
export const API_URL = 'http://localhost:1337/api';
export const POSTS_URL = `${API_URL}/posts?populate=deep`;

export const SITE_NAME = 'Vinicius Santana';
export const SITE_URL = process.env.SITE_URL || 'http://127.0.0.1:3000';
