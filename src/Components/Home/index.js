import React, {useState} from 'react';
import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';
import styled from 'styled-components';
import Modal from 'react-native-modal';
import DrawerNavigator from '../DrawerNavigator/index';
import {createStackNavigator} from '@react-navigation/stack';
import Detail from '../Detail/index';
import Purchase from '../Purchase/index';

const MenuContainer = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const TopMenuContainer = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  margin-left: 5px;
`;

const TopMenu = styled.Image`
  width: 100%;
  height: 100%;
`;

const TopLogoContainer = styled.View`
  width: 90px;
  height: 30px;
`;

const TopLogo = styled.Image`
  width: 100%;
  height: 100%;
`;

const TopCartContainer = styled.View`
  width: 30px;
  height: 30px;
  margin-right: 5px;
`;

const TopCart = styled.Image`
  width: 100%;
  height: 100%;
`;

const BodyContainer = styled.ScrollView`
  flex: 1;
`;

const ContentContainer = styled.View`
  flex: 1;
`;
const ContentImage = styled.Image`
  flex: 1;
`;
const ContentImageContainer = styled.TouchableOpacity`
  flex: 6;
`;
const ContentSummary = styled.View`
  flex: 4;
`;
const ContentFirstContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 10px 5px 10px;
  align-items: center;
  flex: 2;
`;
const ContentFirstText = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #000;
`;

const HartContainer = styled.TouchableOpacity`
  width: 23px;
  height: 18px;
  justify-content: center;
  align-items: center;
`;

const HartImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: stretch;
`;

