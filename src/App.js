import React from 'react';
import {Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styled from 'styled-components';

import Home from './Components/Home';

const BottmMenuImage = styled.Image`
  width: 40px;
  height: 40px;
`;

function Option() {
  return (
    <View>
      <Text>Option 화면</Text>
    </View>
  );
}
function Camera() {
  return (
    <View>
      <Text>Camera 화면</Text>
    </View>
  );
}

function Clothes() {
  return (
    <View>
      <Text>4번째화면</Text>
    </View>
  );
}

function Info() {
  return (
    <View>
      <Text>5번째화면</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator tabBarOptions={{showLabel: false}}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({focused}) => (
                <BottmMenuImage
                  source={
                    focused === false
                      ? require('./Assets/Images/menu01.png')
                      : require('./Assets/Images/menu01_on.png')
                  }
                />
              ),
            }}
          />
          <Tab.Screen
            name="Option"
            component={Option}
            options={{
              tabBarIcon: ({focused}) => (
                <BottmMenuImage
                  source={
                    focused === false
                      ? require('./Assets/Images/menu02.png')
                      : require('./Assets/Images/menu02_on.png')
                  }
                />
              ),
            }}
          />
          <Tab.Screen
            name="Clothes"
            component={Clothes}
            options={{
              tabBarIcon: ({focused}) => (
                <BottmMenuImage
                  source={
                    focused === false
                      ? require('./Assets/Images/menu03.png')
                      : require('./Assets/Images/menu03_on.png')
                  }
                />
              ),
            }}
          />
          <Tab.Screen
            name="Info"
            component={Info}
            options={{
              tabBarIcon: ({focused}) => (
                <BottmMenuImage
                  source={
                    focused === false
                      ? require('./Assets/Images/menu04.png')
                      : require('./Assets/Images/menu04_on.png')
                  }
                />
              ),
            }}
          />
          <Tab.Screen
            name="Camera"
            component={Camera}
            options={{
              tabBarIcon: ({focused}) => (
                <BottmMenuImage
                  source={
                    focused === false
                      ? require('./Assets/Images/menu05.png')
                      : require('./Assets/Images/menu05_on.png')
                  }
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
