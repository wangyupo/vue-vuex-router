/**
 * 请求统一管理
 */
import Request from './request';

/* Common */
export const rankGender = data => Request.get('api/ranking/gender', data);
