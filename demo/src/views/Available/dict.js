const posalMethodType = new Map([
  [1, '折现变现'],
  [2, '债务更新'],
  [3, '以资抵债'],
  [4, '资产置换'],
  [5, '收益权转让'],
  [6, '破产清算'],
  [7, '以物抵债'],
  [8, '委托处置'],
  [9, '诉讼追偿'],
  [10, '其他方式'],
]);

const collateralType = new Map([
  [1, '光地(工业)'],
  [2, '光地(商业)'],
  [3, '光地(商住)'],
  [4, '工业房产地'],
  [5, '住宅'],
  [6, '商业'],
  [7, '办公楼'],
  [8, '在建工程'],
  [9, '机械设备'],
  [10, '林权'],
  [11, '大宗物资'],
  [12, '运输设备'],
  [13, '生产用设'],
  [14, '股权'],
]);

export function getPosalType(key) {
  return posalMethodType.get(key);
}

export function getCollateralType(key) {
  return collateralType.get(key);
}
