const posalMethodType = new Map(
  [1, '折现变现'],
  [2, '债务更新'],
  [3, '以资抵债'],
  [4, '资产置换'],
  [5, '收益权转让'],
  [6, '破产清算'],
  [7, '以物抵债'],
  [8, '委托处置'],
  [9, '诉讼追偿'],
  [10, '其他方式']
);

export function getPosalType(key) {
  return posalMethodType.get(key);
}
