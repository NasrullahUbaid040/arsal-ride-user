import React from 'react';
import GetStarted1 from './src/Screens/GetStarted1/GetStarted1';
import GetStarted2 from './src/Screens/GetStarted2/GetStarted2';
import Home from './src/Screens/Home/Home';
import Password from './src/Screens/Password/Password';
import Verification from './src/Screens/Verification/Verification';
import VerificationCode from './src/Screens/VerificationCode/VerificationCode';
import Welcome from './src/Screens/Welcome/Welcome';
import Profile from './src/Screens/Profile/Profile';
import YourTrips from './src/Screens/YourTrips/YourTrips';
import Messages from './src/Screens/Messages/Messages';
import Payments from './src/Screens/Payments/Payments';
import ChooseRide from './src/Screens/ChooseRide/ChooseRide';
import Ride from './src/Screens/Ride/Ride';
import RideCompleted from './src/Screens/RideCompleted/RideCompleted';
import Chat from './src/Screens/Chat/Chat';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="GS1"
          component={GetStarted1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GS2"
          component={GetStarted2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EnterNumber"
          component={Verification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EnterCode"
          component={VerificationCode}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EnterPassword"
          component={Password}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Choose"
          component={ChooseRide}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Trips"
          component={YourTrips}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Payments"
          component={Payments}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Messages"
          component={Messages}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChooseRide"
          component={ChooseRide}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Ride"
          component={Ride}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RideCompleted"
          component={RideCompleted}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
