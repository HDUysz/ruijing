import request from '@/untils/http';

export function getAvailableList(recommend, page) {
  return request({
    url: `http://139.9.113.73/asset/page/${recommend}/${page}`,
    method: 'get',
  });
}
