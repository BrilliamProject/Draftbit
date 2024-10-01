import React from 'react';
import {
  Circle,
  CircleImage,
  Icon,
  ScreenContainer,
  SimpleStyleFlashList,
  SimpleStyleFlatList,
  Surface,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
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

const ProfScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [datePickerValue, setDatePickerValue] = React.useState([]);
  const [emailInput, setEmailInput] = React.useState('');
  const [hireme, setHireme] = React.useState(false);
  const [isavailabilityvisible, setIsavailabilityvisible] =
    React.useState(false);
  const [isgadgetvisible, setIsgadgetvisible] = React.useState(false);
  const [ismessagevisible, setIsmessagevisible] = React.useState(false);
  const [menuTab1, setMenuTab1] = React.useState(false);
  const [menuTab2, setMenuTab2] = React.useState(false);
  const [menuTab3, setMenuTab3] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState('');
  const [sliderValue, setSliderValue] = React.useState(0);
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [usernameFollowed, setUsernameFollowed] = React.useState(false);

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      {/* View 3 */}
      <View>
        {/* Header Frame */}
        <View
          style={StyleSheet.applyWidth(
            {
              width: [
                { minWidth: Breakpoints.Tablet, value: '78%' },
                { minWidth: Breakpoints.Laptop, value: '100%' },
              ],
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
                marginLeft: '5%',
                marginRight: '5%',
                marginTop: '5%',
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
              <Touchable
                onPress={() => {
                  try {
                    if (navigation.canGoBack()) {
                      navigation.popToTop();
                    }
                    navigation.replace('ClientToProfessionalPageOrg2Screen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <Icon
                  size={24}
                  color={palettes.App.ShopAppBlue}
                  name={'AntDesign/arrowleft'}
                />
              </Touchable>
            </View>
            {/* Flex Touchable */}
            <View
              style={StyleSheet.applyWidth(
                {
                  justifyContent: 'center',
                  left: [
                    { minWidth: Breakpoints.Mobile, value: '50%' },
                    { minWidth: Breakpoints.Tablet, value: '70%' },
                  ],
                },
                dimensions.width
              )}
            >
              {/* Edit */}
              <Touchable
                onPress={() => {
                  try {
                    setHireme(true);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { marginLeft: 10 },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderBottomWidth: 2,
                      borderColor: palettes.App.ShopAppBlue,
                      borderLeftWidth: 2,
                      borderRadius: 100,
                      borderRightWidth: 2,
                      borderTopWidth: 2,
                      flexDirection: 'row',
                      height: 38,
                      justifyContent: 'center',
                      width: 115,
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    accessible={true}
                    selectable={false}
                    style={StyleSheet.applyWidth(
                      {
                        color: palettes.App.ShopAppBlue,
                        fontFamily: 'Inter_500Medium',
                        fontSize: 15,
                        marginLeft: 5,
                        textAlign: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    {'Edit \n\n'}
                  </Text>
                </View>
              </Touchable>
            </View>
          </View>
        </View>
        {/* Profile */}
        <View style={StyleSheet.applyWidth({ flex: 17 }, dimensions.width)}>
          <SupabaseApi.FetchFindprofessionalbynameGET
            name={Constants['findProfessional']}
          >
            {({ loading, error, data, refetchFindprofessionalbyname }) => {
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
                  listKey={'br0fG8Cu'}
                  numColumns={1}
                  onEndReachedThreshold={0.5}
                  renderItem={({ item, index }) => {
                    const listData = item;
                    return (
                      <>
                        {/* ProfilInfo */}
                        <View>
                          <View>
                            {/* Profile Image Frame */}
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  alignItems: 'center',
                                  paddingBottom: 12,
                                  paddingTop: 12,
                                },
                                dimensions.width
                              )}
                            >
                              {/* Name */}
                              <View>
                                <CircleImage
                                  size={84}
                                  source={
                                    Images.CharlieGreen3JmfENcL24MUnsplash
                                  }
                                />
                                <Text
                                  accessible={true}
                                  selectable={false}
                                  {...GlobalStyles.TextStyles(theme)['Text 2']
                                    .props}
                                  style={StyleSheet.applyWidth(
                                    GlobalStyles.TextStyles(theme)['Text 2']
                                      .style,
                                    dimensions.width
                                  )}
                                >
                                  {listData?.firstname} {listData?.surname}
                                </Text>
                              </View>
                            </View>
                            {/* Location */}
                            <View
                              style={StyleSheet.applyWidth(
                                { flexDirection: 'row', marginLeft: '10%' },
                                dimensions.width
                              )}
                            >
                              <Icon
                                size={24}
                                color={palettes.App.Peoplebit_Dark_Blue}
                                name={'EvilIcons/location'}
                              />
                              <Text
                                accessible={true}
                                selectable={false}
                                {...GlobalStyles.TextStyles(theme)['Text 2']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text 2']
                                      .style,
                                    { color: palettes.App.ShopAppBlue }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {listData?.country}
                              </Text>
                            </View>
                            {/* Bio */}
                            <View
                              style={StyleSheet.applyWidth(
                                { flexDirection: 'row' },
                                dimensions.width
                              )}
                            >
                              {/* View 2 */}
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    flexDirection: 'row',
                                    marginLeft: '10%',
                                    width: '10%',
                                  },
                                  dimensions.width
                                )}
                              >
                                <Icon
                                  size={24}
                                  color={palettes.App.Peoplebit_Dark_Blue}
                                  name={'AntDesign/profile'}
                                />
                              </View>

                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    marginLeft: '10%',
                                    marginRight: '10%',
                                    maxWidth: '80%',
                                    right: '15%',
                                  },
                                  dimensions.width
                                )}
                              >
                                {/* Bio */}
                                <Text
                                  accessible={true}
                                  selectable={false}
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: palettes.App.ShopAppBlue,
                                      fontFamily: 'OpenSans_500Medium',
                                      fontSize: 12,
                                      paddingBottom: 12,
                                      paddingTop: 12,
                                      textAlign: 'center',
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {listData?.Biography}
                                </Text>
                              </View>
                            </View>
                          </View>
                          {/* Account Details Frame */}
                          <View
                            style={StyleSheet.applyWidth(
                              { flexDirection: 'row' },
                              dimensions.width
                            )}
                          >
                            {/* Flex Touchable */}
                            <View
                              style={StyleSheet.applyWidth(
                                { flexGrow: 1, flexShrink: 0 },
                                dimensions.width
                              )}
                            >
                              <Touchable
                                style={StyleSheet.applyWidth(
                                  { borderColor: palettes.App.ShopAppBlue },
                                  dimensions.width
                                )}
                              >
                                {/* Data Frame */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      alignItems: 'center',
                                      flexGrow: 1,
                                      flexShrink: 0,
                                      paddingBottom: 12,
                                      paddingTop: 12,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  <Icon
                                    size={24}
                                    color={palettes.App.Peoplebit_Dark_Blue}
                                    name={'MaterialCommunityIcons/camera-timer'}
                                  />
                                  {/* Open Sans */}
                                  <Text
                                    accessible={true}
                                    selectable={false}
                                    selectionColor={palettes.App.ShopAppBlue}
                                    style={StyleSheet.applyWidth(
                                      {
                                        color: palettes.App.ShopAppBlue,
                                        fontFamily: 'OpenSans_600SemiBold',
                                        fontSize: 15,
                                        lineHeight: 21,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {'Experience\n'}
                                  </Text>
                                  <TextInput
                                    autoCapitalize={'none'}
                                    autoCorrect={true}
                                    changeTextDelay={500}
                                    onChangeText={newTextInputValue => {
                                      const textInputValue = newTextInputValue;
                                      try {
                                        setTextInputValue(textInputValue);
                                      } catch (err) {
                                        console.error(err);
                                      }
                                    }}
                                    placeholder={'Enter a value...'}
                                    webShowOutline={true}
                                    {...GlobalStyles.TextInputStyles(theme)[
                                      'Text Input'
                                    ].props}
                                    style={StyleSheet.applyWidth(
                                      GlobalStyles.TextInputStyles(theme)[
                                        'Text Input'
                                      ].style,
                                      dimensions.width
                                    )}
                                    value={textInputValue}
                                  />
                                </View>
                              </Touchable>
                            </View>
                            {/* Flex Touchable */}
                            <View
                              style={StyleSheet.applyWidth(
                                { flexGrow: 1, flexShrink: 0 },
                                dimensions.width
                              )}
                            >
                              <Touchable>
                                {/* Middle Data Frame */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      alignItems: 'center',
                                      borderColor:
                                        palettes.App.Internal_Egg_White,
                                      borderLeftWidth: 1,
                                      borderRightWidth: 1,
                                      flexGrow: 1,
                                      flexShrink: 0,
                                      paddingBottom: 12,
                                      paddingTop: 12,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  <Icon
                                    size={24}
                                    color={palettes.App.Peoplebit_Dark_Blue}
                                    name={'Foundation/price-tag'}
                                  />
                                  {/* Open Sans */}
                                  <Text
                                    accessible={true}
                                    selectable={false}
                                    style={StyleSheet.applyWidth(
                                      {
                                        color: palettes.App.ShopAppBlue,
                                        fontFamily: 'OpenSans_600SemiBold',
                                        fontSize: 15,
                                        lineHeight: 21,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {'Price\n'}
                                  </Text>
                                  <TextInput
                                    autoCapitalize={'none'}
                                    autoCorrect={true}
                                    changeTextDelay={500}
                                    onChangeText={newTextInputValue => {
                                      const textInputValue = newTextInputValue;
                                      try {
                                        setTextInputValue(textInputValue);
                                      } catch (err) {
                                        console.error(err);
                                      }
                                    }}
                                    placeholder={'Enter a value...'}
                                    webShowOutline={true}
                                    {...GlobalStyles.TextInputStyles(theme)[
                                      'Text Input'
                                    ].props}
                                    style={StyleSheet.applyWidth(
                                      GlobalStyles.TextInputStyles(theme)[
                                        'Text Input'
                                      ].style,
                                      dimensions.width
                                    )}
                                    value={textInputValue}
                                  />
                                </View>
                              </Touchable>
                            </View>
                            {/* Flex Touchable 2 */}
                            <View
                              style={StyleSheet.applyWidth(
                                { flexGrow: 1, flexShrink: 0 },
                                dimensions.width
                              )}
                            >
                              <Touchable>
                                {/* Middle Data Frame */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      alignItems: 'center',
                                      borderColor:
                                        palettes.App.Internal_Egg_White,
                                      borderLeftWidth: 1,
                                      borderRightWidth: 1,
                                      flexGrow: 1,
                                      flexShrink: 0,
                                      paddingBottom: 12,
                                      paddingTop: 12,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  <Icon
                                    size={24}
                                    color={palettes.App.Peoplebit_Dark_Blue}
                                    name={'Ionicons/language-outline'}
                                  />
                                  {/* Open Sans */}
                                  <Text
                                    accessible={true}
                                    selectable={false}
                                    style={StyleSheet.applyWidth(
                                      {
                                        color: palettes.App.ShopAppBlue,
                                        fontFamily: 'OpenSans_600SemiBold',
                                        fontSize: 15,
                                        lineHeight: 21,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {'Language'}
                                  </Text>
                                  <TextInput
                                    autoCapitalize={'none'}
                                    autoCorrect={true}
                                    changeTextDelay={500}
                                    onChangeText={newTextInputValue => {
                                      const textInputValue = newTextInputValue;
                                      try {
                                        setTextInputValue(textInputValue);
                                      } catch (err) {
                                        console.error(err);
                                      }
                                    }}
                                    placeholder={'Enter a value...'}
                                    webShowOutline={true}
                                    {...GlobalStyles.TextInputStyles(theme)[
                                      'Text Input'
                                    ].props}
                                    style={StyleSheet.applyWidth(
                                      GlobalStyles.TextInputStyles(theme)[
                                        'Text Input'
                                      ].style,
                                      dimensions.width
                                    )}
                                    value={textInputValue}
                                  />
                                </View>
                              </Touchable>
                            </View>
                            {/* Flex Touchable */}
                            <View
                              style={StyleSheet.applyWidth(
                                { flexGrow: 1, flexShrink: 0 },
                                dimensions.width
                              )}
                            >
                              <Touchable
                                onPress={() => {
                                  try {
                                    setMenuTab1(false);
                                    setMenuTab2(true);
                                    setMenuTab3(false);
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                              >
                                {/* Data Frame */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      alignItems: 'center',
                                      flexGrow: 1,
                                      flexShrink: 0,
                                      paddingBottom: 12,
                                      paddingTop: 12,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  <Icon
                                    size={24}
                                    color={palettes.App.Peoplebit_Dark_Blue}
                                    name={'MaterialIcons/work-outline'}
                                  />
                                  {/* Open Sans */}
                                  <Text
                                    accessible={true}
                                    selectable={false}
                                    style={StyleSheet.applyWidth(
                                      {
                                        color: palettes.App.ShopAppBlue,
                                        fontFamily: 'OpenSans_600SemiBold',
                                        fontSize: 15,
                                        lineHeight: 21,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {'Profession'}
                                  </Text>
                                  <TextInput
                                    autoCapitalize={'none'}
                                    autoCorrect={true}
                                    changeTextDelay={500}
                                    onChangeText={newTextInputValue => {
                                      const textInputValue = newTextInputValue;
                                      try {
                                        setTextInputValue(textInputValue);
                                      } catch (err) {
                                        console.error(err);
                                      }
                                    }}
                                    placeholder={'Enter a value...'}
                                    webShowOutline={true}
                                    {...GlobalStyles.TextInputStyles(theme)[
                                      'Text Input'
                                    ].props}
                                    style={StyleSheet.applyWidth(
                                      GlobalStyles.TextInputStyles(theme)[
                                        'Text Input'
                                      ].style,
                                      dimensions.width
                                    )}
                                    value={textInputValue}
                                  />
                                </View>
                              </Touchable>
                            </View>
                          </View>
                          {/* Account Details Frame 2 */}
                          <View
                            style={StyleSheet.applyWidth(
                              { flexDirection: 'column' },
                              dimensions.width
                            )}
                          >
                            {/* Flex Touchable */}
                            <View
                              style={StyleSheet.applyWidth(
                                { flexGrow: 1, flexShrink: 0 },
                                dimensions.width
                              )}
                            >
                              <Touchable
                                style={StyleSheet.applyWidth(
                                  { borderColor: palettes.App.ShopAppBlue },
                                  dimensions.width
                                )}
                              >
                                {/* Data Frame */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      alignItems: 'center',
                                      flexGrow: 1,
                                      flexShrink: 0,
                                      paddingBottom: 12,
                                      paddingTop: 12,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  <Icon
                                    size={24}
                                    color={palettes.App.Peoplebit_Dark_Blue}
                                    name={'MaterialCommunityIcons/camera-timer'}
                                  />
                                  {/* Open Sans */}
                                  <Text
                                    accessible={true}
                                    selectable={false}
                                    selectionColor={palettes.App.ShopAppBlue}
                                    style={StyleSheet.applyWidth(
                                      {
                                        color: palettes.App.ShopAppBlue,
                                        fontFamily: 'OpenSans_600SemiBold',
                                        fontSize: 15,
                                        lineHeight: 21,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {'Experience\n'}
                                  </Text>
                                  <TextInput
                                    autoCapitalize={'none'}
                                    autoCorrect={true}
                                    changeTextDelay={500}
                                    onChangeText={newTextInputValue => {
                                      const textInputValue = newTextInputValue;
                                      try {
                                        setTextInputValue(textInputValue);
                                      } catch (err) {
                                        console.error(err);
                                      }
                                    }}
                                    placeholder={'Enter a value...'}
                                    webShowOutline={true}
                                    {...GlobalStyles.TextInputStyles(theme)[
                                      'Text Input'
                                    ].props}
                                    style={StyleSheet.applyWidth(
                                      GlobalStyles.TextInputStyles(theme)[
                                        'Text Input'
                                      ].style,
                                      dimensions.width
                                    )}
                                    value={textInputValue}
                                  />
                                </View>
                              </Touchable>
                            </View>
                            {/* Flex Touchable */}
                            <View
                              style={StyleSheet.applyWidth(
                                { flexGrow: 1, flexShrink: 0 },
                                dimensions.width
                              )}
                            >
                              <Touchable>
                                {/* Middle Data Frame */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      alignItems: 'center',
                                      borderColor:
                                        palettes.App.Internal_Egg_White,
                                      borderLeftWidth: 1,
                                      borderRightWidth: 1,
                                      flexGrow: 1,
                                      flexShrink: 0,
                                      paddingBottom: 12,
                                      paddingTop: 12,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  <Icon
                                    size={24}
                                    color={palettes.App.Peoplebit_Dark_Blue}
                                    name={'Foundation/price-tag'}
                                  />
                                  {/* Open Sans */}
                                  <Text
                                    accessible={true}
                                    selectable={false}
                                    style={StyleSheet.applyWidth(
                                      {
                                        color: palettes.App.ShopAppBlue,
                                        fontFamily: 'OpenSans_600SemiBold',
                                        fontSize: 15,
                                        lineHeight: 21,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {'Price\n'}
                                  </Text>
                                  <TextInput
                                    autoCapitalize={'none'}
                                    autoCorrect={true}
                                    changeTextDelay={500}
                                    onChangeText={newTextInputValue => {
                                      const textInputValue = newTextInputValue;
                                      try {
                                        setTextInputValue(textInputValue);
                                      } catch (err) {
                                        console.error(err);
                                      }
                                    }}
                                    placeholder={'Enter a value...'}
                                    webShowOutline={true}
                                    {...GlobalStyles.TextInputStyles(theme)[
                                      'Text Input'
                                    ].props}
                                    style={StyleSheet.applyWidth(
                                      GlobalStyles.TextInputStyles(theme)[
                                        'Text Input'
                                      ].style,
                                      dimensions.width
                                    )}
                                    value={textInputValue}
                                  />
                                </View>
                              </Touchable>
                            </View>
                            {/* Flex Touchable 2 */}
                            <View
                              style={StyleSheet.applyWidth(
                                { flexGrow: 1, flexShrink: 0 },
                                dimensions.width
                              )}
                            >
                              <Touchable>
                                {/* Middle Data Frame */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      alignItems: 'center',
                                      borderColor:
                                        palettes.App.Internal_Egg_White,
                                      borderLeftWidth: 1,
                                      borderRightWidth: 1,
                                      flexGrow: 1,
                                      flexShrink: 0,
                                      paddingBottom: 12,
                                      paddingTop: 12,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  <Icon
                                    size={24}
                                    color={palettes.App.Peoplebit_Dark_Blue}
                                    name={'Ionicons/language-outline'}
                                  />
                                  {/* Open Sans */}
                                  <Text
                                    accessible={true}
                                    selectable={false}
                                    style={StyleSheet.applyWidth(
                                      {
                                        color: palettes.App.ShopAppBlue,
                                        fontFamily: 'OpenSans_600SemiBold',
                                        fontSize: 15,
                                        lineHeight: 21,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {'Language'}
                                  </Text>
                                  <TextInput
                                    autoCapitalize={'none'}
                                    autoCorrect={true}
                                    changeTextDelay={500}
                                    onChangeText={newTextInputValue => {
                                      const textInputValue = newTextInputValue;
                                      try {
                                        setTextInputValue(textInputValue);
                                      } catch (err) {
                                        console.error(err);
                                      }
                                    }}
                                    placeholder={'Enter a value...'}
                                    webShowOutline={true}
                                    {...GlobalStyles.TextInputStyles(theme)[
                                      'Text Input'
                                    ].props}
                                    style={StyleSheet.applyWidth(
                                      GlobalStyles.TextInputStyles(theme)[
                                        'Text Input'
                                      ].style,
                                      dimensions.width
                                    )}
                                    value={textInputValue}
                                  />
                                </View>
                              </Touchable>
                            </View>
                            {/* Flex Touchable */}
                            <View
                              style={StyleSheet.applyWidth(
                                { flexGrow: 1, flexShrink: 0 },
                                dimensions.width
                              )}
                            >
                              <Touchable
                                onPress={() => {
                                  try {
                                    setMenuTab1(false);
                                    setMenuTab2(true);
                                    setMenuTab3(false);
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                              >
                                {/* Data Frame */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      alignItems: 'center',
                                      flexGrow: 1,
                                      flexShrink: 0,
                                      paddingBottom: 12,
                                      paddingTop: 12,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  <Icon
                                    size={24}
                                    color={palettes.App.Peoplebit_Dark_Blue}
                                    name={'MaterialIcons/work-outline'}
                                  />
                                  {/* Open Sans */}
                                  <Text
                                    accessible={true}
                                    selectable={false}
                                    style={StyleSheet.applyWidth(
                                      {
                                        color: palettes.App.ShopAppBlue,
                                        fontFamily: 'OpenSans_600SemiBold',
                                        fontSize: 15,
                                        lineHeight: 21,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {'Profession'}
                                  </Text>
                                  <TextInput
                                    autoCapitalize={'none'}
                                    autoCorrect={true}
                                    changeTextDelay={500}
                                    onChangeText={newTextInputValue => {
                                      const textInputValue = newTextInputValue;
                                      try {
                                        setTextInputValue(textInputValue);
                                      } catch (err) {
                                        console.error(err);
                                      }
                                    }}
                                    placeholder={'Enter a value...'}
                                    webShowOutline={true}
                                    {...GlobalStyles.TextInputStyles(theme)[
                                      'Text Input'
                                    ].props}
                                    style={StyleSheet.applyWidth(
                                      GlobalStyles.TextInputStyles(theme)[
                                        'Text Input'
                                      ].style,
                                      dimensions.width
                                    )}
                                    value={textInputValue}
                                  />
                                </View>
                              </Touchable>
                            </View>
                          </View>
                        </View>
                      </>
                    );
                  }}
                  showsHorizontalScrollIndicator={true}
                  showsVerticalScrollIndicator={true}
                  nestedScrollEnabled={true}
                />
              );
            }}
          </SupabaseApi.FetchFindprofessionalbynameGET>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(ProfScreen);
