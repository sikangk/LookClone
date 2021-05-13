import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import Swiper from 'react-native-swiper';
import {FlatGrid} from 'react-native-super-grid';

const Container = styled.ScrollView`
  flex: 1;
`;

const HeaderContainer = styled.View`
  flex: 1;
  background-color: #fff;
`;

const SwiperContainer = styled(Swiper)`
  height: 400px;
`;

const SwiperView = styled.View`
  height: 300px;
`;
const SwiperImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const SwiperSummary = styled.Text`
  margin: 35px 35px 0px 35px;
  font-size: 15px;
  text-align: center;
`;

const ContentTagContainer = styled.View`
  margin-top: -10px;
  margin-bottom: 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TagItem = styled.View`
  margin-left: 3px;
  background-color: #c6c6c6;
  padding-horizontal: 5px;
  padding-vertical: 3px;
`;
const TagText = styled.Text`
  color: grey;
  font-size: 13px;
`;
const BodyContainer = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  background-color: #fff;
  margin-top: 8px;
  flex-direction: row;
`;

const BodtItemContainer = styled.TouchableOpacity`
  flex: 1;
`;

const BodyItemSummaryCon = styled.View`
  margin-top: 5px;
`;

const BodtItemTitleCon = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`;

const BodyItemTitle = styled.Text`
  font-weight: bold;
`;

const BodyHartContainer = styled.TouchableOpacity`
  width: 22px;
  height: 18px;
  margin-top: 2px;
`;

const BodyHartImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const BodySaleContainer = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;
const BodyItemSalePrice = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

const BodyItemPrice = styled.Text`
  margin-left: 5px;
  margin-top: 4px;
  color: grey;
  text-decoration: line-through;
`;

const Detail = ({navigation, route}) => {
  const [isHartOn, setIsHartOn] = useState(route.params.names.item);

  const hartOn = i => {
    setIsHartOn(
      isHartOn.map(item =>
        item.key === i ? {...item, hart: !item.hart} : item,
      ),
    );
  };
  return (
    <Container>
      <HeaderContainer>
        <SwiperContainer
          activeDotColor="purple"
          paginationStyle={{
            position: 'absolute',
            marginBottom: 50,
            color: '#541586',
          }}
          autoplay>
          {route.params.names.slide.map((item, index) => {
            return (
              <View key={item.key}>
                <SwiperView>
                  <SwiperImage source={item.slideImage} />
                </SwiperView>
                <SwiperSummary>{item.slideSummary}</SwiperSummary>
              </View>
            );
          })}
        </SwiperContainer>
        <ContentTagContainer>
          {route.params.names.tag.map((item, index) => {
            return (
              <TagItem key={index}>
                <TagText>{item}</TagText>
              </TagItem>
            );
          })}
        </ContentTagContainer>
      </HeaderContainer>
      <BodyContainer>
        <FlatGrid
          nestedScrollEnabled={true}
          itemDimension={120}
          data={route.params.names.item}
          spacing={10}
          key={route.params.names.item.key}
          renderItem={({item}, index) => (
            <BodtItemContainer>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Purchase', {name: '구매하기'})
                }>
                <Image source={item.itemImage} />
              </TouchableOpacity>
              <BodyItemSummaryCon>
                <BodtItemTitleCon>
                  <BodyItemTitle>{item.title}</BodyItemTitle>
                  <BodyHartContainer onPress={() => hartOn(item.key)}>
                    <BodyHartImage
                      source={
                        isHartOn[item.key - 1].hart === false
                          ? require('../../Assets/Images/hart_off.png')
                          : require('../../Assets/Images/hart_on.png')
                      }
                    />
                  </BodyHartContainer>
                </BodtItemTitleCon>
                <BodySaleContainer>
                  <BodyItemSalePrice>
                    {item.salePrice}
                    <Text style={{fontWeight: 'normal', fontSize: 14}}>원</Text>
                  </BodyItemSalePrice>

                  <BodyItemPrice>{item.price}원</BodyItemPrice>
                </BodySaleContainer>
              </BodyItemSummaryCon>
            </BodtItemContainer>
          )}
        />
      </BodyContainer>
    </Container>
  );
};

export default Detail;
