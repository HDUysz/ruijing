import request from '@/untils/http.js';

export function getDetil(id) {
  return request({
    url: `http://139.9.113.73/asset/${id}`,
    method: 'get',
  });
}
