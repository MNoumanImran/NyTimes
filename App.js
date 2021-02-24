import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Pages/HomeScreen';
import { Icon } from 'react-native-elements'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const NavigationDrawerStructure = (props)=> {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row', }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
      
    </View>
  );
}

const NavigationRightDrawerStructure = (props)=> {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    // props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row', marginRight:10}}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        {/*Donute Button Image */}
        <Icon
  name='search'
  type='font-awesome-5'
  color='#FFF'
 
  containerStyle={{marginRight:20}}
/>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> toggleDrawer()}>
        {/*Donute Button Image */}
        <Icon
  name='ellipsis-v'
  type='font-awesome-5'
  color='#FFF'
 
/>
      </TouchableOpacity>
      
    </View>
  );
}


function HomeScreenStack({ navigation }) {
  return (
  
        <Stack.Navigator
        initialRouteName="SecondPage"
        screenOptions={{
          headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
          headerRight: ()=> <NavigationRightDrawerStructure navigationProps={navigation} />,
        headerStyle: {
            backgroundColor: '#00e5ff', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          }
        }}>
        <Stack.Screen
          name="SettingScreen"
          component={HomeScreen}
          options={{
            title: 'Ny Times Most Popular', //Set Header Title
            
          }}/>
      </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen
          name="HomeScreenStack"
          options={{ drawerLabel: 'Home Screen Option' }}
          component={HomeScreenStack} />
      
      </Drawer.Navigator>

    </NavigationContainer>
  );
}

export default App;