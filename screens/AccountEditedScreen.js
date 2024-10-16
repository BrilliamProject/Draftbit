import React from 'react';
import {
  Button,
  Checkbox,
  CircleImage,
  DatePicker,
  Icon,
  IconButton,
  NumberInput,
  ScreenContainer,
  SimpleStyleKeyboardAwareScrollView,
  SimpleStyleMasonryFlashList,
  Spacer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Text, View } from 'react-native';
import { Fetch } from 'react-request';
import * as GlobalStyles from '../GlobalStyles.js';
import * as SupabaseApi from '../apis/SupabaseApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const AccountEditedScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [ImageModal, setImageModal] = React.useState(false);
  const [address, setAddress] = React.useState('');
  const [clientAddress, setClientAddress] = React.useState('');
  const [clientDob, setClientDob] = React.useState(new Date());
  const [clientPhoneNumber, setClientPhoneNumber] = React.useState('');
  const [clientfemale, setClientfemale] = React.useState(false);
  const [clientmale, setClientmale] = React.useState(false);
  const [currentAddress, setCurrentAddress] = React.useState('');
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [dobPicker, setDobPicker] = React.useState(new Date());
  const [number, setNumber] = React.useState('');
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const supabaseUpdateClientDataPATCH = SupabaseApi.useUpdateClientDataPATCH();
  const supabaseUpdateClientNumPATCH = SupabaseApi.useUpdateClientNumPATCH();
  const isFocused = useIsFocused();
  React.useEffect(() => {
    const handler = async () => {
      try {
        if (!isFocused) {
          return;
        }
        const updated = (await SupabaseApi.clientDataGET(Constants))?.json;
      } catch (err) {
        console.error(err);
      }
    };
    handler();
  }, [isFocused]);
  React.useEffect(() => {
    const handler = async () => {
      try {
        if (isFocused) {
          return;
        }
        (
          await supabaseUpdateClientDataPATCH.mutateAsync({
            Clientmale: true,
            clientAddress: 'mesotamia',
            clientCountryValue: 'Iran',
            clientDob: '5/8/1788',
            clientEmail: 'roy@draftbit.com',
            clientFirstName: 'roy',
            clientPassword: '123sam',
            clientPhoneNumber: 4567876543,
            clientSurname: 'sam',
            clientfemale: false,
            id: 11,
          })
        )?.json;
      } catch (err) {
        console.error(err);
      }
    };
    handler();
  }, [isFocused]);

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            height: 48,
            justifyContent: 'center',
            marginTop: 12,
            paddingLeft: 16,
            paddingRight: 16,
          },
          dimensions.width
        )}
      >
        {/* Back Click */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              height: 48,
              justifyContent: 'center',
              left: 16,
              position: 'absolute',
              top: 0,
              width: 48,
            },
            dimensions.width
          )}
        >
          <Touchable
            onPress={() => {
              try {
                if (navigation.canGoBack()) {
                  navigation.popToTop();
                }
                navigation.replace('ClientHomePageeScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Icon
              size={24}
              color={theme.colors.text.strong}
              name={'Ionicons/arrow-back-sharp'}
            />
          </Touchable>
        </View>
        {/* Screen Heading */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: [
                {
                  minWidth: Breakpoints.Laptop,
                  value: theme.colors.text.strong,
                },
                {
                  minWidth: Breakpoints.Mobile,
                  value: theme.colors.text.strong,
                },
              ],
              fontFamily: 'Inter_600SemiBold',
              fontSize: 18,
            },
            dimensions.width
          )}
        >
          {'Account Info'}
        </Text>
      </View>

      <SimpleStyleKeyboardAwareScrollView
        enableAutomaticScroll={false}
        enableOnAndroid={false}
        enableResetScrollToCoords={false}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
        viewIsInsideTabBar={false}
        style={StyleSheet.applyWidth(
          {
            gap: { minWidth: Breakpoints.Desktop, value: 10 },
            justifyContent: {
              minWidth: Breakpoints.Desktop,
              value: 'space-around',
            },
          },
          dimensions.width
        )}
      >
        {/* Profile Picture */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', marginTop: 30 },
            dimensions.width
          )}
        >
          <View>
            <Touchable
              onPress={() => {
                try {
                  setImageModal(true);
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              {/* User Image */}
              <>
                {!(
                  Constants['isEditMode'] !== Constants['isEditMode']
                ) ? null : (
                  <CircleImage
                    size={100}
                    source={imageSource('Images["User"]')}
                    style={StyleSheet.applyWidth(
                      { position: 'absolute' },
                      dimensions.width
                    )}
                  />
                )}
              </>
            </Touchable>
          </View>
        </View>
        {/* names */}
        <View
          style={StyleSheet.applyWidth(
            {
              borderLeftWidth: { minWidth: Breakpoints.Laptop, value: '20%' },
              flexDirection: { minWidth: Breakpoints.Tablet, value: 'row' },
              gap: { minWidth: Breakpoints.Tablet, value: 200 },
              marginLeft: { minWidth: Breakpoints.Tablet, value: '20%' },
              marginRight: { minWidth: Breakpoints.Tablet, value: '10%' },
            },
            dimensions.width
          )}
        >
          {/* First Name */}
          <View
            style={StyleSheet.applyWidth(
              { marginTop: 20, paddingLeft: 20, paddingRight: 20 },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.text.strong,
                  fontFamily: 'AbrilFatface_400Regular',
                  fontSize: [
                    { minWidth: Breakpoints.Mobile, value: 14 },
                    { minWidth: Breakpoints.Tablet, value: 24 },
                  ],
                  opacity: 0.8,
                },
                dimensions.width
              )}
            >
              {'First Name'}
            </Text>
            {/* fname */}
            <>
              {!(Constants['isEditMode'] === Constants['isEditMode']) ? null : (
                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.text.strong,
                      fontFamily: 'Inter_400Regular',
                      fontSize: [
                        { minWidth: Breakpoints.Mobile, value: 14 },
                        { minWidth: Breakpoints.Tablet, value: 20 },
                      ],
                      opacity: 0.8,
                    },
                    dimensions.width
                  )}
                >
                  {Constants['UserLoginRecord'] &&
                    Constants['UserLoginRecord'][0]['firstname']}
                </Text>
              )}
            </>
          </View>
          {/* Last Name */}
          <View
            style={StyleSheet.applyWidth(
              { marginTop: 20, paddingLeft: 20, paddingRight: 20 },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.text.strong,
                  fontFamily: 'AbrilFatface_400Regular',
                  fontSize: [
                    { minWidth: Breakpoints.Mobile, value: 14 },
                    { minWidth: Breakpoints.Tablet, value: 24 },
                  ],
                  opacity: 0.8,
                },
                dimensions.width
              )}
            >
              {'Last Name'}
            </Text>
            {/* surname */}
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.text.strong,
                  fontFamily: 'Inter_400Regular',
                  fontSize: [
                    { minWidth: Breakpoints.Mobile, value: 14 },
                    { minWidth: Breakpoints.Tablet, value: 20 },
                  ],
                  opacity: 0.8,
                },
                dimensions.width
              )}
            >
              {Constants['UserLoginRecord'] &&
                Constants['UserLoginRecord'][0]['surname']}
              {'\n'}
            </Text>
          </View>
        </View>
        {/* Gender */}
        <View
          style={StyleSheet.applyWidth(
            {
              borderLeftWidth: { minWidth: Breakpoints.Tablet, value: '20%' },
              marginLeft: { minWidth: Breakpoints.Tablet, value: '20%' },
              marginRight: { minWidth: Breakpoints.Tablet, value: '5%' },
              marginTop: 20,
              paddingLeft: 20,
              paddingRight: 20,
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
                fontFamily: 'AbrilFatface_400Regular',
                fontSize: [
                  { minWidth: Breakpoints.Mobile, value: 14 },
                  { minWidth: Breakpoints.Tablet, value: 24 },
                ],
                opacity: 0.8,
              },
              dimensions.width
            )}
          >
            {'Gender'}
          </Text>

          <View
            style={StyleSheet.applyWidth(
              { flexDirection: 'row', justifyContent: 'space-evenly' },
              dimensions.width
            )}
          >
            {/* Male */}
            <Touchable
              style={StyleSheet.applyWidth(
                { marginTop: 20, width: '45%' },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderColor: palettes.App['Custom Color_4'],
                    borderLeftWidth: 1,
                    borderRadius: 8,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    height: 55,
                    paddingLeft: 12,
                    paddingRight: 12,
                  },
                  dimensions.width
                )}
              >
                <Checkbox
                  onCheck={() => {
                    const handler = async () => {
                      try {
                        /* hidden 'Set Variable' action */
                        (
                          await supabaseUpdateClientDataPATCH.mutateAsync({
                            Clientmale: clientmale,
                            clientAddress: 'mesotamia',
                            clientCountryValue: 'Iran',
                            clientDob: '5/8/1788',
                            clientEmail: 'roy@draftbit.com',
                            clientFirstName: 'roy',
                            clientPassword: '123sam',
                            clientPhoneNumber: 4567876543,
                            clientSurname: 'sam',
                            clientfemale: false,
                            id: masonryListData?.id,
                          })
                        )?.json;
                      } catch (err) {
                        console.error(err);
                      }
                    };
                    handler();
                  }}
                  onUncheck={() => {
                    const handler = async () => {
                      try {
                        /* hidden 'Set Variable' action */
                        (
                          await supabaseUpdateClientDataPATCH.mutateAsync({
                            Clientmale: clientmale,
                            clientAddress: 'mesotamia',
                            clientCountryValue: 'Iran',
                            clientDob: '5/8/1788',
                            clientEmail: 'roy@draftbit.com',
                            clientFirstName: 'roy',
                            clientPassword: '123sam',
                            clientPhoneNumber: 4567876543,
                            clientSurname: 'sam',
                            clientfemale: false,
                            id: masonryListData?.id,
                          })
                        )?.json;
                      } catch (err) {
                        console.error(err);
                      }
                    };
                    handler();
                  }}
                  defaultValue={clientmale}
                />
                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.text.strong,
                      fontFamily: 'Inter_400Regular',
                      fontSize: [
                        { minWidth: Breakpoints.Mobile, value: 16 },
                        { minWidth: Breakpoints.Tablet, value: 20 },
                      ],
                      marginLeft: 15,
                    },
                    dimensions.width
                  )}
                >
                  {'Male'}
                </Text>
              </View>
            </Touchable>
            {/* Female */}
            <Touchable
              style={StyleSheet.applyWidth(
                { marginLeft: '5%', marginTop: 20, width: '45%' },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderColor: palettes.App['Custom Color_4'],
                    borderLeftWidth: 1,
                    borderRadius: 8,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    height: 55,
                    paddingLeft: 12,
                    paddingRight: 12,
                  },
                  dimensions.width
                )}
              >
                <Checkbox
                  onCheck={() => {
                    const handler = async () => {
                      try {
                        (
                          await supabaseUpdateClientDataPATCH.mutateAsync({
                            Clientmale: true,
                            clientAddress: 'mesotamia',
                            clientCountryValue: 'Iran',
                            clientDob: '5/8/1788',
                            clientEmail: 'roy@draftbit.com',
                            clientFirstName: 'roy',
                            clientPassword: '123sam',
                            clientPhoneNumber: 4567876543,
                            clientSurname: 'sam',
                            clientfemale: masonryListData?.female,
                            id: masonryListData?.id,
                          })
                        )?.json;
                        /* hidden 'Set Variable' action */
                      } catch (err) {
                        console.error(err);
                      }
                    };
                    handler();
                  }}
                  onUncheck={() => {
                    const handler = async () => {
                      try {
                        (
                          await supabaseUpdateClientDataPATCH.mutateAsync({
                            Clientmale: true,
                            clientAddress: 'mesotamia',
                            clientCountryValue: 'Iran',
                            clientDob: '5/8/1788',
                            clientEmail: 'roy@draftbit.com',
                            clientFirstName: 'roy',
                            clientPassword: '123sam',
                            clientPhoneNumber: 4567876543,
                            clientSurname: 'sam',
                            clientfemale: masonryListData?.female,
                            id: masonryListData?.id,
                          })
                        )?.json;
                        /* hidden 'Set Variable' action */
                      } catch (err) {
                        console.error(err);
                      }
                    };
                    handler();
                  }}
                  defaultValue={clientfemale}
                />
                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.text.strong,
                      fontFamily: 'Inter_400Regular',
                      fontSize: [
                        { minWidth: Breakpoints.Mobile, value: 16 },
                        { minWidth: Breakpoints.Tablet, value: 20 },
                      ],
                      marginLeft: 15,
                    },
                    dimensions.width
                  )}
                >
                  {'Female'}
                </Text>
              </View>
            </Touchable>
          </View>
          <Spacer bottom={18} left={18} right={18} top={18} />
        </View>
        {/* emailPassword */}
        <View
          style={StyleSheet.applyWidth(
            {
              borderLeftWidth: { minWidth: Breakpoints.Tablet, value: '20%' },
              flexDirection: { minWidth: Breakpoints.Tablet, value: 'row' },
              gap: { minWidth: Breakpoints.Tablet, value: 200 },
              marginLeft: { minWidth: Breakpoints.Tablet, value: '20%' },
              marginRight: { minWidth: Breakpoints.Tablet, value: '10%' },
            },
            dimensions.width
          )}
        >
          {/* Email */}
          <View
            style={StyleSheet.applyWidth(
              { marginTop: 20, paddingLeft: 20, paddingRight: 20 },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.text.strong,
                  fontFamily: 'AbrilFatface_400Regular',
                  fontSize: [
                    { minWidth: Breakpoints.Mobile, value: 14 },
                    { minWidth: Breakpoints.Tablet, value: 24 },
                  ],
                  opacity: 0.8,
                },
                dimensions.width
              )}
            >
              {'Email'}
            </Text>
            {/* email */}
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.text.strong,
                  fontFamily: 'Inter_400Regular',
                  fontSize: [
                    { minWidth: Breakpoints.Mobile, value: 14 },
                    { minWidth: Breakpoints.Tablet, value: 20 },
                  ],
                  opacity: 0.8,
                },
                dimensions.width
              )}
            >
              {Constants['UserLoginRecord'] &&
                Constants['UserLoginRecord'][0]['email']}
            </Text>
          </View>
          {/* password */}
          <View
            style={StyleSheet.applyWidth(
              { marginTop: 20, paddingLeft: 20, paddingRight: 20 },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.text.strong,
                  fontFamily: 'AbrilFatface_400Regular',
                  fontSize: [
                    { minWidth: Breakpoints.Mobile, value: 14 },
                    { minWidth: Breakpoints.Tablet, value: 24 },
                  ],
                  opacity: 0.8,
                },
                dimensions.width
              )}
            >
              {'password'}
            </Text>
            {/* password */}
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.text.strong,
                  fontFamily: 'Inter_400Regular',
                  fontSize: [
                    { minWidth: Breakpoints.Mobile, value: 14 },
                    { minWidth: Breakpoints.Tablet, value: 20 },
                  ],
                  opacity: 0.8,
                },
                dimensions.width
              )}
            >
              {Constants['UserLoginRecord'] &&
                Constants['UserLoginRecord'][0]['password']}
              {'\n'}
            </Text>
          </View>
          <Spacer bottom={18} left={18} right={18} top={18} />
        </View>
        {/* countryDob */}
        <View
          style={StyleSheet.applyWidth(
            {
              borderLeftWidth: { minWidth: Breakpoints.Laptop, value: '20%' },
              flexDirection: { minWidth: Breakpoints.Tablet, value: 'row' },
              gap: { minWidth: Breakpoints.Tablet, value: 200 },
              marginLeft: { minWidth: Breakpoints.Tablet, value: '20%' },
              marginRight: { minWidth: Breakpoints.Tablet, value: '5%' },
            },
            dimensions.width
          )}
        >
          {/* country */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: {
                  minWidth: Breakpoints.Tablet,
                  value: 'column',
                },
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
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
                  fontFamily: 'AbrilFatface_400Regular',
                  fontSize: [
                    { minWidth: Breakpoints.Mobile, value: 14 },
                    { minWidth: Breakpoints.Tablet, value: 24 },
                  ],
                  opacity: 0.8,
                },
                dimensions.width
              )}
            >
              {'Country'}
            </Text>
            {/* country */}
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.text.strong,
                  fontFamily: 'Inter_400Regular',
                  fontSize: [
                    { minWidth: Breakpoints.Mobile, value: 14 },
                    { minWidth: Breakpoints.Tablet, value: 20 },
                  ],
                  opacity: 0.8,
                },
                dimensions.width
              )}
            >
              {Constants['UserLoginRecord'] &&
                Constants['UserLoginRecord'][0]['country']}
            </Text>
          </View>
          {/* dob */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: {
                  minWidth: Breakpoints.Tablet,
                  value: 'column',
                },
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
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
                  fontFamily: 'AbrilFatface_400Regular',
                  fontSize: [
                    { minWidth: Breakpoints.Mobile, value: 14 },
                    { minWidth: Breakpoints.Tablet, value: 24 },
                  ],
                  opacity: 0.8,
                },
                dimensions.width
              )}
            >
              {'DOB'}
            </Text>
            <DatePicker
              disabled={false}
              hideLabel={false}
              label={'Date'}
              leftIconMode={'inset'}
              mode={'date'}
              onDateChange={newDatePickerValue => {
                const handler = async () => {
                  try {
                    (
                      await supabaseUpdateClientDataPATCH.mutateAsync({
                        Clientmale: masonryListData?.male,
                        clientAddress: masonryListData?.address,
                        clientCountryValue: masonryListData?.country,
                        clientDob: clientDob,
                        clientEmail: masonryListData?.email,
                        clientFirstName: masonryListData?.firstname,
                        clientPassword: masonryListData?.password,
                        clientPhoneNumber: masonryListData?.phoneNumber,
                        clientSurname: masonryListData?.surname,
                        clientfemale: false,
                        id: masonryListData?.id,
                      })
                    )?.json;
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
              type={'solid'}
              autoDismissKeyboard={false}
              defaultValue={clientDob}
              style={StyleSheet.applyWidth(
                { fontSize: { minWidth: Breakpoints.Tablet, value: 20 } },
                dimensions.width
              )}
            />
          </View>
          <Spacer bottom={18} left={18} right={18} top={18} />
        </View>
        {/* phoneAddress */}
        <View
          style={StyleSheet.applyWidth(
            {
              borderLeftWidth: { minWidth: Breakpoints.Tablet, value: '20%' },
              flexDirection: { minWidth: Breakpoints.Tablet, value: 'row' },
              gap: { minWidth: Breakpoints.Tablet, value: 10 },
              marginLeft: { minWidth: Breakpoints.Tablet, value: '20%' },
              marginRight: { minWidth: Breakpoints.Tablet, value: '5%' },
              paddingRight: { minWidth: Breakpoints.Tablet, value: 20 },
            },
            dimensions.width
          )}
        >
          {/* phoneNumber */}
          <View
            style={StyleSheet.applyWidth(
              { marginTop: 20, paddingLeft: 20, paddingRight: 20 },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.text.strong,
                  fontFamily: 'AbrilFatface_400Regular',
                  fontSize: [
                    { minWidth: Breakpoints.Mobile, value: 14 },
                    { minWidth: Breakpoints.Tablet, value: 24 },
                  ],
                  opacity: 0.8,
                },
                dimensions.width
              )}
            >
              {'Phone Number\n'}
            </Text>
            <NumberInput
              changeTextDelay={500}
              onChangeText={newNumberInputValue => {
                try {
                  setClientPhoneNumber(newNumberInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              {...GlobalStyles.NumberInputStyles(theme)['Number Input'].props}
              placeholder={'Phone'}
              style={StyleSheet.applyWidth(
                GlobalStyles.NumberInputStyles(theme)['Number Input'].style,
                dimensions.width
              )}
              value={clientPhoneNumber}
            />
          </View>
          {/* Address */}
          <View
            style={StyleSheet.applyWidth(
              { marginTop: 20, paddingLeft: 20, paddingRight: 20 },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.text.strong,
                  fontFamily: 'AbrilFatface_400Regular',
                  fontSize: [
                    { minWidth: Breakpoints.Mobile, value: 14 },
                    { minWidth: Breakpoints.Tablet, value: 24 },
                  ],
                  opacity: 0.8,
                  textTransform: 'none',
                },
                dimensions.width
              )}
            >
              {'Address'}
            </Text>
            <TextInput
              autoCorrect={true}
              changeTextDelay={500}
              multiline={true}
              numberOfLines={4}
              onChangeText={newTextAreaValue => {
                try {
                  undefined;
                } catch (err) {
                  console.error(err);
                }
              }}
              textAlignVertical={'top'}
              webShowOutline={true}
              defaultValue={clientAddress}
              editable={true}
              placeholder={currentAddress}
              placeholderTextColor={theme.colors.text.strong}
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 1,
                  borderColor: palettes.App['Custom Color_4'],
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: theme.colors.text.strong,
                  fontFamily: 'Inter_300Light',
                  fontSize: { minWidth: Breakpoints.Tablet, value: 20 },
                  height: 120,
                  lineHeight: 20,
                  marginTop: 16,
                  paddingBottom: 16,
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 16,
                },
                dimensions.width
              )}
            />
          </View>
          <Spacer bottom={18} left={18} right={18} top={18} />
        </View>
        {/* Save Changes */}
        <Button
          iconPosition={'left'}
          onPress={() => {
            const handler = async () => {
              console.log('Save Changes ON_PRESS Start');
              let error = null;
              try {
                console.log('Start ON_PRESS:0 FETCH_REQUEST');
                const getTheClient = (
                  await supabaseUpdateClientDataPATCH.mutateAsync({
                    clientAddress: clientAddress,
                    clientPhoneNumber: clientPhoneNumber,
                    id: 1,
                  })
                )?.json;
                console.log('Complete ON_PRESS:0 FETCH_REQUEST', {
                  getTheClient,
                });
                console.log('Start ON_PRESS:1 CONSOLE_LOG');
                console.log(getTheClient);
                console.log('Complete ON_PRESS:1 CONSOLE_LOG');
              } catch (err) {
                console.error(err);
                error = err.message ?? err;
              }
              console.log(
                'Save Changes ON_PRESS Complete',
                error ? { error } : 'no error'
              );
            };
            handler();
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors.text.strong,
              borderRadius: 24,
              color: palettes.App['Custom Color_2'],
              fontFamily: 'Inter_500Medium',
              height: 56,
              left: { minWidth: Breakpoints.Tablet, value: '28%' },
              marginBottom: 35,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 25,
              textAlign: 'center',
              width: { minWidth: Breakpoints.Tablet, value: '50%' },
            },
            dimensions.width
          )}
          title={'Save Changes'}
        />
      </SimpleStyleKeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(AccountEditedScreen);
