import React from 'react';
import {
  Button,
  CheckboxRow,
  Divider,
  Icon,
  IconButton,
  ScreenContainer,
  Spacer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as SupabaseApi from '../apis/SupabaseApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const ClientSignInScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [authValue, setAuthValue] = React.useState([]);
  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [compValue, setCompValue] = React.useState(1);
  const [emailValue, setEmailValue] = React.useState('');
  const [error, setError] = React.useState('');
  const [incorrect_login, setIncorrect_login] = React.useState(0);
  const [isBookmarked, setIsBookmarked] = React.useState(false);
  const [passwordInput, setPasswordInput] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={true}
      scrollable={true}
      style={StyleSheet.applyWidth(
        {
          left: { minWidth: Breakpoints.Tablet, value: '10%' },
          width: { minWidth: Breakpoints.Tablet, value: '80%' },
        },
        dimensions.width
      )}
    >
      {/* View 2 */}
      <View />
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 24,
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 24,
          },
          dimensions.width
        )}
      >
        {/* Back */}
        <View>
          {/* Back Button */}
          <IconButton
            onPress={() => {
              try {
                if (navigation.canGoBack()) {
                  navigation.popToTop();
                }
                navigation.replace('StartUpPageScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            color={palettes.App['Custom #6174f6']}
            icon={'Feather/arrow-left'}
            size={42}
            style={StyleSheet.applyWidth(
              {
                right: [
                  { minWidth: Breakpoints.Tablet, value: 90 },
                  { minWidth: Breakpoints.BigScreen, value: 140 },
                  { minWidth: Breakpoints.Desktop, value: 110 },
                ],
              },
              dimensions.width
            )}
          />
        </View>
      </View>

      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            alignSelf: { minWidth: Breakpoints.Tablet, value: 'auto' },
            flex: [
              { minWidth: Breakpoints.Mobile, value: 1 },
              { minWidth: Breakpoints.Tablet, value: 1 },
            ],
            flexDirection: { minWidth: Breakpoints.Tablet, value: 'column' },
            justifyContent: 'space-evenly',
            paddingLeft: { minWidth: Breakpoints.Tablet, value: 24 },
            paddingRight: { minWidth: Breakpoints.Tablet, value: 24 },
            paddingTop: 20,
          },
          dimensions.width
        )}
      >
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              color: palettes.Blue[700],
              fontFamily: 'AkayaKanadaka_400Regular',
              fontSize: [
                { minWidth: Breakpoints.Mobile, value: 54 },
                { minWidth: Breakpoints.Tablet, value: 84 },
              ],
            }),
            dimensions.width
          )}
        >
          {'Brilaim'}
        </Text>
        {/* Login to Your Account */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: palettes.Blue[700],
              fontFamily: 'AkayaKanadaka_400Regular',
              fontSize: [
                { minWidth: Breakpoints.Mobile, value: 28 },
                { minWidth: Breakpoints.Tablet, value: 48 },
              ],
            },
            dimensions.width
          )}
        >
          {'Login to Client Account'}
        </Text>
        {/* professional signin */}
        <Touchable
          onPress={() => {
            try {
              if (navigation.canGoBack()) {
                navigation.popToTop();
              }
              navigation.replace('ProfessionalSignInScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              width: [
                { minWidth: Breakpoints.Mobile, value: '100%' },
                { minWidth: Breakpoints.Laptop, value: '150%' },
              ],
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                paddingBottom: 10,
                paddingTop: 10,
              },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.text.strong,
                  fontFamily: 'Inter_400Regular',
                  fontSize: [
                    { minWidth: Breakpoints.Laptop, value: 19 },
                    { minWidth: Breakpoints.Tablet, value: 24 },
                  ],
                },
                dimensions.width
              )}
            >
              {'A Professional?'}
            </Text>

            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.App['Custom Color'],
                  fontFamily: 'Inter_500Medium',
                  fontSize: [
                    { minWidth: Breakpoints.Laptop, value: 17 },
                    { minWidth: Breakpoints.Tablet, value: 24 },
                  ],
                  marginLeft: 7,
                },
                dimensions.width
              )}
            >
              {'Click here'}
            </Text>
          </View>
        </Touchable>
        {/* Error */}
        <View>
          <>
            {!error ? null : (
              <Text
                accessible={true}
                selectable={false}
                {...GlobalStyles.TextStyles(theme)['Text 2'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text 2'].style,
                    { color: theme.colors.background.danger }
                  ),
                  dimensions.width
                )}
              >
                {error}
              </Text>
            )}
          </>
        </View>
        {/* Email */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: palettes.App['BG Gray'],
              borderBottomWidth: 1,
              borderColor: theme.colors.border.brand,
              borderLeftWidth: 1,
              borderRadius: 16,
              borderRightWidth: 1,
              borderTopWidth: 1,
              flexDirection: 'row',
              height: 60,
              justifyContent: 'space-between',
              marginRight: 10,
              paddingLeft: 20,
              paddingRight: 20,
              width: [
                { minWidth: Breakpoints.Mobile, value: '90%' },
                { minWidth: Breakpoints.Tablet, value: '65%' },
                { minWidth: Breakpoints.Laptop, value: '40%' },
              ],
            },
            dimensions.width
          )}
        >
          <Icon
            size={24}
            color={StyleSheet.getWidthValue(
              [
                {
                  minWidth: Breakpoints.Mobile,
                  value: palettes.App['Custom Color_20'],
                },
                {
                  minWidth: Breakpoints.Tablet,
                  value: theme.colors.text.strong,
                },
              ],
              dimensions.width
            )}
            name={'MaterialCommunityIcons/email'}
            size={StyleSheet.getWidthValue(
              [{ minWidth: Breakpoints.Tablet, value: 44 }],
              dimensions.width
            )}
          />
          <View
            onLayout={event => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              { flex: 1, paddingLeft: 10, paddingRight: 10 },
              dimensions.width
            )}
          >
            <TextInput
              autoCapitalize={'none'}
              autoCorrect={true}
              changeTextDelay={500}
              onChangeText={newTextInputValue => {
                try {
                  setEmailValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              editable={true}
              placeholder={'Email'}
              placeholderTextColor={StyleSheet.getWidthValue(
                [
                  {
                    minWidth: Breakpoints.Mobile,
                    value: palettes.App['Custom Color_20'],
                  },
                  {
                    minWidth: Breakpoints.Tablet,
                    value: theme.colors.text.strong,
                  },
                ],
                dimensions.width
              )}
              style={StyleSheet.applyWidth(
                {
                  borderRadius: 8,
                  color: {
                    minWidth: Breakpoints.Tablet,
                    value: theme.colors.text.strong,
                  },
                  fontSize: { minWidth: Breakpoints.Tablet, value: 24 },
                  paddingBottom: 8,
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
              value={emailValue}
            />
          </View>
        </View>
        <Spacer bottom={8} left={8} right={8} top={8} />
        {/* Password */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: palettes.App['BG Gray'],
              borderBottomWidth: 1,
              borderColor: theme.colors.border.brand,
              borderLeftWidth: 1,
              borderRadius: 16,
              borderRightWidth: 1,
              borderTopWidth: 1,
              flexDirection: 'row',
              height: 60,
              justifyContent: 'space-between',
              marginRight: 10,
              paddingLeft: 20,
              paddingRight: 20,
              width: [
                { minWidth: Breakpoints.Mobile, value: '90%' },
                { minWidth: Breakpoints.Tablet, value: '65%' },
                { minWidth: Breakpoints.Laptop, value: '40%' },
              ],
            },
            dimensions.width
          )}
        >
          <Icon
            size={24}
            color={StyleSheet.getWidthValue(
              [
                {
                  minWidth: Breakpoints.Mobile,
                  value: palettes.App['Custom Color_20'],
                },
                {
                  minWidth: Breakpoints.Tablet,
                  value: theme.colors.text.strong,
                },
              ],
              dimensions.width
            )}
            name={'FontAwesome/lock'}
            size={StyleSheet.getWidthValue(
              [{ minWidth: Breakpoints.Tablet, value: 44 }],
              dimensions.width
            )}
          />
          <View
            style={StyleSheet.applyWidth(
              { flex: 1, paddingLeft: 10, paddingRight: 10 },
              dimensions.width
            )}
          >
            <TextInput
              autoCapitalize={'none'}
              autoCorrect={true}
              changeTextDelay={500}
              onChangeText={newTextInputValue => {
                try {
                  setPasswordInput(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              editable={true}
              placeholder={'Password'}
              placeholderTextColor={StyleSheet.getWidthValue(
                [
                  {
                    minWidth: Breakpoints.Mobile,
                    value: palettes.App['Custom Color_20'],
                  },
                  {
                    minWidth: Breakpoints.Tablet,
                    value: theme.colors.text.strong,
                  },
                ],
                dimensions.width
              )}
              secureTextEntry={true}
              style={StyleSheet.applyWidth(
                {
                  borderRadius: 8,
                  color: {
                    minWidth: Breakpoints.Tablet,
                    value: theme.colors.text.strong,
                  },
                  fontSize: { minWidth: Breakpoints.Tablet, value: 24 },
                  paddingBottom: 8,
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
              value={passwordInput}
            />
          </View>
        </View>
        {/* Remember me */}
        <View style={StyleSheet.applyWidth({ width: 160 }, dimensions.width)}>
          <CheckboxRow
            onPress={newCheckboxRowValue => {
              const handler = async () => {
                try {
                  (
                    await SupabaseApi.loginPOST(Constants, {
                      loginEmail: 'Rome@gmail.com',
                      loginPassword: '123Password',
                    })
                  )?.json;
                  const accessToken =
                    Constants['AUTHORIZATION_HEADER']?.['access_token'];
                  Constants['ERROR_MESSAGE'];
                  const error = setGlobalVariableValue({
                    key: 'ERROR_MESSAGE',
                    value: Constants['ERROR_MESSAGE'],
                  });
                  return;
                  const successful = setGlobalVariableValue({
                    key: 'AUTHORIZATION_HEADER',
                    value: accessToken,
                  });
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            direction={'row-reverse'}
            label={'Remember me'}
            style={StyleSheet.applyWidth({ minHeight: 50 }, dimensions.width)}
          />
        </View>
        {/* Sign in */}
        <Button
          iconPosition={'left'}
          onPress={() => {
            const handler = async () => {
              console.log('Sign in ON_PRESS Start');
              let error = null;
              try {
                console.log('Start ON_PRESS:0 FETCH_REQUEST');
                const authClientRecord = (
                  await SupabaseApi.authclientLoginGET(Constants, {
                    email: emailValue,
                    password: passwordInput,
                  })
                )?.json;
                console.log('Complete ON_PRESS:0 FETCH_REQUEST', {
                  authClientRecord,
                });
                console.log('Start ON_PRESS:1 DECLARE_VARIABLE');
                const check = authClientRecord?.length;
                console.log('Complete ON_PRESS:1 DECLARE_VARIABLE', { check });
                console.log('Start ON_PRESS:2 IF');
                if (check === compValue) {
                  const clientREcord = setGlobalVariableValue({
                    key: 'UserLoginRecord',
                    value: authClientRecord,
                  });
                  const authclientmail = authClientRecord?.[0]['email'];
                  const authClientid = authClientRecord?.[0]['id'];
                  setGlobalVariableValue({
                    key: 'authId',
                    value: authClientid,
                  });
                  if (navigation.canGoBack()) {
                    navigation.popToTop();
                  }
                  navigation.replace('ClientHomePageeScreen');
                } else {
                  const authProfRecord = (
                    await SupabaseApi.authProfloginGET(Constants, {
                      email: emailValue,
                      password: passwordInput,
                    })
                  )?.json;
                  const ProfessionalRecord = setGlobalVariableValue({
                    key: 'UserLoginRecord',
                    value: authProfRecord,
                  });
                  if (authProfRecord?.length === incorrect_login) {
                    setError('incorrect username or password');
                  }
                  const authprofEmail = authProfRecord?.[0]['Email'];
                  const authProfId = authProfRecord?.[0]['Email'];
                  setGlobalVariableValue({
                    key: 'authId',
                    value: authProfId,
                  });
                }
                console.log('Complete ON_PRESS:2 IF');
              } catch (err) {
                console.error(err);
                error = err.message ?? err;
              }
              console.log(
                'Sign in ON_PRESS Complete',
                error ? { error } : 'no error'
              );
            };
            handler();
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: palettes.Blue[700],
              borderRadius: 100,
              fontFamily: 'Inter_600SemiBold',
              fontSize: [
                { minWidth: Breakpoints.Mobile, value: 15 },
                { minWidth: Breakpoints.Tablet, value: 25 },
                { minWidth: Breakpoints.Laptop, value: 20 },
              ],
              height: 58,
              textAlign: 'center',
              width: [
                { minWidth: Breakpoints.Mobile, value: '60%' },
                { minWidth: Breakpoints.Laptop, value: '40%' },
              ],
            },
            dimensions.width
          )}
          title={'Sign in'}
        />
        {/* Forgot Password */}
        <Touchable
          style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                paddingBottom: 10,
                paddingTop: 10,
              },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: [
                    {
                      minWidth: Breakpoints.Mobile,
                      value: palettes.App['Custom Color'],
                    },
                    {
                      minWidth: Breakpoints.Laptop,
                      value: theme.colors.background.danger,
                    },
                  ],
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: [
                    { minWidth: Breakpoints.Mobile, value: 16 },
                    { minWidth: Breakpoints.Laptop, value: 18 },
                  ],
                  marginLeft: 10,
                },
                dimensions.width
              )}
            >
              {'Forgot Password?'}
            </Text>
          </View>
        </Touchable>
        {/* or continue with */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              height: 45,
              justifyContent: 'space-between',
              width: '100%',
            },
            dimensions.width
          )}
        >
          <Divider
            color={theme.colors.border.brand}
            style={StyleSheet.applyWidth(
              { height: 2, width: '20%' },
              dimensions.width
            )}
          />
          {/* OR */}
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.text.strong,
                fontFamily: 'Inter_500Medium',
                fontSize: 16,
                marginLeft: 20,
                marginRight: 20,
                opacity: 0.7,
              },
              dimensions.width
            )}
          >
            {'or continue with'}
          </Text>
          <Divider
            color={theme.colors.border.brand}
            style={StyleSheet.applyWidth(
              { height: 2, width: '20%' },
              dimensions.width
            )}
          />
        </View>
        {/* Social options */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              width: { minWidth: Breakpoints.Laptop, value: '80%' },
            },
            dimensions.width
          )}
        >
          {/* Facebook */}
          <Touchable
            onPress={() => {
              try {
                /* 'API Request' action requires configuration: choose an API endpoint */
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderBottomWidth: 2,
                  borderColor: theme.colors.border.brand,
                  borderLeftWidth: 2,
                  borderRadius: 16,
                  borderRightWidth: 2,
                  borderTopWidth: 2,
                  flexDirection: 'row',
                  height: 60,
                  justifyContent: 'center',
                  width: 88,
                },
                dimensions.width
              )}
            >
              <Icon
                size={24}
                color={palettes.Brand.Community_Primary_Alt}
                name={'FontAwesome/facebook-f'}
                size={StyleSheet.getWidthValue(
                  [{ minWidth: Breakpoints.Tablet, value: 44 }],
                  dimensions.width
                )}
              />
            </View>
          </Touchable>
          {/* Google */}
          <Touchable>
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderBottomWidth: 2,
                  borderColor: theme.colors.border.brand,
                  borderLeftWidth: 2,
                  borderRadius: 16,
                  borderRightWidth: 2,
                  borderTopWidth: 2,
                  flexDirection: 'row',
                  height: 60,
                  justifyContent: 'center',
                  width: 88,
                },
                dimensions.width
              )}
            >
              <Icon
                size={24}
                color={palettes.Brand.Community_Primary_Alt}
                name={'AntDesign/google'}
                size={StyleSheet.getWidthValue(
                  [{ minWidth: Breakpoints.Tablet, value: 44 }],
                  dimensions.width
                )}
              />
            </View>
          </Touchable>
          {/* Apple */}
          <Touchable>
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderBottomWidth: 2,
                  borderColor: theme.colors.border.brand,
                  borderLeftWidth: 2,
                  borderRadius: 16,
                  borderRightWidth: 2,
                  borderTopWidth: 2,
                  flexDirection: 'row',
                  height: 60,
                  justifyContent: 'center',
                  width: 88,
                },
                dimensions.width
              )}
            >
              <Icon
                size={24}
                color={palettes.Brand.Community_Primary_Alt}
                name={'AntDesign/apple1'}
                size={StyleSheet.getWidthValue(
                  [{ minWidth: Breakpoints.Tablet, value: 44 }],
                  dimensions.width
                )}
              />
            </View>
          </Touchable>
        </View>
        {/* Sign up */}
        <Touchable
          onPress={() => {
            try {
              if (navigation.canGoBack()) {
                navigation.popToTop();
              }
              navigation.replace('ClientsSignUpScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            { width: { minWidth: Breakpoints.Laptop, value: '70%' } },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                paddingBottom: 10,
                paddingTop: 10,
              },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.App['Custom Color_20'],
                  fontFamily: 'Inter_400Regular',
                },
                dimensions.width
              )}
            >
              {'Don’t have an account?'}
            </Text>

            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.App['Custom Color'],
                  fontFamily: 'Inter_500Medium',
                  marginLeft: 7,
                },
                dimensions.width
              )}
            >
              {'Sign up'}
            </Text>
          </View>
        </Touchable>
        {/* Spacer 2 */}
        <Spacer bottom={8} left={8} right={8} top={8} />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(ClientSignInScreen);
