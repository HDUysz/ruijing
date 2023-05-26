import request from '@/untils/http.js';

export function getItem(queryInfo, page) {
  return request({
    url: `http://139.9.113.73/asset/condition/${page}`,
    method: 'post',
    queryInfo,
  });
}
