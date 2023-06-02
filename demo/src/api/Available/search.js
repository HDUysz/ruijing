import request from '@/untils/http.js';

export function getItem(queryInfo, page) {
  console.log('调用了getItem', queryInfo, page);
  return request({
    url: `http://139.9.113.73/asset/condition/${page}`,
    method: 'post',
    data: queryInfo,
    metaData: {
      isSearch: true,
    },
  });
}
