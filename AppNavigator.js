import React from 'react';
import { Icon, Touchable, useTheme } from '@draftbit/ui';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { systemWeights } from 'react-native-typography';
import LinkingConfiguration from './LinkingConfiguration';
import AccountEditScreen from './screens/AccountEditScreen';
import AccountEditedScreen from './screens/AccountEditedScreen';
import AvailabilityScreen from './screens/AvailabilityScreen';
import ClientHomePageTestingScreen from './screens/ClientHomePageTestingScreen';
import ClientHomePageeScreen from './screens/ClientHomePageeScreen';
import ClientSignInScreen from './screens/ClientSignInScreen';
import ClientToProfessionalPageOrg2Screen from './screens/ClientToProfessionalPageOrg2Screen';
import ClientsSignUpScreen from './screens/ClientsSignUpScreen';
import ProfScreen from './screens/ProfScreen';
import ProfessionalGadgetScreen from './screens/ProfessionalGadgetScreen';
import ProfessionalMeetingScheduleScreen from './screens/ProfessionalMeetingScheduleScreen';
import ProfessionalSignInScreen from './screens/ProfessionalSignInScreen';
import ProfessionalSignUpScreen from './screens/ProfessionalSignUpScreen';
import ProfprofileScreen from './screens/ProfprofileScreen';
import StartUpPageScreen from './screens/StartUpPageScreen';
import VideoCallScreen from './screens/VideoCallScreen';
import palettes from './themes/palettes';
import Breakpoints from './utils/Breakpoints';
import useWindowDimensions from './utils/useWindowDimensions';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DefaultAndroidBackIcon({ tintColor }) {
  return (
    <View style={[styles.headerContainer, styles.headerContainerLeft]}>
      <Icon
        name="AntDesign/arrowleft"
        size={24}
        color={tintColor}
        style={[styles.headerIcon, styles.headerIconLeft]}
      />
    </View>
  );
}

function DefaultDrawerIcon({ tintColor, navigation }) {
  return (
    <Touchable
      onPress={() => navigation.toggleDrawer()}
      style={[styles.headerContainer, styles.headerContainerLeft]}
    >
      <Icon
        name="EvilIcons/navicon"
        size={27}
        color={tintColor}
        style={[styles.headerIcon, styles.headerIconLeft]}
      />
    </Touchable>
  );
}

export default function RootAppNavigator() {
  const theme = useTheme();

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: '#181717ff',
        },
      }}
      linking={LinkingConfiguration}
    >
      <Stack.Navigator
        initialRouteName="StartUpPageScreen"
        screenOptions={({ navigation }) => ({
          cardStyle: { flex: 1 },
          headerBackImage:
            Platform.OS === 'android' ? DefaultAndroidBackIcon : null,
        })}
      >
        <Stack.Screen
          name="ClientSignInScreen"
          component={ClientSignInScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'Client_Sign-in',
          })}
        />
        <Stack.Screen
          name="StartUpPageScreen"
          component={StartUpPageScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'start-up page',
          })}
        />
        <Stack.Screen
          name="ProfessionalMeetingScheduleScreen"
          component={ProfessionalMeetingScheduleScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'ProfessionalMeetingSchedule',
          })}
        />
        <Stack.Screen
          name="ClientToProfessionalPageOrg2Screen"
          component={ClientToProfessionalPageOrg2Screen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'ClientToProfessionalPage Org 2',
          })}
        />
        <Stack.Screen
          name="ProfScreen"
          component={ProfScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'Prof',
          })}
        />
        <Stack.Screen
          name="ClientHomePageeScreen"
          component={ClientHomePageeScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'ClientHomePagee',
          })}
        />
        <Stack.Screen
          name="AvailabilityScreen"
          component={AvailabilityScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'Availability',
          })}
        />
        <Stack.Screen
          name="ClientHomePageTestingScreen"
          component={ClientHomePageTestingScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'ClientHomePageTesting',
          })}
        />
        <Stack.Screen
          name="ProfprofileScreen"
          component={ProfprofileScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'profprofile',
          })}
        />
        <Stack.Screen
          name="ProfessionalSignInScreen"
          component={ProfessionalSignInScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'professional_Sign-in ',
          })}
        />
        <Stack.Screen
          name="ProfessionalSignUpScreen"
          component={ProfessionalSignUpScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'professional_sign_up ',
          })}
        />
        <Stack.Screen
          name="ClientsSignUpScreen"
          component={ClientsSignUpScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'Clients_sign_up ',
          })}
        />
        <Stack.Screen
          name="VideoCallScreen"
          component={VideoCallScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'Video Call',
          })}
        />
        <Stack.Screen
          name="ProfessionalGadgetScreen"
          component={ProfessionalGadgetScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'professional_gadget',
          })}
        />
        <Stack.Screen
          name="AccountEditScreen"
          component={AccountEditScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'Account_Edit',
          })}
        />
        <Stack.Screen
          name="AccountEditedScreen"
          component={AccountEditedScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'Account_Edited',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({ ios: { marginLeft: 8 } }),
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({ ios: { marginRight: 6 } }),
});
