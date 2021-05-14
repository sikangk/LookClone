import React from 'react';
import {Text} from 'react-native';

const ProductInfoBody = ({component}) => {
  if (component === '상세정보') return <Text>상세정보</Text>;
  if (component === 'QNA') return <Text>QNA</Text>;
  if (component === '리뷰') return <Text>리뷰</Text>;
  if (component === '관련상품') return <Text>관련상품</Text>;
};

export default ProductInfoBody;
