import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const Container = styled.View`
  margin: 12px;
  flex: 1;
`;

const DrawerNavigator = () => {
  return (
    <SafeAreaView>
      <Container>
        <Text>111</Text>
      </Container>
    </SafeAreaView>
  );
};

export default DrawerNavigator;
