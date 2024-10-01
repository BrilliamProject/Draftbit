import React from 'react';
import {
  Button,
  CircleImage,
  DatePicker,
  Divider,
  Icon,
  ScreenContainer,
  SimpleStyleFlatList,
  SimpleStyleKeyboardAwareScrollView,
  Surface,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Modal, Text, View } from 'react-native';
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

const Blank2Screen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [ImageModal, setImageModal] = React.useState(false);
  const [Logout, setLogout] = React.useState(false);
  const [acctvisible, setAcctvisible] = React.useState(false);
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [date, setDate] = React.useState(new Date());

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <Surface
        elevation={0}
        {...GlobalStyles.SurfaceStyles(theme)['Surface'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.SurfaceStyles(theme)['Surface'].style,
            {
              backgroundColor: theme.colors.foreground.brand,
              borderRadius: 20,
              height: [
                { minWidth: Breakpoints.Mobile, value: '20%' },
                { minWidth: Breakpoints.Tablet, value: '18%' },
                { minWidth: Breakpoints.Laptop, value: '25%' },
              ],
              left: [
                { minWidth: Breakpoints.Mobile, value: '55%' },
                { minWidth: Breakpoints.Tablet, value: '68%' },
              ],
              marginBottom: '10%',
              marginLeft: '10%',
              marginRight: '10%',
              marginTop: '10%',
              minHeight: 20,
              paddingBottom: '10%',
              paddingLeft: '10%',
              paddingRight: '10%',
              paddingTop: '10%',
              top: [
                { minWidth: Breakpoints.Mobile, value: '15%' },
                { minWidth: Breakpoints.Tablet, value: '9%' },
              ],
              width: [
                { minWidth: Breakpoints.Mobile, value: '30%' },
                { minWidth: Breakpoints.Tablet, value: '20%' },
              ],
            }
          ),
          dimensions.width
        )}
      >
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: { minWidth: Breakpoints.Tablet, value: 'center' },
              alignSelf: { minWidth: Breakpoints.Tablet, value: 'center' },
              bottom: [
                { minWidth: Breakpoints.Mobile, value: '20%' },
                { minWidth: Breakpoints.Tablet, value: 50 },
                { minWidth: Breakpoints.Laptop, value: 65 },
              ],
              justifyContent: {
                minWidth: Breakpoints.Tablet,
                value: 'space-evenly',
              },
              padding: 10,
              right: [
                { minWidth: Breakpoints.Mobile, value: '40%' },
                { minWidth: Breakpoints.Tablet, value: '20%' },
              ],
            },
            dimensions.width
          )}
        >
          {/* Header */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignContent: { minWidth: Breakpoints.Tablet, value: 'center' },
                alignItems: { minWidth: Breakpoints.Tablet, value: 'center' },
                bottom: [
                  { minWidth: Breakpoints.Mobile, value: '12%' },
                  { minWidth: Breakpoints.Tablet, value: '20%' },
                ],
                flexDirection: 'row',
                height: 48,
                justifyContent: [
                  { minWidth: Breakpoints.Mobile, value: 'space-between' },
                  { minWidth: Breakpoints.Tablet, value: 'center' },
                ],
                left: [
                  { minWidth: Breakpoints.Mobile, value: 35 },
                  { minWidth: Breakpoints.Tablet, value: 10 },
                ],
                paddingLeft: 24,
                paddingRight: 24,
              },
              dimensions.width
            )}
          >
            {/* Navigation Frame */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  flexGrow: 1,
                  flexShrink: 0,
                  left: '20%',
                  marginLeft: '5%',
                  marginRight: '5%',
                },
                dimensions.width
              )}
            >
              {/* Flex Touchable */}
              <View
                style={StyleSheet.applyWidth(
                  { flexGrow: 1, flexShrink: 0, maxWidth: '10%' },
                  dimensions.width
                )}
              >
                <Touchable>
                  <Icon
                    color={palettes.App.ShopAppBlue}
                    name={'AntDesign/closecircleo'}
                    size={25}
                  />
                </Touchable>
              </View>
            </View>
          </View>
          {/* Menu Section 2 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignContent: 'center',
                alignSelf: 'center',
                bottom: [
                  { minWidth: Breakpoints.Mobile, value: '30%' },
                  { minWidth: Breakpoints.Tablet, value: '24%' },
                  { minWidth: Breakpoints.Laptop, value: '22%' },
                ],
                right: { minWidth: Breakpoints.Tablet, value: '4%' },
              },
              dimensions.width
            )}
          >
            {/* Account */}
            <Touchable
              onPress={() => {
                try {
                  setAcctvisible(true);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                { marginBottom: 20 },
                dimensions.width
              )}
            >
              {/* Item */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    { alignItems: 'center', flexDirection: 'row' },
                    dimensions.width
                  )}
                >
                  {/* Name */}
                  <Text
                    accessible={true}
                    selectable={false}
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.text.strong,
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: [
                          { minWidth: Breakpoints.Mobile, value: 10 },
                          { minWidth: Breakpoints.Tablet, value: 15 },
                          { minWidth: Breakpoints.Desktop, value: 25 },
                        ],
                        marginLeft: 20,
                      },
                      dimensions.width
                    )}
                  >
                    {'Account\n'}
                  </Text>
                </View>
              </View>
              {/* AccountModal */}
              <Modal
                animationType={'none'}
                supportedOrientations={['portrait', 'landscape']}
                transparent={false}
                visible={acctvisible}
              >
                <SupabaseApi.FetchFindclientGET id={2}>
                  {({ loading, error, data, refetchFindclient }) => {
                    const fetchData = data?.json;
                    if (loading) {
                      return <ActivityIndicator />;
                    }

                    if (error || data?.status < 200 || data?.status >= 300) {
                      return <ActivityIndicator />;
                    }

                    return (
                      <SimpleStyleFlatList
                        data={fetchData}
                        horizontal={false}
                        inverted={false}
                        keyExtractor={(listData, index) => listData}
                        keyboardShouldPersistTaps={'never'}
                        listKey={'7TWqD5qv'}
                        nestedScrollEnabled={false}
                        numColumns={1}
                        onEndReachedThreshold={0.5}
                        renderItem={({ item, index }) => {
                          const listData = item;
                          return (
                            <>
                              <View>
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
                                    <Touchable>
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
                                    gap: {
                                      minWidth: Breakpoints.Desktop,
                                      value: 10,
                                    },
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
                                      <CircleImage
                                        source={imageSource(
                                          'https://static.draftbit.com/images/placeholder-image.png'
                                        )}
                                        size={130}
                                      />
                                      {/* User Image */}
                                      <CircleImage
                                        size={100}
                                        source={imageSource('Images["chae"]')}
                                        style={StyleSheet.applyWidth(
                                          { position: 'absolute' },
                                          dimensions.width
                                        )}
                                      />
                                      {/* Edit Icon */}
                                      <CircleImage
                                        size={32}
                                        source={imageSource('Images["User"]')}
                                        style={StyleSheet.applyWidth(
                                          {
                                            bottom: 0,
                                            position: 'absolute',
                                            right: 0,
                                          },
                                          dimensions.width
                                        )}
                                      />
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
                                      gap: {
                                        minWidth: Breakpoints.Tablet,
                                        value: 0,
                                      },
                                      left: {
                                        minWidth: Breakpoints.Tablet,
                                        value: '20%',
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
                                          fontFamily: 'Inter_400Regular',
                                          fontSize: 14,
                                          opacity: 0.8,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {'First Name'}
                                    </Text>
                                    <TextInput
                                      autoCapitalize={'none'}
                                      autoCorrect={true}
                                      changeTextDelay={500}
                                      onChangeText={newTextInputValue => {
                                        try {
                                          setGlobalVariableValue({
                                            key: 'authUser',
                                            value: newTextInputValue,
                                          });
                                        } catch (err) {
                                          console.error(err);
                                        }
                                      }}
                                      webShowOutline={true}
                                      editable={true}
                                      placeholder={'Jon'}
                                      placeholderTextColor={
                                        theme.colors.text.strong
                                      }
                                      style={StyleSheet.applyWidth(
                                        {
                                          borderBottomWidth: 0.5,
                                          borderColor:
                                            palettes.App['Custom Color_4'],
                                          borderLeftWidth: 0.5,
                                          borderRadius: 8,
                                          borderRightWidth: 0.5,
                                          borderTopWidth: 0.5,
                                          color: palettes.App['Custom Color_2'],
                                          fontFamily: 'Inter_400Regular',
                                          fontSize: 16,
                                          height: 52,
                                          marginTop: 10,
                                          paddingBottom: 8,
                                          paddingLeft: 16,
                                          paddingRight: 8,
                                          paddingTop: 8,
                                        },
                                        dimensions.width
                                      )}
                                      value={Constants['authUser']}
                                    />
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
                                          fontFamily: 'Inter_400Regular',
                                          fontSize: 14,
                                          opacity: 0.8,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {'Last Name'}
                                    </Text>
                                    <TextInput
                                      autoCapitalize={'none'}
                                      autoCorrect={true}
                                      changeTextDelay={500}
                                      webShowOutline={true}
                                      editable={true}
                                      placeholder={'Doe'}
                                      placeholderTextColor={
                                        theme.colors.text.strong
                                      }
                                      style={StyleSheet.applyWidth(
                                        {
                                          borderBottomWidth: 1,
                                          borderColor:
                                            palettes.App['Custom Color_4'],
                                          borderLeftWidth: 1,
                                          borderRadius: 8,
                                          borderRightWidth: 1,
                                          borderTopWidth: 1,
                                          color: palettes.App['Custom Color_2'],
                                          fontFamily: 'Inter_400Regular',
                                          fontSize: 16,
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
                                      left: {
                                        minWidth: Breakpoints.Tablet,
                                        value: '20%',
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
                                          fontFamily: 'Inter_400Regular',
                                          fontSize: 14,
                                          opacity: 0.8,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {'Country'}
                                    </Text>
                                    <TextInput
                                      autoCapitalize={'none'}
                                      autoCorrect={true}
                                      changeTextDelay={500}
                                      webShowOutline={true}
                                      editable={true}
                                      placeholder={'italy'}
                                      placeholderTextColor={
                                        theme.colors.text.strong
                                      }
                                      style={StyleSheet.applyWidth(
                                        {
                                          borderBottomWidth: 1,
                                          borderColor:
                                            palettes.App['Custom Color_4'],
                                          borderLeftWidth: 1,
                                          borderRadius: 8,
                                          borderRightWidth: 1,
                                          borderTopWidth: 1,
                                          color: palettes.App['Custom Color_2'],
                                          fontFamily: 'Inter_400Regular',
                                          fontSize: 16,
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
                                          fontFamily: 'Inter_400Regular',
                                          fontSize: 14,
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
                                        const date = newDatePickerValue;
                                        try {
                                          setDatePickerValue(
                                            newDatePickerValue
                                          );
                                        } catch (err) {
                                          console.error(err);
                                        }
                                      }}
                                      type={'solid'}
                                      date={datePickerValue}
                                    />
                                  </View>
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
                                      left: {
                                        minWidth: Breakpoints.Tablet,
                                        value: '20%',
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
                                          fontFamily: 'Inter_400Regular',
                                          fontSize: 14,
                                          opacity: 0.8,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {'Email'}
                                    </Text>
                                    <TextInput
                                      autoCapitalize={'none'}
                                      autoCorrect={true}
                                      changeTextDelay={500}
                                      webShowOutline={true}
                                      editable={true}
                                      placeholder={'someone@draftbit.com'}
                                      placeholderTextColor={
                                        theme.colors.text.strong
                                      }
                                      style={StyleSheet.applyWidth(
                                        {
                                          borderBottomWidth: 0.5,
                                          borderColor:
                                            palettes.App['Custom Color_4'],
                                          borderLeftWidth: 0.5,
                                          borderRadius: 8,
                                          borderRightWidth: 0.5,
                                          borderTopWidth: 0.5,
                                          color: palettes.App['Custom Color_2'],
                                          fontFamily: 'Inter_400Regular',
                                          fontSize: 16,
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
                                          fontFamily: 'Inter_400Regular',
                                          fontSize: 14,
                                          opacity: 0.8,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {'password'}
                                    </Text>
                                    <TextInput
                                      autoCapitalize={'none'}
                                      autoCorrect={true}
                                      changeTextDelay={500}
                                      webShowOutline={true}
                                      editable={true}
                                      placeholder={'password'}
                                      placeholderTextColor={
                                        theme.colors.text.strong
                                      }
                                      style={StyleSheet.applyWidth(
                                        {
                                          borderBottomWidth: 0.5,
                                          borderColor:
                                            palettes.App['Custom Color_4'],
                                          borderLeftWidth: 0.5,
                                          borderRadius: 8,
                                          borderRightWidth: 0.5,
                                          borderTopWidth: 0.5,
                                          color: theme.colors.text.strong,
                                          fontFamily: 'Inter_400Regular',
                                          fontSize: 16,
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
                                </View>
                                {/* Gender */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      borderLeftWidth: {
                                        minWidth: Breakpoints.Tablet,
                                        value: '20%',
                                      },
                                      left: {
                                        minWidth: Breakpoints.Tablet,
                                        value: '20%',
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
                                        fontFamily: 'Inter_400Regular',
                                        fontSize: 14,
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
                                            borderColor:
                                              palettes.App['Custom Color_4'],
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
                                        <Icon
                                          size={24}
                                          color={palettes.App['Custom Color_2']}
                                          name={'FontAwesome/circle-thin'}
                                        />
                                        <Text
                                          accessible={true}
                                          selectable={false}
                                          style={StyleSheet.applyWidth(
                                            {
                                              color: theme.colors.text.strong,
                                              fontFamily: 'Inter_400Regular',
                                              fontSize: 16,
                                              marginLeft: 15,
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {'Male'}
                                        </Text>
                                        <CircleImage
                                          size={24}
                                          source={Images.Check}
                                          style={StyleSheet.applyWidth(
                                            { left: 12, position: 'absolute' },
                                            dimensions.width
                                          )}
                                        />
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
                                            borderColor:
                                              palettes.App['Custom Color_4'],
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
                                        <Icon
                                          size={24}
                                          color={palettes.App['Custom Color_2']}
                                          name={'FontAwesome/circle-thin'}
                                        />
                                        <Text
                                          accessible={true}
                                          selectable={false}
                                          style={StyleSheet.applyWidth(
                                            {
                                              color: theme.colors.text.strong,
                                              fontFamily: 'Inter_400Regular',
                                              fontSize: 16,
                                              marginLeft: 15,
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {'Female'}
                                        </Text>
                                        <CircleImage
                                          size={24}
                                          source={Images.Check}
                                          style={StyleSheet.applyWidth(
                                            { left: 12, position: 'absolute' },
                                            dimensions.width
                                          )}
                                        />
                                      </View>
                                    </Touchable>
                                  </View>
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
                                      left: {
                                        minWidth: Breakpoints.Tablet,
                                        value: '20%',
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
                                          fontFamily: 'Inter_400Regular',
                                          fontSize: 14,
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
                                      webShowOutline={true}
                                      editable={true}
                                      placeholder={'phone'}
                                      placeholderTextColor={
                                        theme.colors.text.strong
                                      }
                                      style={StyleSheet.applyWidth(
                                        {
                                          borderBottomWidth: 0.5,
                                          borderColor:
                                            palettes.App['Custom Color_4'],
                                          borderLeftWidth: 0.5,
                                          borderRadius: 8,
                                          borderRightWidth: 0.5,
                                          borderTopWidth: 0.5,
                                          color: theme.colors.text.strong,
                                          fontFamily: 'Inter_400Regular',
                                          fontSize: 16,
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
                                          fontFamily: 'Inter_400Regular',
                                          fontSize: 14,
                                          opacity: 0.8,
                                          textTransform: 'none',
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {'Address\n'}
                                    </Text>
                                    <TextInput
                                      autoCorrect={true}
                                      changeTextDelay={500}
                                      multiline={true}
                                      numberOfLines={4}
                                      textAlignVertical={'top'}
                                      webShowOutline={true}
                                      editable={true}
                                      placeholder={
                                        'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
                                      }
                                      placeholderTextColor={
                                        theme.colors.text.strong
                                      }
                                      style={StyleSheet.applyWidth(
                                        {
                                          borderBottomWidth: 1,
                                          borderColor:
                                            palettes.App['Custom Color_4'],
                                          borderLeftWidth: 1,
                                          borderRadius: 8,
                                          borderRightWidth: 1,
                                          borderTopWidth: 1,
                                          color: theme.colors.text.strong,
                                          fontFamily: 'Inter_300Light',
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
                                </View>
                                {/* Save Changes */}
                                <Button
                                  iconPosition={'left'}
                                  onPress={() => {
                                    try {
                                      /* 'API Request' action requires configuration: choose an API endpoint */
                                      /* 'Navigate' action requires configuration: choose a navigation destination */
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                  style={StyleSheet.applyWidth(
                                    {
                                      backgroundColor: theme.colors.text.strong,
                                      borderRadius: 24,
                                      color: palettes.App['Custom Color_2'],
                                      fontFamily: 'Inter_500Medium',
                                      height: 56,
                                      left: {
                                        minWidth: Breakpoints.Tablet,
                                        value: '13%',
                                      },
                                      marginBottom: 35,
                                      marginLeft: 20,
                                      marginRight: 20,
                                      marginTop: 25,
                                      textAlign: 'center',
                                      width: {
                                        minWidth: Breakpoints.Tablet,
                                        value: '70%',
                                      },
                                    },
                                    dimensions.width
                                  )}
                                  title={'Save Changes'}
                                />
                              </SimpleStyleKeyboardAwareScrollView>
                            </>
                          );
                        }}
                        showsHorizontalScrollIndicator={true}
                        showsVerticalScrollIndicator={true}
                      />
                    );
                  }}
                </SupabaseApi.FetchFindclientGET>
              </Modal>
            </Touchable>
            {/* Help Center */}
            <Touchable
              style={StyleSheet.applyWidth(
                { marginBottom: 20 },
                dimensions.width
              )}
            >
              {/* Item */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    { alignItems: 'center', flexDirection: 'row' },
                    dimensions.width
                  )}
                >
                  {/* Name */}
                  <Text
                    accessible={true}
                    selectable={false}
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.text.strong,
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: [
                          { minWidth: Breakpoints.Mobile, value: 10 },
                          { minWidth: Breakpoints.Tablet, value: 15 },
                          { minWidth: Breakpoints.Desktop, value: 25 },
                        ],
                        marginLeft: 20,
                      },
                      dimensions.width
                    )}
                  >
                    {'Help Center'}
                  </Text>
                </View>
              </View>
            </Touchable>
            {/* history */}
            <Touchable
              style={StyleSheet.applyWidth(
                { marginBottom: 20 },
                dimensions.width
              )}
            >
              {/* Item */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    { alignItems: 'center', flexDirection: 'row' },
                    dimensions.width
                  )}
                >
                  {/* Name */}
                  <Text
                    accessible={true}
                    selectable={false}
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.text.strong,
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: [
                          { minWidth: Breakpoints.Mobile, value: 10 },
                          { minWidth: Breakpoints.Tablet, value: 15 },
                          { minWidth: Breakpoints.Desktop, value: 25 },
                        ],
                        marginLeft: 20,
                      },
                      dimensions.width
                    )}
                  >
                    {'My History\n'}
                  </Text>
                </View>
              </View>
            </Touchable>
            {/* Wallet */}
            <Touchable
              style={StyleSheet.applyWidth(
                { marginBottom: 20 },
                dimensions.width
              )}
            >
              {/* Item */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    { alignItems: 'center', flexDirection: 'row' },
                    dimensions.width
                  )}
                >
                  {/* Name */}
                  <Text
                    accessible={true}
                    selectable={false}
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.text.strong,
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: [
                          { minWidth: Breakpoints.Mobile, value: 10 },
                          { minWidth: Breakpoints.Tablet, value: 15 },
                          { minWidth: Breakpoints.Desktop, value: 25 },
                        ],
                        marginLeft: 20,
                      },
                      dimensions.width
                    )}
                  >
                    {'Wallet'}
                  </Text>
                </View>
              </View>
            </Touchable>
            {/* Logout */}
            <Touchable
              onPress={() => {
                try {
                  setLogout(true);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                { marginBottom: 20 },
                dimensions.width
              )}
            >
              {/* Item */}
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    { alignItems: 'center', flexDirection: 'row' },
                    dimensions.width
                  )}
                >
                  {/* Name */}
                  <Text
                    accessible={true}
                    selectable={false}
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.text.strong,
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: [
                          { minWidth: Breakpoints.Mobile, value: 10 },
                          { minWidth: Breakpoints.Tablet, value: 15 },
                          { minWidth: Breakpoints.Desktop, value: 25 },
                        ],
                        marginLeft: 20,
                        opacity: 0.6,
                      },
                      dimensions.width
                    )}
                  >
                    {'Logout'}
                  </Text>
                </View>
              </View>
            </Touchable>
          </View>
          {/* Logout Modal */}
          <>
            {!Logout ? null : (
              <Modal
                supportedOrientations={['portrait', 'landscape']}
                animationType={'slide'}
                transparent={true}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.text.strong,
                      bottom: 0,
                      flex: 1,
                      left: 0,
                      opacity: 0.3,
                      position: 'absolute',
                      right: 0,
                      top: 0,
                    },
                    dimensions.width
                  )}
                />
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: palettes.App['Custom #ffffff'],
                      borderTopLeftRadius: 24,
                      borderTopRightRadius: 24,
                      bottom: 0,
                      height: 254,
                      justifyContent: 'space-evenly',
                      left: 0,
                      overflow: 'hidden',
                      paddingBottom: 15,
                      paddingLeft: 20,
                      paddingRight: 20,
                      paddingTop: 15,
                      position: 'absolute',
                      right: 0,
                      width: '100%',
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    accessible={true}
                    selectable={false}
                    style={StyleSheet.applyWidth(
                      {
                        color: palettes.App['Custom Color_8'],
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 21,
                      },
                      dimensions.width
                    )}
                  >
                    {'Logout'}
                  </Text>
                  <Divider
                    color={theme.colors.border.brand}
                    style={StyleSheet.applyWidth(
                      { height: 2, width: '100%' },
                      dimensions.width
                    )}
                  />
                  <Text
                    accessible={true}
                    selectable={false}
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.text.strong,
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 18,
                      },
                      dimensions.width
                    )}
                  >
                    {'Are you sure you want to log out?'}
                  </Text>

                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '100%',
                      },
                      dimensions.width
                    )}
                  >
                    {/* Cancel */}
                    <Button
                      iconPosition={'left'}
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: palettes.App['Custom Color_18'],
                          borderRadius: 100,
                          color: palettes.App['Custom Color'],
                          fontFamily: 'Inter_600SemiBold',
                          fontSize: 16,
                          height: 58,
                          textAlign: 'center',
                          width: '47%',
                        },
                        dimensions.width
                      )}
                      title={'Cancel'}
                    />
                    {/* Yes, Logout */}
                    <Button
                      iconPosition={'left'}
                      onPress={() => {
                        try {
                          setGlobalVariableValue({
                            key: 'AUTH_HEADER',
                            value: false,
                          });
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: theme.colors.branding.primary,
                          borderRadius: 100,
                          fontFamily: 'Inter_600SemiBold',
                          fontSize: 16,
                          height: 58,
                          textAlign: 'center',
                          width: '47%',
                        },
                        dimensions.width
                      )}
                      title={'Yes, Logout'}
                    />
                  </View>
                </View>
              </Modal>
            )}
          </>
        </View>
      </Surface>
    </ScreenContainer>
  );
};

export default withTheme(Blank2Screen);