const ContentTagContainer = styled.View`
  flex: 3;
  margin: 5px 10px 30px 10px;
  flex-direction: row;
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

const config = [
  {
    image: require('../../Assets/Images/main_image1.png'),
    key: 1,
    title: '이엔이 강남점',
    isHart: false,
    tag: ['#빈티지룩', '#캐주얼', '#로맨틱', '#데일리룩', '#시크'],
    slide: [
      {
        slideImage: require('../../Assets/Images/slider1.png'),
        slideSummary:
          '선별된 바잉으로 합리적인 가격에 브랜드퀄리티를 느낄수있는 Beauty meet Fashion 핫플레이스',
        key: 1,
      },
      {
        slideImage: require('../../Assets/Images/slider2.png'),
        slideSummary: '두번째 설명',
        key: 2,
      },
      {
        slideImage: require('../../Assets/Images/slider3.png'),
        slideSummary: '세번째 설명',
        key: 3,
      },
    ],
    item: [
      {
        itemImage: require('../../Assets/Images/itemimage.png'),
        title: '투웨니 니트 팬츠 투피스',
        price: 49800,
        salePrice: 26800,
        key: 1,
        hart: false,
      },
      {
        itemImage: require('../../Assets/Images/itemimage.png'),
        title: '투웨니 니트 팬츠 투피스',
        price: 49800,
        salePrice: 26800,
        key: 2,
        hart: false,
      },
      {
        itemImage: require('../../Assets/Images/itemimage.png'),
        title: '투웨니 니트 팬츠 투피스',
        price: 49800,
        salePrice: 26800,
        key: 3,
        hart: false,
      },
      {
        itemImage: require('../../Assets/Images/itemimage.png'),
        title: '투웨니 니트 팬츠 투피스',
        price: 49800,
        salePrice: 26800,
        key: 4,
        hart: false,
      },
    ],
  },
  {
    image: require('../../Assets/Images/main_image2.png'),
    key: 2,
    title: '켈리도나휴',
    isHart: false,
    tag: ['#빈티지룩', '#캐주얼', '#로맨틱'],
    slide: [
      {
        slideImage: require('../../Assets/Images/slider1.png'),
        slideSummary:
          '선별된 바잉으로 합리적인 가격에 브랜드퀄리티를 느낄수있는 Beauty meet Fashion 핫플레이스',
        key: 1,
      },
      {
        slideImage: require('../../Assets/Images/slider2.png'),
        slideSummary:
          '선별된 바잉으로 합리적인 가격에 브랜드퀄리티를 느낄수있는 Beauty meet Fashion 핫플레이스',
        key: 2,
      },
      {
        slideImage: require('../../Assets/Images/slider3.png'),
        slideSummary:
          '선별된 바잉으로 합리적인 가격에 브랜드퀄리티를 느낄수있는 Beauty meet Fashion 핫플레이스',
        key: 3,
      },
    ],

    item: [
      {
        itemImage: require('../../Assets/Images/itemimage.png'),
        title: '투웨니 니트 팬츠 투피스',
        price: 49800,
        salePrice: 26800,
        key: 1,
        hart: false,
      },
      {
        itemImage: require('../../Assets/Images/itemimage.png'),
        title: '투웨니 니트 팬츠 투피스',
        price: 49800,
        salePrice: 26800,
        key: 2,
        hart: false,
      },
      {
        itemImage: require('../../Assets/Images/itemimage.png'),
        title: '투웨니 니트 팬츠 투피스',
        price: 49800,
        salePrice: 26800,
        key: 3,
        hart: false,
      },
      {
        itemImage: require('../../Assets/Images/itemimage.png'),
        title: '투웨니 니트 팬츠 투피스',
        price: 49800,
        salePrice: 26800,
        key: 4,
        hart: false,
      },
    ],
  },
  {
    image: require('../../Assets/Images/main_image2.png'),
    key: 3,
    title: '켈리도나휴',
    isHart: false,
    tag: ['#빈티지룩', '#캐주얼', '#로맨틱'],
    slide: [
      {
        slideImage: require('../../Assets/Images/slider1.png'),
        slideSummary:
          '선별된 바잉으로 합리적인 가격에 브랜드퀄리티를 느낄수있는 Beauty meet Fashion 핫플레이스',
        key: 1,
      },
      {
        slideImage: require('../../Assets/Images/slider2.png'),
        slideSummary: '두번째 설명 ',
        key: 2,
      },
      {
        slideImage: require('../../Assets/Images/slider3.png'),
        slideSummary: '세번째설명',
        key: 3,
      },
    ],
    item: [
      {
        itemImage: require('../../Assets/Images/itemimage.png'),
        title: '투웨니 니트 팬츠 투피스',
        price: 49800,
        salePrice: 26800,
        key: 1,
        hart: false,
      },
      {
        itemImage: require('../../Assets/Images/itemimage.png'),
        title: '투웨니 니트 팬츠 투피스',
        price: 49800,
        salePrice: 26800,
        key: 2,
        hart: false,
      },
      {
        itemImage: require('../../Assets/Images/itemimage.png'),
        title: '투웨니 니트 팬츠 투피스',
        price: 49800,
        salePrice: 26800,
        key: 3,
        hart: false,
      },
      {
        itemImage: require('../../Assets/Images/itemimage.png'),
        title: '투웨니 니트 팬츠 투피스',
        price: 49800,
        salePrice: 26800,
        key: 4,
        hart: false,
      },
    ],
  },
];

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  sideMenuStyle: {
    margin: 0,
    width: width * 0.75,
  },
});

const HomeDetail = ({navigation}) => {
  const [isSideMenuVisible, setIsSideMenuVisible] = useState(false);
  const [isHartState, setIsHartState] = useState(config);

  const onClickHart = i => {
    setIsHartState(
      isHartState.map(item =>
        item.key === i ? {...item, isHart: !item.isHart} : item,
      ),
    );
  };

  const toggleSideMenu = () => {
    setIsSideMenuVisible(!isSideMenuVisible);
  };

  return (
    <>
      <MenuContainer>
        <TopMenuContainer onPress={() => toggleSideMenu()}>
          <TopMenu source={require('../../Assets/Images/top_menu.png')} />
        </TopMenuContainer>
        <TopLogoContainer>
          <TopLogo source={require('../../Assets/Images/top_logo.png')} />
        </TopLogoContainer>
        <TopCartContainer>
          <TopCart source={require('../../Assets/Images/top_cart.png')} />
        </TopCartContainer>
      </MenuContainer>
      <BodyContainer>
        {config.map(item => {
          return (
            <ContentContainer key={item.key}>
              <ContentImageContainer
                onPress={() =>
                  navigation.navigate('Detail', {
                    name: item.title,
                    names: item,
                  })
                }>
                <ContentImage source={item.image} />
              </ContentImageContainer>
              <ContentSummary>
                <ContentFirstContainer>
                  <ContentFirstText>{item.title}</ContentFirstText>
                  <HartContainer onPress={() => onClickHart(item.key)}>
                    <HartImage
                      source={
                        isHartState[item.key - 1].isHart === false
                          ? require('../../Assets/Images/hart_off.png')
                          : require('../../Assets/Images/hart_on.png')
                      }
                    />
                  </HartContainer>
                </ContentFirstContainer>
                <ContentTagContainer>
                  {item.tag.map((tag, index) => {
                    return (
                      <TagItem key={index}>
                        <TagText>{tag}</TagText>
                      </TagItem>
                    );
                  })}
                </ContentTagContainer>
              </ContentSummary>
            </ContentContainer>
          );
        })}
      </BodyContainer>
      <Modal
        isVisible={isSideMenuVisible}
        onBackdropPress={toggleSideMenu}
        onSwipeComplete={toggleSideMenu}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        swipeDirection="left"
        useNativeDriver
        hideModalContentWhileAnimating
        propagateSwipe
        style={styles.sideMenuStyle}>
        <DrawerNavigator />
      </Modal>
    </>
  );
};

const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeDetail"
        component={HomeDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={({route}) => ({
          title: route.params.name,
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
            fontSize: 16,
          },
          headerRight: () => {
            return (
              <TopCartContainer>
                <TopCart source={require('../../Assets/Images/top_cart.png')} />
              </TopCartContainer>
            );
          },
          headerStyle: {},
        })}
      />
      <Stack.Screen
        name="Purchase"
        component={Purchase}
        options={({route}) => ({
          title: route.params.name,
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
            fontSize: 16,
          },
          headerRight: () => {
            return (
              <TopCartContainer>
                <TopCart source={require('../../Assets/Images/top_cart.png')} />
              </TopCartContainer>
            );
          },
          headerStyle: {},
        })}
      />
    </Stack.Navigator>
  );
};

export default Home;
