import request from '@/untils/http.js';

export function getArticleList(type, page) {
  return request({
    url: `/article/${type}/${page}`,
    method: 'get',
  });
}
