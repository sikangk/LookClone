import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import ProductInfoBody from './ProductInfoBody';

const Container = styled.View`
  flex: 1;
`;

const InfoHeader = styled.View`
  flex-direction: row;
  border-bottom-width: 0.5px;
  border-bottom-color: grey;
`;

const InfoHeaderState = styled.TouchableOpacity`
  flex: 1;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin: 0px 10px 0px 10px;
`;
const HeaderText = styled.Text``;

const ContentContaier = styled.View`
  flex: 8;
  justify-content: center;
  align-items: center;
`;

const ProductInfo = () => {
  const [component, setComponent] = useState('상세정보');

  const onComponent = string => {
    setComponent(string);
  };
  return (
    <Container>
      <InfoHeader>
        <InfoHeaderState
          onPress={() => onComponent('상세정보')}
          style={{borderBottomWidth: component === '상세정보' ? 1 : 0}}>
          <HeaderText>상세정보</HeaderText>
        </InfoHeaderState>
        <InfoHeaderState
          onPress={() => onComponent('QNA')}
          style={{borderBottomWidth: component === 'QNA' ? 1 : 0}}>
          <HeaderText>Q&A</HeaderText>
        </InfoHeaderState>
        <InfoHeaderState
          onPress={() => onComponent('리뷰')}
          style={{borderBottomWidth: component === '리뷰' ? 1 : 0}}>
          <HeaderText>리뷰</HeaderText>
        </InfoHeaderState>
        <InfoHeaderState
          onPress={() => onComponent('관련상품')}
          style={{borderBottomWidth: component === '관련상품' ? 1 : 0}}>
          <HeaderText>관련상품</HeaderText>
        </InfoHeaderState>
      </InfoHeader>
      <ContentContaier>
        <ProductInfoBody component={component} />
      </ContentContaier>
    </Container>
  );
};

export default ProductInfo;
