import React from 'react';
import {
  Button,
  CheckboxRow,
  Divider,
  Icon,
  IconButton,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as SupabaseApi from '../apis/SupabaseApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const ProfessionalSignUpScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [countryinput, setCountryinput] = React.useState('');
  const [emailinput, setEmailinput] = React.useState('');
  const [fullnameinput, setFullnameinput] = React.useState('');
  const [ispasswordvisible, setIspasswordvisible] = React.useState(false);
  const [nameinput, setNameinput] = React.useState('');
  const [professioninput, setProfessioninput] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const supabaseRegisterClientPOST = SupabaseApi.useRegisterClientPOST();
  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      navigation.goBack();
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  return (
    <ScreenContainer scrollable={false} hasSafeArea={true}>
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
            size={32}
            color={palettes.App['Custom #6174f6']}
            icon={'Feather/arrow-left'}
          />
        </View>
      </View>

      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flex: 1,
            flexDirection: { minWidth: Breakpoints.Tablet, value: 'column' },
            justifyContent: [
              { minWidth: Breakpoints.Mobile, value: 'space-evenly' },
              { minWidth: Breakpoints.Laptop, value: 'space-between' },
            ],
            left: [
              { minWidth: Breakpoints.Desktop, value: '20%' },
              { minWidth: Breakpoints.Laptop, value: '15%' },
              { minWidth: Breakpoints.Tablet, value: '10%' },
            ],
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 20,
            width: [
              { minWidth: Breakpoints.Desktop, value: '70%' },
              { minWidth: Breakpoints.Laptop, value: '70%' },
              { minWidth: Breakpoints.Tablet, value: '80%' },
            ],
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
        {/* Create New Account */}
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
          {'New Professional Account'}
        </Text>
        {/* client signin */}
        <Touchable
          onPress={() => {
            try {
              if (navigation.canGoBack()) {
                navigation.popToTop();
              }
              navigation.replace('ClientSignInScreen');
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
              {'A Client?'}
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
        {/* Name */}
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
              paddingLeft: 20,
              paddingRight: 20,
              width: [
                { minWidth: Breakpoints.Laptop, value: '60%' },
                { minWidth: Breakpoints.Desktop, value: '50%' },
                { minWidth: Breakpoints.Mobile, value: '90%' },
                { minWidth: Breakpoints.Tablet, value: '80%' },
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
            name={'AntDesign/contacts'}
            size={StyleSheet.getWidthValue(
              [{ minWidth: Breakpoints.Tablet, value: 34 }],
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
                  setNameinput(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              editable={true}
              placeholder={'Full Name'}
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
              value={nameinput}
            />
          </View>
        </View>
        {/* Profession */}
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
              paddingLeft: 20,
              paddingRight: 20,
              width: [
                { minWidth: Breakpoints.Laptop, value: '60%' },
                { minWidth: Breakpoints.Desktop, value: '50%' },
                { minWidth: Breakpoints.Mobile, value: '90%' },
                { minWidth: Breakpoints.Tablet, value: '80%' },
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
            name={'AntDesign/carryout'}
            size={StyleSheet.getWidthValue(
              [{ minWidth: Breakpoints.Tablet, value: 34 }],
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
                  setProfessioninput(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              editable={true}
              placeholder={'Profession'}
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
              value={professioninput}
            />
          </View>
        </View>
        {/* Country */}
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
              paddingLeft: 20,
              paddingRight: 20,
              width: [
                { minWidth: Breakpoints.Mobile, value: '90%' },
                { minWidth: Breakpoints.Laptop, value: '60%' },
                { minWidth: Breakpoints.Desktop, value: '50%' },
                { minWidth: Breakpoints.Tablet, value: '80%' },
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
            name={'Entypo/location-pin'}
            size={StyleSheet.getWidthValue(
              [{ minWidth: Breakpoints.Tablet, value: 34 }],
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
                  setCountryinput(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              editable={true}
              placeholder={'Country'}
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
              value={countryinput}
            />
          </View>
        </View>
        {/* Email 2 */}
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
              paddingLeft: 20,
              paddingRight: 20,
              width: [
                { minWidth: Breakpoints.Mobile, value: '90%' },
                { minWidth: Breakpoints.Laptop, value: '60%' },
                { minWidth: Breakpoints.Desktop, value: '50%' },
                { minWidth: Breakpoints.Tablet, value: '80%' },
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
              [{ minWidth: Breakpoints.Tablet, value: 34 }],
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
                  setEmailinput(newTextInputValue);
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
              value={emailinput}
            />
          </View>
        </View>
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
              paddingLeft: 20,
              paddingRight: 20,
              width: [
                { minWidth: Breakpoints.Laptop, value: '60%' },
                { minWidth: Breakpoints.Desktop, value: '50%' },
                { minWidth: Breakpoints.Mobile, value: '90%' },
                { minWidth: Breakpoints.Tablet, value: '80%' },
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
              [{ minWidth: Breakpoints.Tablet, value: 34 }],
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
                  setTextInputValue(newTextInputValue);
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
              value={textInputValue}
            />
          </View>
        </View>
        {/* Remember me */}
        <View style={StyleSheet.applyWidth({ width: 165 }, dimensions.width)}>
          <CheckboxRow
            onPress={newCheckboxRowValue => {
              try {
                setCheckboxRowValue(newCheckboxRowValue);
              } catch (err) {
                console.error(err);
              }
            }}
            direction={'row-reverse'}
            label={'Remember me'}
            style={StyleSheet.applyWidth({ minHeight: 50 }, dimensions.width)}
          />
        </View>
        {/* Sign up */}
        <Button
          iconPosition={'left'}
          onPress={() => {
            const handler = async () => {
              try {
                const successful = (
                  await supabaseRegisterClientPOST.mutateAsync({
                    country: 'Mexico',
                    email: 'Rome@gmail.com',
                    fname: 'Fred',
                    pass: 'fred123',
                    sname: 'eddy',
                  })
                )?.json;
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: palettes.Blue[700],
              borderRadius: 100,
              fontFamily: 'Inter_600SemiBold',
              fontSize: [
                { minWidth: Breakpoints.Mobile, value: 16 },
                { minWidth: Breakpoints.Tablet, value: 26 },
              ],
              height: 58,
              textAlign: 'center',
              width: [
                { minWidth: Breakpoints.Mobile, value: '70%' },
                { minWidth: Breakpoints.Laptop, value: '50%' },
                { minWidth: Breakpoints.Desktop, value: '40%' },
                { minWidth: Breakpoints.Tablet, value: '50%' },
              ],
            },
            dimensions.width
          )}
          title={'Sign up'}
        />
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
                opacity: 0.8,
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
              width: '100%',
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
              onPress={() => {
                const handler = async () => {
                  try {
                    (await SupabaseApi.fetchGET(Constants))?.json;
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
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
                  [{ minWidth: Breakpoints.Tablet, value: 34 }],
                  dimensions.width
                )}
              />
            </View>
          </Touchable>
          {/* Google */}
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
                name={'AntDesign/google'}
                size={StyleSheet.getWidthValue(
                  [{ minWidth: Breakpoints.Tablet, value: 34 }],
                  dimensions.width
                )}
              />
            </View>
          </Touchable>
          {/* Apple */}
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
                name={'AntDesign/apple1'}
                size={StyleSheet.getWidthValue(
                  [{ minWidth: Breakpoints.Tablet, value: 34 }],
                  dimensions.width
                )}
              />
            </View>
          </Touchable>
        </View>
        {/* Sign in */}
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
            {/* already_have_an_acct_text */}
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
              {'Already have an account?'}
            </Text>
            {/* sigin_in _text */}
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
              {'Sign in'}
            </Text>
          </View>
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(ProfessionalSignUpScreen);
