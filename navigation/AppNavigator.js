import React from 'react'
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import AuthLoadingScreen from '../screens/AuthLoadingScreen'
import DashboardScreen from '../screens/DashboardScreen'
import LoginScreen from '../screens/LoginScreen'
import OtherScreen from '../screens/OtherScreen'
import SignInScreen from '../screens/SignInScreen'
import HomeScreen from '../screens/HomeScreen'
import MainTabNavigator from './MainTabNavigator'

const AppStack = createStackNavigator({ Home: HomeScreen, Login: LoginScreen, Dashboard: DashboardScreen, Other: OtherScreen })
const AuthStack = createStackNavigator({ SignIn: SignInScreen })

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  AuthLoading: AuthLoadingScreen,
  App: AppStack,
  Auth: AuthStack
}))

// PAGE TRANSICTIONS

// import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
// import { Transition } from 'react-native-reanimated';

// const MySwitch = createAnimatedSwitchNavigator(
//   {
//     Home: HomeScreen,
//     Other: OtherScreen,
//   },
//   {
//     // The previous screen will slide to the bottom while the next screen will fade in
//     transition: (
//       <Transition.Together>
//         <Transition.Out
//           type="slide-bottom"
//           durationMs={400}
//           interpolation="easeIn"
//         />
//         <Transition.In type="fade" durationMs={500} />
//       </Transition.Together>
//     ),
//   }
// );
