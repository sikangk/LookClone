import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';
import Stars from 'react-native-stars';

import ProductInfo from './ProductInfo';

const Container = styled.ScrollView``;
const PurchaseImageCon = styled.View`
  width: 500px;
  height: 500px;
  flex: 1;
`;

const PurchaseImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const BodyContainer = styled.ScrollView`
  margin-top: 20px;
`;

const BodyTitle = styled.Text`
  font-weight: bold;
  margin: 5px 10px 0px 10px;
`;

const BodySaleContainer = styled.View`
  flex-direction: row;
  margin: 5px 10px 0px 10px;
  justify-content: space-between;
  padding-vertical: 5px;
  border-bottom-width: 1px;
  border-bottom-color: grey;
`;
const BodyItemSalePrice = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

const BodyItemPrice = styled.Text`
  margin-left: 5px;
  margin-top: 4px;
  color: grey;
  text-decoration: line-through;
  font-size: 12px;
`;

const BodySalePercent = styled.Text`
  color: red;
  font-size: 20px;
  font-weight: bold;
`;

const ReviewContainer = styled.View`
  flex-direction: row;
  padding-vertical: 10px;
`;

const TextReview = styled.Text`
  margin-left: 10px;
  font-weight: bold;
`;

const StartContainer = styled.View`
  margin-left: 80px;
`;

const PointText = styled.Text`
  margin-left: 5px;
  font-weight: bold;
`;

const WhereToBuyContainer = styled.View`
  margin-top: 5px;
  height: 150px;
`;

const WhereToBuy = styled.View`
  flex-direction: row;
`;

const WhereToBuyImageCon = styled.View`
  width: 50px;
  height: 50px;

  border-radius: 50px;
  margin: 10px 10px 10px 10px;
`;

const WhereToBuyImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const WhereToBuySummaryCon = styled.View`
  margin: 10px 10px 10px 10px;
`;

const WhereToBuySummary = styled.Text`
  font-weight: bold;
`;

const WhereToBuysSub = styled.Text`
  font-size: 12px;
`;
const ContentTagContainer = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

const TagItem = styled.View`
  margin-left: 3px;
  background-color: #c6c6c6;
`;
const TagText = styled.Text`
  color: grey;
  font-size: 13px;
`;
const WhereToBuyButtonCon = styled.View`
  flex-direction: row;
  width: 100%;
`;

const WhereToStoreButton = styled.View`
  flex: 1;
  height: 50px;
  border: 1px solid grey;
  text-align: center;
  margin: 5px 0px 30px 10px;
  justify-content: center;
  align-items: center;
`;

const StoreText = styled.Text`
  color: grey;
`;

const WhereToCallButton = styled.View`
  flex: 1;
  height: 50px;
  border: 1px solid grey;
  text-align: center;
  margin: 5px 10px 30px 0px;
  justify-content: center;
  align-items: center;
`;

const CallText = styled.Text`
  color: grey;
`;

const BuyContainer = styled.View`
  width: 100%;
  height: 50px;
  background-color: black;
  justify-content: center;
  align-items: center;
`;

const BuyText = styled.Text`
  color: white;
`;

const Purchase = ({route, navigation}) => {
  useEffect(() => {
    navigation.dangerouslyGetParent().setOptions({
      tabBarVisible: false,
    });
    return () => {
      navigation.dangerouslyGetParent().setOptions({
        tabBarVisible: true,
      });
    };
  }, [navigation]);
  return (
    <>
      <Container>
        <PurchaseImageCon>
          <PurchaseImage source={route.params.item.itemImage} />
        </PurchaseImageCon>
        <BodyContainer>
          <BodyTitle>{route.params.item.title}</BodyTitle>
          <BodySaleContainer>
            <BodyItemSalePrice>
              {route.params.item.salePrice}
              <Text style={{fontWeight: 'normal', fontSize: 14}}>원</Text>
              <BodyItemPrice>{route.params.item.price}원</BodyItemPrice>
            </BodyItemSalePrice>
            <BodySalePercent>15%</BodySalePercent>
          </BodySaleContainer>
          <ReviewContainer>
            <TextReview>리뷰</TextReview>
            <StartContainer>
              <Stars default={3.74} count={5} starSize={16} half={true} />
            </StartContainer>
            <PointText>3.74(31개)</PointText>
          </ReviewContainer>
          <WhereToBuyContainer>
            <WhereToBuy>
              <WhereToBuyImageCon>
                <WhereToBuyImage source="none" />
              </WhereToBuyImageCon>
              <WhereToBuySummaryCon>
                <WhereToBuySummary>{route.params.name}</WhereToBuySummary>
                <WhereToBuysSub>
                  충북 청주시 상당구 1순환로 1202-1(방서동)
                </WhereToBuysSub>
                <ContentTagContainer>
                  <TagItem>
                    <TagText>#빈티지</TagText>
                  </TagItem>
                  <TagItem>
                    <TagText>#캐쥬얼</TagText>
                  </TagItem>
                </ContentTagContainer>
              </WhereToBuySummaryCon>
            </WhereToBuy>
            <WhereToBuyButtonCon>
              <WhereToStoreButton>
                <StoreText>스토어 찜</StoreText>
              </WhereToStoreButton>
              <WhereToCallButton>
                <CallText>통화하기</CallText>
              </WhereToCallButton>
            </WhereToBuyButtonCon>
          </WhereToBuyContainer>
          <ProductInfo />
        </BodyContainer>
      </Container>
      <BuyContainer>
        <BuyText>구매하기</BuyText>
      </BuyContainer>
    </>
  );
};

export default Purchase;
