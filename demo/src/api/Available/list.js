import request from '@/untils/http';

export function getAvailableList(recommend, page) {
  return request({
    url: `/asset/page/${recommend}/${page}`,
    method: 'get',
  });
}
