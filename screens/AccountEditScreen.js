import React from 'react';
import {
  ActionSheet,
  ActionSheetItem,
  Button,
  Checkbox,
  CircleImage,
  DatePicker,
  Icon,
  IconButton,
  ScreenContainer,
  SimpleStyleFlatList,
  SimpleStyleKeyboardAwareScrollView,
  SimpleStyleMasonryFlashList,
  Spacer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, RefreshControl, Text, View } from 'react-native';
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

const AccountEditScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [ImageModal, setImageModal] = React.useState(false);
  const [clientAddress, setClientAddress] = React.useState('');
  const [clientDob, setClientDob] = React.useState('');
  const [clientPhoneNumber, setClientPhoneNumber] = React.useState('');
  const [clientfemale, setClientfemale] = React.useState(false);
  const [clientmale, setClientmale] = React.useState(false);
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [dobPicker, setDobPicker] = React.useState(new Date());
  const [textInputValue, setTextInputValue] = React.useState('');
  const [refreshingYUcRwEqe, setRefreshingYUcRwEqe] = React.useState(false);
  const supabaseUpdateClientDataPATCH = SupabaseApi.useUpdateClientDataPATCH();
  const isFocused = useIsFocused();
  React.useEffect(() => {
    const handler = async () => {
      try {
        if (!isFocused) {
          return;
        }
        const updated = (
          await SupabaseApi.clientDataOneGET(Constants, { id: 'id' })
        )?.json;
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
      <SupabaseApi.FetchClientDataOneGET
        handlers={{
          on2xx: fetchData => {
            try {
              /* hidden 'API Request' action */
            } catch (err) {
              console.error(err);
            }
          },
        }}
        id={3}
      >
        {({ loading, error, data, refetchClientDataOne }) => {
          const fetchData = data?.json;
          if (loading) {
            return <ActivityIndicator />;
          }

          if (error || data?.status < 200 || data?.status >= 300) {
            return <ActivityIndicator />;
          }

          return (
            <>
              <SimpleStyleMasonryFlashList
                data={fetchData}
                estimatedItemSize={50}
                keyExtractor={(masonryListData, index) => masonryListData}
                listKey={'YUcRwEqe'}
                numColumns={1}
                onEndReachedThreshold={0.5}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshingYUcRwEqe}
                    onRefresh={() => {
                      const handler = async () => {
                        try {
                          setRefreshingYUcRwEqe(
                            true
                          ); /* hidden 'Navigate' action */
                          (await SupabaseApi.clientDataGET(Constants))?.json;
                          setRefreshingYUcRwEqe(false);
                        } catch (err) {
                          console.error(err);
                          setRefreshingYUcRwEqe(false);
                        }
                      };
                      handler();
                    }}
                  />
                }
                renderItem={({ item, index }) => {
                  const masonryListData = item;
                  return (
                    <>
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

                        <View
                          style={StyleSheet.applyWidth(
                            {
                              borderColor: {
                                minWidth: Breakpoints.Laptop,
                                value: theme.colors.branding.secondary,
                              },
                              left: '20%',
                              margin: {
                                minWidth: Breakpoints.Tablet,
                                value: '15%',
                              },
                              padding: {
                                minWidth: Breakpoints.Tablet,
                                value: '2%',
                              },
                            },
                            dimensions.width
                          )}
                        >
                          <IconButton
                            onPress={() => {
                              try {
                                setGlobalVariableValue({
                                  key: 'showActionSheet',
                                  value: true,
                                });
                                if (
                                  clientAddress === masonryListData?.address
                                ) {
                                  setGlobalVariableValue({
                                    key: 'isEditMode',
                                    value: true,
                                  });
                                }
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            size={32}
                            icon={'MaterialCommunityIcons/account-edit-outline'}
                          />
                        </View>
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
                                  Constants['isEditMode'] ===
                                  Constants['isEditMode']
                                ) ? null : (
                                  <CircleImage
                                    source={imageSource(
                                      'https://static.draftbit.com/images/placeholder-image.png'
                                    )}
                                    size={130}
                                  />
                                )}
                              </>
                              {/* User Image */}
                              <>
                                {!(
                                  Constants['isEditMode'] !==
                                  Constants['isEditMode']
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
                              borderLeftWidth: {
                                minWidth: Breakpoints.Laptop,
                                value: '20%',
                              },
                              flexDirection: {
                                minWidth: Breakpoints.Tablet,
                                value: 'row',
                              },
                              gap: { minWidth: Breakpoints.Tablet, value: 200 },
                              marginLeft: {
                                minWidth: Breakpoints.Tablet,
                                value: '20%',
                              },
                              marginRight: {
                                minWidth: Breakpoints.Tablet,
                                value: '10%',
                              },
                            },
                            dimensions.width
                          )}
                        >
                          {/* First Name */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
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
                              {'First Name'}
                            </Text>
                            {/* fname */}
                            <>
                              {!(
                                Constants['isEditMode'] ===
                                Constants['isEditMode']
                              ) ? null : (
                                <Text
                                  accessible={true}
                                  selectable={false}
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors.text.strong,
                                      fontFamily: 'Inter_400Regular',
                                      fontSize: [
                                        {
                                          minWidth: Breakpoints.Mobile,
                                          value: 14,
                                        },
                                        {
                                          minWidth: Breakpoints.Tablet,
                                          value: 20,
                                        },
                                      ],
                                      opacity: 0.8,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {Constants['UserLoginRecord'] &&
                                    Constants['UserLoginRecord'][0][
                                      'firstname'
                                    ]}
                                </Text>
                              )}
                            </>
                          </View>
                          {/* Last Name */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
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
                              borderLeftWidth: {
                                minWidth: Breakpoints.Tablet,
                                value: '20%',
                              },
                              marginLeft: {
                                minWidth: Breakpoints.Tablet,
                                value: '20%',
                              },
                              marginRight: {
                                minWidth: Breakpoints.Tablet,
                                value: '5%',
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
                            {'Gender'}
                          </Text>

                          <View
                            style={StyleSheet.applyWidth(
                              {
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                              },
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
                                          await supabaseUpdateClientDataPATCH.mutateAsync(
                                            {
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
                                            }
                                          )
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
                                          await supabaseUpdateClientDataPATCH.mutateAsync(
                                            {
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
                                            }
                                          )
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
                                        {
                                          minWidth: Breakpoints.Mobile,
                                          value: 16,
                                        },
                                        {
                                          minWidth: Breakpoints.Tablet,
                                          value: 20,
                                        },
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
                                {
                                  marginLeft: '5%',
                                  marginTop: 20,
                                  width: '45%',
                                },
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
                                          await supabaseUpdateClientDataPATCH.mutateAsync(
                                            {
                                              Clientmale: true,
                                              clientAddress: 'mesotamia',
                                              clientCountryValue: 'Iran',
                                              clientDob: '5/8/1788',
                                              clientEmail: 'roy@draftbit.com',
                                              clientFirstName: 'roy',
                                              clientPassword: '123sam',
                                              clientPhoneNumber: 4567876543,
                                              clientSurname: 'sam',
                                              clientfemale:
                                                masonryListData?.female,
                                              id: masonryListData?.id,
                                            }
                                          )
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
                                          await supabaseUpdateClientDataPATCH.mutateAsync(
                                            {
                                              Clientmale: true,
                                              clientAddress: 'mesotamia',
                                              clientCountryValue: 'Iran',
                                              clientDob: '5/8/1788',
                                              clientEmail: 'roy@draftbit.com',
                                              clientFirstName: 'roy',
                                              clientPassword: '123sam',
                                              clientPhoneNumber: 4567876543,
                                              clientSurname: 'sam',
                                              clientfemale:
                                                masonryListData?.female,
                                              id: masonryListData?.id,
                                            }
                                          )
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
                                        {
                                          minWidth: Breakpoints.Mobile,
                                          value: 16,
                                        },
                                        {
                                          minWidth: Breakpoints.Tablet,
                                          value: 20,
                                        },
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
                              borderLeftWidth: {
                                minWidth: Breakpoints.Tablet,
                                value: '20%',
                              },
                              flexDirection: {
                                minWidth: Breakpoints.Tablet,
                                value: 'row',
                              },
                              gap: { minWidth: Breakpoints.Tablet, value: 200 },
                              marginLeft: {
                                minWidth: Breakpoints.Tablet,
                                value: '20%',
                              },
                              marginRight: {
                                minWidth: Breakpoints.Tablet,
                                value: '10%',
                              },
                            },
                            dimensions.width
                          )}
                        >
                          {/* Email */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
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
                              {
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
                              {'\n\n'}
                            </Text>
                          </View>
                          <Spacer bottom={18} left={18} right={18} top={18} />
                        </View>
                        {/* countryDob */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              borderLeftWidth: {
                                minWidth: Breakpoints.Laptop,
                                value: '20%',
                              },
                              flexDirection: {
                                minWidth: Breakpoints.Tablet,
                                value: 'row',
                              },
                              gap: { minWidth: Breakpoints.Tablet, value: 200 },
                              marginLeft: {
                                minWidth: Breakpoints.Tablet,
                                value: '20%',
                              },
                              marginRight: {
                                minWidth: Breakpoints.Tablet,
                                value: '5%',
                              },
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
                              autoDismissKeyboard={true}
                              disabled={false}
                              hideLabel={false}
                              label={'Date'}
                              leftIconMode={'inset'}
                              mode={'date'}
                              onDateChange={newDatePickerValue => {
                                const handler = async () => {
                                  try {
                                    (await SupabaseApi.clientDataGET(Constants))
                                      ?.json;
                                  } catch (err) {
                                    console.error(err);
                                  }
                                };
                                handler();
                              }}
                              type={'solid'}
                              defaultValue={masonryListData?.dob}
                              style={StyleSheet.applyWidth(
                                {
                                  fontSize: {
                                    minWidth: Breakpoints.Tablet,
                                    value: 20,
                                  },
                                },
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
                              borderLeftWidth: {
                                minWidth: Breakpoints.Tablet,
                                value: '20%',
                              },
                              flexDirection: {
                                minWidth: Breakpoints.Tablet,
                                value: 'row',
                              },
                              gap: { minWidth: Breakpoints.Tablet, value: 10 },
                              marginLeft: {
                                minWidth: Breakpoints.Tablet,
                                value: '20%',
                              },
                              marginRight: {
                                minWidth: Breakpoints.Tablet,
                                value: '5%',
                              },
                              paddingRight: {
                                minWidth: Breakpoints.Tablet,
                                value: 20,
                              },
                            },
                            dimensions.width
                          )}
                        >
                          {/* phoneNumber */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
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
                              {'Phone Number\n'}
                            </Text>
                            <TextInput
                              autoCapitalize={'none'}
                              autoCorrect={true}
                              changeTextDelay={500}
                              onChangeText={newTextInputValue => {
                                const handler = async () => {
                                  try {
                                    const saved = (
                                      await supabaseUpdateClientDataPATCH.mutateAsync(
                                        {
                                          Clientmale: true,
                                          clientAddress: clientAddress,
                                          clientCountryValue: 'Iran',
                                          clientDob: '5/8/1788',
                                          clientEmail: 'roy@draftbit.com',
                                          clientFirstName: 'roy',
                                          clientPassword: '123sam',
                                          clientPhoneNumber: clientPhoneNumber,
                                          clientSurname: 'sam',
                                          clientfemale: false,
                                          id: masonryListData?.id,
                                        }
                                      )
                                    )?.json;
                                  } catch (err) {
                                    console.error(err);
                                  }
                                };
                                handler();
                              }}
                              webShowOutline={true}
                              defaultValue={masonryListData?.phoneNumber}
                              editable={false ?? true}
                              placeholder={'phone'}
                              placeholderTextColor={theme.colors.text.strong}
                              style={StyleSheet.applyWidth(
                                {
                                  borderBottomWidth: 0.5,
                                  borderColor: palettes.App['Custom Color_4'],
                                  borderLeftWidth: 0.5,
                                  borderRadius: 8,
                                  borderRightWidth: 0.5,
                                  borderTopWidth: 0.5,
                                  color: theme.colors.text.strong,
                                  fontFamily: 'Inter_400Regular',
                                  fontSize: [
                                    { minWidth: Breakpoints.Mobile, value: 16 },
                                    { minWidth: Breakpoints.Tablet, value: 20 },
                                  ],
                                  height: 52,
                                  marginTop: 10,
                                  paddingBottom: 8,
                                  paddingLeft: 16,
                                  paddingRight: 8,
                                  paddingTop: 8,
                                },
                                dimensions.width
                              )}
                            />
                          </View>
                          {/* Address */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
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
                                  /* hidden 'API Request' action */
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                              onFocus={() => {
                                const handler = async () => {
                                  try {
                                    (
                                      await supabaseUpdateClientDataPATCH.mutateAsync(
                                        {
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
                                        }
                                      )
                                    )?.json;
                                  } catch (err) {
                                    console.error(err);
                                  }
                                };
                                handler();
                              }}
                              textAlignVertical={'top'}
                              webShowOutline={true}
                              defaultValue={masonryListData?.address}
                              editable={false ?? true}
                              placeholder={'Enter current Address'}
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
                                  fontSize: {
                                    minWidth: Breakpoints.Tablet,
                                    value: 20,
                                  },
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
                          <Spacer
                            bottom={'25'}
                            left={'28'}
                            right={'28'}
                            top={'25'}
                          />
                        </View>
                      </SimpleStyleKeyboardAwareScrollView>
                    </>
                  );
                }}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
                extraData={fetchData}
              />
              <SimpleStyleFlatList
                data={fetchData}
                horizontal={false}
                inverted={false}
                keyExtractor={(listData, index) => listData}
                keyboardShouldPersistTaps={'never'}
                listKey={'NVCZY5qu'}
                nestedScrollEnabled={false}
                numColumns={1}
                onEndReachedThreshold={0.5}
                renderItem={({ item, index }) => {
                  const listData = item;
                  return (
                    <ActionSheet>
                      <ActionSheetItem
                        color={theme.colors.text.strong}
                        label={'Option'}
                        {...GlobalStyles.ActionSheetItemStyles(theme)[
                          'Action Sheet Item'
                        ].props}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.ActionSheetItemStyles(theme)[
                            'Action Sheet Item'
                          ].style,
                          dimensions.width
                        )}
                      />
                    </ActionSheet>
                  );
                }}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
              />
            </>
          );
        }}
      </SupabaseApi.FetchClientDataOneGET>
    </ScreenContainer>
  );
};

export default withTheme(AccountEditScreen);
