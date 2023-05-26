import request from '@/untils/http.js';

export function getAssetList() {
  return request({
    url: 'http://139.9.113.73/asset/index',
    method: 'get',
  });
}
