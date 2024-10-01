import React from 'react';
import {
  Button,
  Checkbox,
  Circle,
  CircleImage,
  DatePicker,
  Icon,
  Link,
  ScreenContainer,
  SimpleStyleFlatList,
  SimpleStyleKeyboardAwareScrollView,
  SimpleStyleScrollView,
  Spacer,
  Surface,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Modal,
  Text,
  View,
} from 'react-native';
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

const ClientToProfessionalPageOrg2Screen = props => {
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
  const [isvideovisible, setIsvideovisible] = React.useState(false);
  const [menuTab1, setMenuTab1] = React.useState(true);
  const [menuTab2, setMenuTab2] = React.useState(false);
  const [menuTab3, setMenuTab3] = React.useState(false);
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [usernameFollowed, setUsernameFollowed] = React.useState(false);

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
      style={StyleSheet.applyWidth(
        {
          marginLeft: { minWidth: Breakpoints.Laptop, value: '5%' },
          marginRight: { minWidth: Breakpoints.Laptop, value: '5%' },
        },
        dimensions.width
      )}
    >
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
              height: { minWidth: Breakpoints.Desktop, value: '70%' },
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
                  navigation.replace('ClientHomePageeScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Icon
                color={palettes.App.ShopAppBlue}
                name={'AntDesign/arrowleft'}
                size={44}
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
                  { minWidth: Breakpoints.Tablet, value: '90%' },
                  { minWidth: Breakpoints.Desktop, value: '60%' },
                  { minWidth: Breakpoints.Laptop, value: '70%' },
                ],
                width: { minWidth: Breakpoints.Desktop, value: '20%' },
              },
              dimensions.width
            )}
          >
            {/* Hire */}
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
                    height: [
                      { minWidth: Breakpoints.Mobile, value: 38 },
                      { minWidth: Breakpoints.Desktop, value: 68 },
                    ],
                    justifyContent: 'center',
                    width: [
                      { minWidth: Breakpoints.Mobile, value: 115 },
                      { minWidth: Breakpoints.Desktop, value: '115%' },
                    ],
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
                      fontSize: [
                        { minWidth: Breakpoints.Mobile, value: 15 },
                        { minWidth: Breakpoints.Tablet, value: 25 },
                        { minWidth: Breakpoints.Desktop, value: 40 },
                      ],
                      marginLeft: 5,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                >
                  {'Hire Me'}
                </Text>
              </View>

              <Modal
                animationType={'none'}
                supportedOrientations={['portrait', 'landscape']}
                transparent={false}
                visible={hireme}
              >
                {/* Header View Frame */}
                <View
                  style={StyleSheet.applyWidth(
                    { flexGrow: 0, flexShrink: 0 },
                    dimensions.width
                  )}
                >
                  {/* Navigation Bar Component */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        paddingBottom: 24,
                        paddingLeft: 18,
                        paddingRight: 18,
                        paddingTop: 24,
                      },
                      dimensions.width
                    )}
                  >
                    {/* Left Side Frame */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignSelf: 'stretch',
                          flexGrow: 0,
                          flexShrink: 0,
                          minWidth: '33%',
                        },
                        dimensions.width
                      )}
                    >
                      {/* Left Icon Touchable */}
                      <Touchable
                        onPress={() => {
                          try {
                            if (navigation.canGoBack()) {
                              navigation.popToTop();
                            }
                            navigation.replace(
                              'ClientToProfessionalPageOrg2Screen'
                            );
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                      >
                        {/* Left Icon */}
                        <Icon
                          color={palettes.App.ShopAppBlue}
                          name={'AntDesign/left'}
                          size={24}
                        />
                      </Touchable>
                    </View>
                    {/* Middle Frame */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignSelf: 'stretch',
                          flexGrow: 0,
                          flexShrink: 0,
                          minWidth: '33%',
                        },
                        dimensions.width
                      )}
                    >
                      {/* Navigation Bar Text */}
                      <Text
                        accessible={true}
                        selectable={false}
                        style={StyleSheet.applyWidth(
                          {
                            color: palettes.App.ShopAppBlue,
                            flexGrow: 1,
                            flexShrink: 0,
                            fontFamily: 'ADLaMDisplay_400Regular',
                            fontSize: 14,
                            textAlign: 'center',
                          },
                          dimensions.width
                        )}
                      >
                        {'Checkout'}
                      </Text>
                    </View>
                    {/* Right Side Frame */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignSelf: 'stretch',
                          flexDirection: 'row',
                          flexGrow: 0,
                          flexShrink: 0,
                          justifyContent: 'flex-end',
                          minWidth: '33%',
                          paddingRight: 12,
                        },
                        dimensions.width
                      )}
                    >
                      {/* Right Icon Touchable */}
                      <Touchable>
                        {/* Right Icon Frame */}
                        <View>
                          {/* Absolute Frame */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                position: 'absolute',
                                right: -12,
                                top: -12,
                                zIndex: 121,
                              },
                              dimensions.width
                            )}
                          >
                            <Circle
                              bgColor={'theme.colors.custom_rgb26_146_207'}
                              size={19}
                            >
                              <Text
                                accessible={true}
                                selectable={false}
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.background.brand,
                                    fontFamily: 'Montserrat_400Regular',
                                    fontSize: 8,
                                  },
                                  dimensions.width
                                )}
                              >
                                {'1'}
                              </Text>
                            </Circle>
                          </View>
                          {/* Right Icon 1 */}
                          <Icon
                            color={'theme.colors.custom_rgb189_198_212'}
                            name={'AntDesign/gift'}
                            size={18}
                            style={StyleSheet.applyWidth(
                              { zIndex: 10 },
                              dimensions.width
                            )}
                          />
                        </View>
                      </Touchable>
                    </View>
                  </View>
                </View>
                {/* Content View Frame */}
                <View
                  style={StyleSheet.applyWidth(
                    { flexGrow: 1, flexShrink: 0 },
                    dimensions.width
                  )}
                >
                  {/* Shipping Information Frame */}
                  <View>
                    {/* Component Title Small */}
                    <Text
                      accessible={true}
                      selectable={false}
                      style={StyleSheet.applyWidth(
                        {
                          color: palettes.App.ShopAppBlue,
                          fontFamily: 'Cantarell_400Regular',
                          fontSize: 10,
                          marginBottom: 12,
                          marginLeft: 12,
                          textTransform: 'uppercase',
                        },
                        dimensions.width
                      )}
                    >
                      {'Information'}
                    </Text>
                    {/* Input Frame Top Line */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          flexDirection: 'row',
                          flexGrow: 0,
                          flexShrink: 0,
                          marginBottom: 9,
                        },
                        dimensions.width
                      )}
                    >
                      {/* Text Input Frame */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            flexGrow: 1,
                            flexShrink: 0,
                            height: 36,
                            justifyContent: 'center',
                            marginLeft: 12,
                            marginRight: 4,
                            maxHeight: 36,
                            minHeight: 36,
                          },
                          dimensions.width
                        )}
                      >
                        {/* Text Input Component */}
                        <TextInput
                          autoCapitalize={'none'}
                          autoCorrect={true}
                          changeTextDelay={500}
                          webShowOutline={true}
                          placeholder={'First Name'}
                          placeholderTextColor={
                            'theme.colors.custom_rgb108_118_136'
                          }
                          style={StyleSheet.applyWidth(
                            {
                              borderBottomWidth: 1,
                              borderColor: palettes.App.ShopAppBlue,
                              borderLeftWidth: 1,
                              borderRadius: 64,
                              borderRightWidth: 1,
                              borderTopWidth: 1,
                              color: 'theme.colors.titleBlueBlack',
                              fontFamily: 'Cantarell_400Regular',
                              fontSize: 11,
                              height: '100%',
                              paddingLeft: 8,
                              paddingRight: 8,
                            },
                            dimensions.width
                          )}
                        />
                      </View>
                      {/* Text Input Frame */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            flexGrow: 1,
                            flexShrink: 0,
                            height: 36,
                            justifyContent: 'center',
                            marginLeft: 4,
                            marginRight: 12,
                            maxHeight: 36,
                            minHeight: 36,
                          },
                          dimensions.width
                        )}
                      >
                        {/* Text Input Component */}
                        <TextInput
                          autoCapitalize={'none'}
                          autoCorrect={true}
                          changeTextDelay={500}
                          webShowOutline={true}
                          placeholder={'Last Name'}
                          placeholderTextColor={
                            'theme.colors.custom_rgb108_118_136'
                          }
                          style={StyleSheet.applyWidth(
                            {
                              borderBottomWidth: 1,
                              borderColor: palettes.App.ShopAppBlue,
                              borderLeftWidth: 1,
                              borderRadius: 64,
                              borderRightWidth: 1,
                              borderTopWidth: 1,
                              color: 'theme.colors.titleBlueBlack',
                              fontFamily: 'Cantarell_400Regular',
                              fontSize: 11,
                              height: '100%',
                              paddingLeft: 8,
                              paddingRight: 8,
                            },
                            dimensions.width
                          )}
                        />
                      </View>
                    </View>
                    {/* Input Frame Second Line */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          flexDirection: 'row',
                          flexGrow: 0,
                          flexShrink: 0,
                          marginBottom: 9,
                        },
                        dimensions.width
                      )}
                    >
                      {/* Text Input Frame */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            flexGrow: 1,
                            flexShrink: 0,
                            height: 36,
                            justifyContent: 'center',
                            marginLeft: 12,
                            marginRight: 12,
                            maxHeight: 36,
                            minHeight: 36,
                          },
                          dimensions.width
                        )}
                      >
                        {/* Text Input Component */}
                        <TextInput
                          autoCapitalize={'none'}
                          autoCorrect={true}
                          changeTextDelay={500}
                          webShowOutline={true}
                          placeholder={'Address'}
                          placeholderTextColor={
                            'theme.colors.custom_rgb108_118_136'
                          }
                          style={StyleSheet.applyWidth(
                            {
                              borderBottomWidth: 1,
                              borderColor: palettes.App.ShopAppBlue,
                              borderLeftWidth: 1,
                              borderRadius: 64,
                              borderRightWidth: 1,
                              borderTopWidth: 1,
                              color: 'theme.colors.titleBlueBlack',
                              fontFamily: 'Cantarell_400Regular',
                              fontSize: 11,
                              height: '100%',
                              paddingBottom: 0,
                              paddingLeft: 8,
                              paddingRight: 8,
                              paddingTop: 0,
                            },
                            dimensions.width
                          )}
                        />
                      </View>
                    </View>
                    {/* Input Frame Third Line */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          flexDirection: 'row',
                          flexGrow: 0,
                          flexShrink: 0,
                          marginBottom: 9,
                        },
                        dimensions.width
                      )}
                    >
                      {/* Text Input Frame */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            flexGrow: 1,
                            flexShrink: 0,
                            height: 36,
                            justifyContent: 'center',
                            marginLeft: 12,
                            marginRight: 4,
                            maxHeight: 36,
                            minHeight: 36,
                          },
                          dimensions.width
                        )}
                      >
                        {/* Text Input Component */}
                        <TextInput
                          autoCapitalize={'none'}
                          autoCorrect={true}
                          changeTextDelay={500}
                          webShowOutline={true}
                          placeholder={'City'}
                          placeholderTextColor={
                            'theme.colors.custom_rgb108_118_136'
                          }
                          style={StyleSheet.applyWidth(
                            {
                              borderBottomWidth: 1,
                              borderColor: palettes.App.ShopAppBlue,
                              borderLeftWidth: 1,
                              borderRadius: 64,
                              borderRightWidth: 1,
                              borderTopWidth: 1,
                              color: 'theme.colors.titleBlueBlack',
                              fontFamily: 'Cantarell_400Regular',
                              fontSize: 11,
                              height: '100%',
                              paddingLeft: 8,
                              paddingRight: 8,
                            },
                            dimensions.width
                          )}
                        />
                      </View>
                      {/* Text Input Frame */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            flexGrow: 1,
                            flexShrink: 0,
                            height: 36,
                            justifyContent: 'center',
                            marginLeft: 4,
                            marginRight: 12,
                            maxHeight: 36,
                            minHeight: 36,
                          },
                          dimensions.width
                        )}
                      >
                        {/* Text Input Component */}
                        <TextInput
                          autoCapitalize={'none'}
                          autoCorrect={true}
                          changeTextDelay={500}
                          webShowOutline={true}
                          placeholder={'Zip Code'}
                          placeholderTextColor={
                            'theme.colors.custom_rgb108_118_136'
                          }
                          style={StyleSheet.applyWidth(
                            {
                              borderBottomWidth: 1,
                              borderColor: palettes.App.ShopAppBlue,
                              borderLeftWidth: 1,
                              borderRadius: 64,
                              borderRightWidth: 1,
                              borderTopWidth: 1,
                              color: 'theme.colors.titleBlueBlack',
                              fontFamily: 'Cantarell_400Regular',
                              fontSize: 11,
                              height: '100%',
                              paddingLeft: 8,
                              paddingRight: 8,
                            },
                            dimensions.width
                          )}
                        />
                      </View>
                    </View>
                    {/* Input Frame Fourth Line */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          flexDirection: 'row',
                          flexGrow: 0,
                          flexShrink: 0,
                          marginBottom: 9,
                        },
                        dimensions.width
                      )}
                    >
                      {/* Text Input Frame */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            flexGrow: 1,
                            flexShrink: 0,
                            height: 36,
                            justifyContent: 'center',
                            marginLeft: 12,
                            marginRight: 4,
                            maxHeight: 36,
                            minHeight: 36,
                          },
                          dimensions.width
                        )}
                      >
                        {/* Text Input Component */}
                        <TextInput
                          autoCapitalize={'none'}
                          autoCorrect={true}
                          changeTextDelay={500}
                          webShowOutline={true}
                          placeholder={'State'}
                          placeholderTextColor={
                            'theme.colors.custom_rgb108_118_136'
                          }
                          style={StyleSheet.applyWidth(
                            {
                              borderBottomWidth: 1,
                              borderColor: palettes.App.ShopAppBlue,
                              borderLeftWidth: 1,
                              borderRadius: 64,
                              borderRightWidth: 1,
                              borderTopWidth: 1,
                              color: 'theme.colors.titleBlueBlack',
                              fontFamily: 'Cantarell_400Regular',
                              fontSize: 11,
                              height: '100%',
                              paddingLeft: 8,
                              paddingRight: 8,
                            },
                            dimensions.width
                          )}
                        />
                      </View>
                      {/* Text Input Frame */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            flexGrow: 1,
                            flexShrink: 0,
                            height: 36,
                            justifyContent: 'center',
                            marginLeft: 4,
                            marginRight: 12,
                            maxHeight: 36,
                            minHeight: 36,
                          },
                          dimensions.width
                        )}
                      >
                        {/* Text Input Component */}
                        <TextInput
                          autoCapitalize={'none'}
                          autoCorrect={true}
                          changeTextDelay={500}
                          webShowOutline={true}
                          placeholder={'Country'}
                          placeholderTextColor={
                            'theme.colors.custom_rgb108_118_136'
                          }
                          style={StyleSheet.applyWidth(
                            {
                              borderBottomWidth: 1,
                              borderColor: palettes.App.ShopAppBlue,
                              borderLeftWidth: 1,
                              borderRadius: 64,
                              borderRightWidth: 1,
                              borderTopWidth: 1,
                              color: 'theme.colors.titleBlueBlack',
                              fontFamily: 'Cantarell_400Regular',
                              fontSize: 11,
                              height: '100%',
                              paddingLeft: 8,
                              paddingRight: 8,
                            },
                            dimensions.width
                          )}
                        />
                      </View>
                    </View>
                  </View>
                  {/* Payment Method Frame */}
                  <View>
                    {/* Component Title Small */}
                    <Text
                      accessible={true}
                      selectable={false}
                      style={StyleSheet.applyWidth(
                        {
                          color: 'theme.colors.custom_rgb149_158_172',
                          fontFamily: 'Cantarell_400Regular',
                          fontSize: 10,
                          marginBottom: 12,
                          marginLeft: 12,
                          marginTop: 15,
                          textTransform: 'uppercase',
                        },
                        dimensions.width
                      )}
                    >
                      {'Payment Method'}
                    </Text>
                    {/* Payment Details Method Frame */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          flexDirection: 'row',
                          gap: 15,
                          marginLeft: '12%',
                          marginRight: '12%',
                        },
                        dimensions.width
                      )}
                    >
                      {/* Flex Attribute Frame */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            borderBottomWidth: 1,
                            borderColor: palettes.App.ShopAppBlue,
                            borderLeftWidth: 1,
                            borderRadius: 10,
                            borderRightWidth: 1,
                            borderTopWidth: 1,
                            flexGrow: 0,
                            flexShrink: 0,
                            marginRight: 11,
                            minWidth: 80,
                            width: 80,
                          },
                          dimensions.width
                        )}
                      >
                        {/* Option 1 Title */}
                        <Text
                          accessible={true}
                          selectable={false}
                          style={StyleSheet.applyWidth(
                            {
                              color: palettes.App.ShopAppBlue,
                              fontFamily: 'Cantarell_400Regular',
                              paddingBottom: 9,
                            },
                            dimensions.width
                          )}
                        >
                          {'Bank'}
                        </Text>
                        <Icon
                          color={palettes.App.ShopAppBlue}
                          name={'FontAwesome/bank'}
                          size={44}
                        />
                      </View>

                      <Touchable>
                        {/* Flex Attribute Frame */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              borderBottomWidth: 1,
                              borderColor: palettes.App.ShopAppBlue,
                              borderLeftWidth: 1,
                              borderRadius: 10,
                              borderRightWidth: 1,
                              borderTopWidth: 1,
                              flexGrow: 0,
                              flexShrink: 0,
                              marginRight: 11,
                              minWidth: 80,
                              width: 80,
                            },
                            dimensions.width
                          )}
                        >
                          {/* Option 2 */}
                          <Text
                            accessible={true}
                            selectable={false}
                            style={StyleSheet.applyWidth(
                              {
                                color: palettes.App.ShopAppBlue,
                                fontFamily: 'Cantarell_400Regular',
                                paddingBottom: 9,
                              },
                              dimensions.width
                            )}
                          >
                            {'Card'}
                          </Text>
                          <Icon
                            color={palettes.App.ShopAppBlue}
                            name={'AntDesign/creditcard'}
                            size={44}
                          />
                        </View>
                      </Touchable>

                      <Touchable>
                        {/* Flex Attribute Frame */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              borderBottomWidth: 1,
                              borderColor: palettes.App.ShopAppBlue,
                              borderLeftWidth: 1,
                              borderRadius: 10,
                              borderRightWidth: 1,
                              borderTopWidth: 1,
                              flexGrow: 0,
                              flexShrink: 0,
                              marginRight: 11,
                              minWidth: 80,
                              width: 80,
                            },
                            dimensions.width
                          )}
                        >
                          {/* Option 2 */}
                          <Text
                            accessible={true}
                            selectable={false}
                            style={StyleSheet.applyWidth(
                              {
                                color: palettes.App.ShopAppBlue,
                                fontFamily: 'Cantarell_400Regular',
                                paddingBottom: 9,
                              },
                              dimensions.width
                            )}
                          >
                            {'Paypal'}
                          </Text>
                          <Icon
                            color={palettes.App.ShopAppBlue}
                            name={'Entypo/paypal'}
                            size={44}
                          />
                        </View>
                      </Touchable>
                    </View>
                  </View>
                </View>
                {/* Footer View Frame */}
                <View
                  style={StyleSheet.applyWidth(
                    { paddingBottom: 36, paddingLeft: 18, paddingRight: 18 },
                    dimensions.width
                  )}
                >
                  {/* Summary Checkout Frame */}
                  <View
                    style={StyleSheet.applyWidth(
                      { marginTop: 12 },
                      dimensions.width
                    )}
                  >
                    {/* Summary Line Item Frame */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginBottom: 18,
                        },
                        dimensions.width
                      )}
                    >
                      {/* Line Item Detail 1 */}
                      <Text
                        accessible={true}
                        selectable={false}
                        style={StyleSheet.applyWidth(
                          {
                            color: 'theme.colors.custom_rgb189_198_212',
                            fontFamily: 'Cantarell_400Regular',
                          },
                          dimensions.width
                        )}
                      >
                        {'Gadget cost'}
                      </Text>
                      {/* Line Item Detail 2 */}
                      <Text
                        accessible={true}
                        selectable={false}
                        style={StyleSheet.applyWidth(
                          {
                            color: 'theme.colors.primaryTitleUiBaeg',
                            fontFamily: 'Montserrat_600SemiBold',
                            fontSize: 10,
                          },
                          dimensions.width
                        )}
                      >
                        {'$26'}
                      </Text>
                    </View>
                  </View>
                  {/* Content Frame */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: theme.colors.background.brand,
                        flexGrow: 1,
                        flexShrink: 0,
                        justifyContent: 'flex-end',
                      },
                      dimensions.width
                    )}
                  >
                    {/* Total Price Frame */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          paddingTop: 6,
                        },
                        dimensions.width
                      )}
                    >
                      {/* Total Price Title */}
                      <Text
                        accessible={true}
                        selectable={false}
                        style={StyleSheet.applyWidth(
                          {
                            color: 'theme.colors.custom_rgb189_198_212',
                            fontFamily: 'Cantarell_400Regular',
                          },
                          dimensions.width
                        )}
                      >
                        {'Total Price'}
                      </Text>
                      {/* Total Price */}
                      <Text
                        accessible={true}
                        selectable={false}
                        style={StyleSheet.applyWidth(
                          {
                            color: 'theme.colors.primaryTitleUiBaeg',
                            fontFamily: 'Cantarell_700Bold',
                          },
                          dimensions.width
                        )}
                      >
                        {'$26'}
                      </Text>
                    </View>
                    {/* Flex Property Button Frame */}
                    <View
                      style={StyleSheet.applyWidth(
                        { flexGrow: 1, flexShrink: 0, marginTop: 18 },
                        dimensions.width
                      )}
                    >
                      {/* Fixed Button */}
                      <Button
                        iconPosition={'left'}
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: theme.colors.branding.primary,
                            borderRadius: 64,
                            color: palettes.Brand.Surface,
                            fontFamily: 'Cantarell_700Bold',
                            fontSize: 10,
                            textAlign: 'center',
                            textTransform: 'uppercase',
                          },
                          dimensions.width
                        )}
                        title={'Place Order'}
                      />
                    </View>
                  </View>
                </View>
              </Modal>
            </Touchable>
          </View>
        </View>
      </View>
      {/* Profile */}
      <View
        style={StyleSheet.applyWidth(
          {
            flex: 17,
            marginBottom: { minWidth: Breakpoints.Laptop, value: '10%' },
            paddingBottom: 5,
          },
          dimensions.width
        )}
      >
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
                listKey={'X1CFBfU8'}
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
                                size={200}
                                source={Images.CharlieGreen3JmfENcL24MUnsplash}
                              />
                              {/* Name */}
                              <Text
                                accessible={true}
                                selectable={false}
                                style={StyleSheet.applyWidth(
                                  {
                                    color: palettes.App.ShopAppBlue,
                                    fontFamily: 'OpenSans_700Bold',
                                    fontSize: [
                                      {
                                        minWidth: Breakpoints.Mobile,
                                        value: 18,
                                      },
                                      {
                                        minWidth: Breakpoints.Tablet,
                                        value: 28,
                                      },
                                      {
                                        minWidth: Breakpoints.Desktop,
                                        value: 38,
                                      },
                                    ],
                                    paddingBottom: 12,
                                    paddingTop: 12,
                                    textAlign: 'center',
                                  },
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
                              color={palettes.App.Peoplebit_Dark_Blue}
                              name={'EvilIcons/location'}
                              size={44}
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
                                  {
                                    color: palettes.App.ShopAppBlue,
                                    fontSize: [
                                      {
                                        minWidth: Breakpoints.Tablet,
                                        value: 24,
                                      },
                                      {
                                        minWidth: Breakpoints.Desktop,
                                        value: 34,
                                      },
                                    ],
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {listData?.country}
                            </Text>
                          </View>
                          <Spacer bottom={15} left={12} right={12} top={15} />
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
                                color={palettes.App.Peoplebit_Dark_Blue}
                                name={'AntDesign/profile'}
                                size={44}
                              />
                            </View>

                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  marginLeft: '10%',
                                  marginRight: '10%',
                                  maxWidth: [
                                    {
                                      minWidth: Breakpoints.Mobile,
                                      value: '80%',
                                    },
                                    {
                                      minWidth: Breakpoints.Laptop,
                                      value: '75%',
                                    },
                                  ],
                                  right: '10%',
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
                                    fontSize: [
                                      {
                                        minWidth: Breakpoints.Mobile,
                                        value: 12,
                                      },
                                      {
                                        minWidth: Breakpoints.Tablet,
                                        value: 22,
                                      },
                                      {
                                        minWidth: Breakpoints.Desktop,
                                        value: 32,
                                      },
                                    ],
                                    paddingBottom: 12,
                                    paddingLeft: 5,
                                    paddingRight: 5,
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
                        {/* Spacer 2 */}
                        <Spacer bottom={15} left={12} right={12} top={15} />
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
                                  color={palettes.App.Peoplebit_Dark_Blue}
                                  name={'MaterialCommunityIcons/camera-timer'}
                                  size={40}
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
                                      fontSize: [
                                        {
                                          minWidth: Breakpoints.Mobile,
                                          value: 15,
                                        },
                                        {
                                          minWidth: Breakpoints.Tablet,
                                          value: 20,
                                        },
                                        {
                                          minWidth: Breakpoints.Desktop,
                                          value: 30,
                                        },
                                      ],
                                      lineHeight: 21,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'Experience\n'}
                                </Text>
                                {/* Open Sans */}
                                <Text
                                  accessible={true}
                                  selectable={false}
                                  selectionColor={palettes.App.ShopAppBlue}
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: palettes.App.ShopAppBlue,
                                      fontFamily: 'OpenSans_400Regular',
                                      fontSize: [
                                        {
                                          minWidth: Breakpoints.Mobile,
                                          value: 12,
                                        },
                                        {
                                          minWidth: Breakpoints.Tablet,
                                          value: 20,
                                        },
                                        {
                                          minWidth: Breakpoints.Desktop,
                                          value: 30,
                                        },
                                      ],
                                      lineHeight: 18,
                                      marginTop: 6,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {listData?.experience}
                                  {'\n'}
                                </Text>
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
                                  color={palettes.App.Peoplebit_Dark_Blue}
                                  name={'Foundation/price-tag'}
                                  size={40}
                                />
                                {/* Open Sans */}
                                <Text
                                  accessible={true}
                                  selectable={false}
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: palettes.App.ShopAppBlue,
                                      fontFamily: 'OpenSans_600SemiBold',
                                      fontSize: [
                                        {
                                          minWidth: Breakpoints.Mobile,
                                          value: 15,
                                        },
                                        {
                                          minWidth: Breakpoints.Tablet,
                                          value: 20,
                                        },
                                        {
                                          minWidth: Breakpoints.Desktop,
                                          value: 30,
                                        },
                                      ],
                                      lineHeight: 21,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'Price\n'}
                                </Text>
                                {/* Open Sans */}
                                <Text
                                  accessible={true}
                                  selectable={false}
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: palettes.App.ShopAppBlue,
                                      fontFamily: 'OpenSans_400Regular',
                                      fontSize: [
                                        {
                                          minWidth: Breakpoints.Mobile,
                                          value: 12,
                                        },
                                        {
                                          minWidth: Breakpoints.Tablet,
                                          value: 20,
                                        },
                                        {
                                          minWidth: Breakpoints.Desktop,
                                          value: 30,
                                        },
                                      ],
                                      lineHeight: 18,
                                      marginTop: 6,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {listData?.rate}
                                  {'\n'}
                                </Text>
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
                                  color={palettes.App.Peoplebit_Dark_Blue}
                                  name={'Ionicons/language-outline'}
                                  size={40}
                                />
                                {/* Open Sans */}
                                <Text
                                  accessible={true}
                                  selectable={false}
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: palettes.App.ShopAppBlue,
                                      fontFamily: 'OpenSans_600SemiBold',
                                      fontSize: [
                                        {
                                          minWidth: Breakpoints.Mobile,
                                          value: 15,
                                        },
                                        {
                                          minWidth: Breakpoints.Tablet,
                                          value: 20,
                                        },
                                        {
                                          minWidth: Breakpoints.Desktop,
                                          value: 30,
                                        },
                                      ],
                                      lineHeight: 21,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'Language'}
                                </Text>
                                {/* Open Sans */}
                                <Text
                                  accessible={true}
                                  selectable={false}
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: palettes.App.ShopAppBlue,
                                      fontFamily: 'OpenSans_400Regular',
                                      fontSize: [
                                        {
                                          minWidth: Breakpoints.Mobile,
                                          value: 12,
                                        },
                                        {
                                          minWidth: Breakpoints.Tablet,
                                          value: 20,
                                        },
                                        {
                                          minWidth: Breakpoints.Desktop,
                                          value: 30,
                                        },
                                      ],
                                      lineHeight: 18,
                                      marginTop: 6,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {listData?.language}
                                </Text>
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
                                  color={palettes.App.Peoplebit_Dark_Blue}
                                  name={'MaterialIcons/work-outline'}
                                  size={40}
                                />
                                {/* Open Sans */}
                                <Text
                                  accessible={true}
                                  selectable={false}
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: palettes.App.ShopAppBlue,
                                      fontFamily: 'OpenSans_600SemiBold',
                                      fontSize: [
                                        {
                                          minWidth: Breakpoints.Mobile,
                                          value: 15,
                                        },
                                        {
                                          minWidth: Breakpoints.Tablet,
                                          value: 20,
                                        },
                                        {
                                          minWidth: Breakpoints.Desktop,
                                          value: 30,
                                        },
                                      ],
                                      lineHeight: 21,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'Profession'}
                                </Text>
                                {/* Open Sans */}
                                <Text
                                  accessible={true}
                                  selectable={false}
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: palettes.App.ShopAppBlue,
                                      fontFamily: 'OpenSans_400Regular',
                                      fontSize: [
                                        {
                                          minWidth: Breakpoints.Mobile,
                                          value: 12,
                                        },
                                        {
                                          minWidth: Breakpoints.Tablet,
                                          value: 20,
                                        },
                                        {
                                          minWidth: Breakpoints.Desktop,
                                          value: 30,
                                        },
                                      ],
                                      lineHeight: 18,
                                      marginTop: 6,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {listData?.profession}
                                </Text>
                              </View>
                            </Touchable>
                          </View>
                        </View>
                      </View>
                      {/* actions */}
                      <View>
                        {/* Border Frame */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              marginBottom: [
                                { minWidth: Breakpoints.Mobile, value: 12 },
                                { minWidth: Breakpoints.Laptop, value: 18 },
                              ],
                              marginLeft: 12,
                              marginRight: 12,
                              marginTop: [
                                { minWidth: Breakpoints.Mobile, value: 12 },
                                { minWidth: Breakpoints.Laptop, value: 18 },
                              ],
                            },
                            dimensions.width
                          )}
                        >
                          {/* Border */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                backgroundColor: palettes.App.Internal_Border,
                                height: 1,
                              },
                              dimensions.width
                            )}
                          />
                        </View>
                        {/* chat_availability area */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              flexDirection: 'row',
                              flexGrow: 1,
                              flexShrink: 0,
                              justifyContent: 'space-around',
                              left: {
                                minWidth: Breakpoints.Tablet,
                                value: '10%',
                              },
                              marginLeft: '20%',
                              paddingBottom: 12,
                              paddingTop: 12,
                              width: '50%',
                            },
                            dimensions.width
                          )}
                        >
                          {/* Availability */}
                          <>
                            {usernameFollowed ? null : (
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    flexGrow: 1,
                                    flexShrink: 0,
                                    maxWidth: '47%',
                                  },
                                  dimensions.width
                                )}
                              >
                                <Touchable
                                  onPress={() => {
                                    try {
                                      setIsavailabilityvisible(true);
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                >
                                  {/* availabilityModal */}
                                  <Modal
                                    animationType={'none'}
                                    supportedOrientations={[
                                      'portrait',
                                      'landscape',
                                    ]}
                                    transparent={false}
                                    visible={isavailabilityvisible}
                                  >
                                    <View>
                                      {/* Header */}
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
                                        {/* Back */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              alignItems: 'center',
                                              height: 48,
                                              justifyContent: 'center',
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
                                                navigation.replace(
                                                  'ClientToProfessionalPageOrg2Screen'
                                                );
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
                                        {/* Screen Heading */}
                                        <Text
                                          accessible={true}
                                          selectable={false}
                                          selectionColor={
                                            palettes.App.ShopAppBlue
                                          }
                                          style={StyleSheet.applyWidth(
                                            {
                                              color: palettes.App.ShopAppBlue,
                                              fontFamily: 'Poppins_400Regular',
                                              fontSize: 15,
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {'Schedule\n'}
                                        </Text>
                                        {/* Blank */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              alignItems: 'center',
                                              height: 48,
                                              justifyContent: 'center',
                                              width: 48,
                                            },
                                            dimensions.width
                                          )}
                                        />
                                      </View>
                                      {/* monday */}
                                      <View
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                            gap: 10,
                                            justifyContent: 'space-between',
                                            marginLeft: 16,
                                            marginRight: 16,
                                            marginTop: 16,
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {/* Day */}
                                        <View>
                                          <Text
                                            accessible={true}
                                            selectable={false}
                                            {...GlobalStyles.TextStyles(theme)[
                                              'Text 2'
                                            ].props}
                                            style={StyleSheet.applyWidth(
                                              StyleSheet.compose(
                                                GlobalStyles.TextStyles(theme)[
                                                  'Text 2'
                                                ].style,
                                                {
                                                  color:
                                                    palettes.App.ShopAppBlue,
                                                  fontFamily:
                                                    'AbrilFatface_400Regular',
                                                }
                                              ),
                                              dimensions.width
                                            )}
                                          >
                                            {'Mon'}
                                          </Text>
                                        </View>
                                        {/* Start Date */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            { paddingRight: 10, width: '40%' },
                                            dimensions.width
                                          )}
                                        >
                                          <DatePicker
                                            autoDismissKeyboard={true}
                                            disabled={false}
                                            hideLabel={false}
                                            leftIconMode={'inset'}
                                            mode={'date'}
                                            onDateChange={newDatePickerValue => {
                                              try {
                                                setDatePickerValue(
                                                  newDatePickerValue
                                                );
                                              } catch (err) {
                                                console.error(err);
                                              }
                                            }}
                                            type={'solid'}
                                            borderColorActive={
                                              palettes.App.ShopAppBlue
                                            }
                                            date={datePickerValue}
                                            format={'dd-mm-yyyy'}
                                            label={'From Date'}
                                            labelColor={
                                              theme.colors.branding.primary
                                            }
                                            rightIconName={'AntDesign/calendar'}
                                            style={StyleSheet.applyWidth(
                                              {
                                                borderColor:
                                                  palettes.App.ShopAppBlue,
                                                color: palettes.App.ShopAppBlue,
                                                fontSize: 12,
                                              },
                                              dimensions.width
                                            )}
                                          />
                                        </View>
                                        {/* End Date */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            { paddingLeft: 10, width: '40%' },
                                            dimensions.width
                                          )}
                                        >
                                          <DatePicker
                                            autoDismissKeyboard={true}
                                            disabled={false}
                                            hideLabel={false}
                                            mode={'date'}
                                            onDateChange={newDatePickerValue => {
                                              try {
                                                setDatePickerValue(
                                                  newDatePickerValue
                                                );
                                              } catch (err) {
                                                console.error(err);
                                              }
                                            }}
                                            type={'solid'}
                                            borderColorActive={
                                              palettes.App.ShopAppBlue
                                            }
                                            date={datePickerValue}
                                            format={'dd-mm-yyyy'}
                                            label={'To Date'}
                                            labelColor={
                                              theme.colors.branding.primary
                                            }
                                            leftIconMode={'inset'}
                                            rightIconName={'AntDesign/calendar'}
                                            style={StyleSheet.applyWidth(
                                              {
                                                borderColor:
                                                  palettes.App.ShopAppBlue,
                                                color: palettes.App.ShopAppBlue,
                                                fontSize: 12,
                                              },
                                              dimensions.width
                                            )}
                                          />
                                        </View>

                                        <View>
                                          <Checkbox
                                            onPress={newCheckboxValue => {
                                              const checkboxValue =
                                                newCheckboxValue;
                                              try {
                                                setCheckboxValue(
                                                  newCheckboxValue
                                                );
                                              } catch (err) {
                                                console.error(err);
                                              }
                                            }}
                                            status={checkboxValue}
                                          />
                                        </View>
                                      </View>
                                    </View>
                                  </Modal>
                                  <Icon
                                    color={palettes.App.Peoplebit_Dark_Blue}
                                    name={'MaterialIcons/event-available'}
                                    size={64}
                                  />
                                  <View
                                    style={StyleSheet.applyWidth(
                                      { right: '25%' },
                                      dimensions.width
                                    )}
                                  >
                                    <Text
                                      accessible={true}
                                      selectable={false}
                                      {...GlobalStyles.TextStyles(theme)[
                                        'Text 2'
                                      ].props}
                                      style={StyleSheet.applyWidth(
                                        StyleSheet.compose(
                                          GlobalStyles.TextStyles(theme)[
                                            'Text 2'
                                          ].style,
                                          {
                                            color: palettes.App.ShopAppBlue,
                                            fontFamily: 'Aclonica_400Regular',
                                            fontSize: [
                                              {
                                                minWidth: Breakpoints.Tablet,
                                                value: 24,
                                              },
                                              {
                                                minWidth: Breakpoints.Desktop,
                                                value: 34,
                                              },
                                            ],
                                          }
                                        ),
                                        dimensions.width
                                      )}
                                    >
                                      {'Availability\n'}
                                    </Text>
                                  </View>
                                </Touchable>
                              </View>
                            )}
                          </>
                          {/* ChatMe */}
                          <View
                            style={StyleSheet.applyWidth(
                              { flexGrow: 1, flexShrink: 0, maxWidth: '40%' },
                              dimensions.width
                            )}
                          >
                            <Touchable
                              onPress={() => {
                                try {
                                  setIsmessagevisible(true);
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                            >
                              <Icon
                                color={palettes.App.Peoplebit_Dark_Blue}
                                name={'Ionicons/chatbubbles-outline'}
                                size={64}
                              />
                              <View
                                style={StyleSheet.applyWidth(
                                  { right: '20%' },
                                  dimensions.width
                                )}
                              >
                                <Text
                                  accessible={true}
                                  selectable={false}
                                  {...GlobalStyles.TextStyles(theme)['Text 2']
                                    .props}
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.TextStyles(theme)['Text 2']
                                        .style,
                                      {
                                        color: palettes.App.ShopAppBlue,
                                        fontFamily: 'Aclonica_400Regular',
                                        fontSize: [
                                          {
                                            minWidth: Breakpoints.Tablet,
                                            value: 24,
                                          },
                                          {
                                            minWidth: Breakpoints.Desktop,
                                            value: 34,
                                          },
                                        ],
                                      }
                                    ),
                                    dimensions.width
                                  )}
                                >
                                  {'Chat Me'}
                                </Text>
                              </View>
                              {/* chatModal */}
                              <Modal
                                supportedOrientations={[
                                  'portrait',
                                  'landscape',
                                ]}
                                animationType={'fade'}
                                presentationStyle={'overFullScreen'}
                                transparent={true}
                                visible={ismessagevisible}
                              >
                                {/* Keyboard Aware Scroll View 2 */}
                                <SimpleStyleKeyboardAwareScrollView
                                  enableOnAndroid={false}
                                  enableResetScrollToCoords={false}
                                  keyboardShouldPersistTaps={'never'}
                                  showsVerticalScrollIndicator={true}
                                  viewIsInsideTabBar={false}
                                  enableAutomaticScroll={true}
                                  style={StyleSheet.applyWidth(
                                    {
                                      backgroundColor:
                                        palettes.App.Peoplebit_Dark_Blue,
                                      borderRadius: 15,
                                      flexDirection: 'column',
                                      flexGrow: 0,
                                      flexShrink: 2,
                                      height: [
                                        {
                                          minWidth: Breakpoints.Mobile,
                                          value: '50%',
                                        },
                                        {
                                          minWidth: Breakpoints.Laptop,
                                          value: '55%',
                                        },
                                      ],
                                      left: {
                                        minWidth: Breakpoints.Laptop,
                                        value: '20%',
                                      },
                                      margin: [
                                        {
                                          minWidth: Breakpoints.Mobile,
                                          value: '7%',
                                        },
                                        {
                                          minWidth: Breakpoints.Tablet,
                                          value: '10%',
                                        },
                                      ],
                                      maxWidth: {
                                        minWidth: Breakpoints.Laptop,
                                        value: '60%',
                                      },
                                      overflow: 'hidden',
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {/* Navigation Frame */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        flexDirection: 'row',
                                        flexGrow: 0,
                                        flexShrink: 0,
                                        paddingLeft: 12,
                                        paddingRight: 12,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {/* Left Frame */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        { paddingBottom: 7, paddingTop: 7 },
                                        dimensions.width
                                      )}
                                    >
                                      {/* Flex Frame for Touchable */}
                                      <View
                                        style={StyleSheet.applyWidth(
                                          {
                                            flexGrow: 1,
                                            flexShrink: 0,
                                            justifyContent: 'center',
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
                                              navigation.replace(
                                                'ClientToProfessionalPageOrg2Screen'
                                              );
                                            } catch (err) {
                                              console.error(err);
                                            }
                                          }}
                                        >
                                          <Circle
                                            bgColor={
                                              palettes.App.Communial_Icon_BG
                                            }
                                            size={31}
                                          >
                                            <Icon
                                              color={
                                                palettes.App.Icon_Dark_Gray
                                              }
                                              name={'Ionicons/caret-back'}
                                              size={18}
                                            />
                                          </Circle>
                                        </Touchable>
                                      </View>
                                    </View>
                                    {/* Middle Frame */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          flexGrow: 1,
                                          flexShrink: 0,
                                          paddingBottom: 12,
                                          paddingLeft: 12,
                                          paddingRight: 12,
                                          paddingTop: 12,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {/* Title */}
                                      <Text
                                        accessible={true}
                                        selectable={false}
                                        style={StyleSheet.applyWidth(
                                          {
                                            color: theme.colors.text.strong,
                                            fontFamily: 'Rubik_700Bold',
                                            fontSize: 14,
                                            lineHeight: 20,
                                            textAlign: 'center',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {'Chats'}
                                      </Text>
                                    </View>
                                    {/* Right Frame */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        { paddingBottom: 7, paddingTop: 7 },
                                        dimensions.width
                                      )}
                                    >
                                      {/* Flex Frame for Touchable */}
                                      <View
                                        style={StyleSheet.applyWidth(
                                          {
                                            flexGrow: 1,
                                            flexShrink: 0,
                                            justifyContent: 'center',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        <Touchable>
                                          <Circle
                                            bgColor={
                                              palettes.App.Communial_Icon_BG
                                            }
                                            size={31}
                                          >
                                            <Icon
                                              color={
                                                palettes.App.Icon_Dark_Gray
                                              }
                                              name={'Ionicons/grid'}
                                              size={18}
                                            />
                                          </Circle>
                                        </Touchable>
                                      </View>
                                    </View>
                                  </View>
                                  {/* Content Frame with Scroll */}
                                  <SimpleStyleScrollView
                                    bounces={true}
                                    horizontal={false}
                                    keyboardShouldPersistTaps={'never'}
                                    nestedScrollEnabled={false}
                                    showsHorizontalScrollIndicator={true}
                                    showsVerticalScrollIndicator={true}
                                  >
                                    <SupabaseApi.FetchGetchatsGET>
                                      {({
                                        loading,
                                        error,
                                        data,
                                        refetchGetchats,
                                      }) => {
                                        const fetchData = data?.json;
                                        if (loading) {
                                          return <ActivityIndicator />;
                                        }

                                        if (
                                          error ||
                                          data?.status < 200 ||
                                          data?.status >= 300
                                        ) {
                                          return <ActivityIndicator />;
                                        }

                                        return (
                                          <SimpleStyleFlatList
                                            data={fetchData}
                                            horizontal={false}
                                            inverted={false}
                                            keyExtractor={(listData, index) =>
                                              listData
                                            }
                                            keyboardShouldPersistTaps={'never'}
                                            listKey={JSON.stringify(fetchData)}
                                            nestedScrollEnabled={false}
                                            numColumns={1}
                                            onEndReachedThreshold={0.5}
                                            renderItem={({ item, index }) => {
                                              const listData = item;
                                              return (
                                                <>
                                                  {/* Message Frame */}
                                                  <View
                                                    style={StyleSheet.applyWidth(
                                                      {
                                                        flexDirection: 'row',
                                                        flexGrow: 1,
                                                        flexShrink: 0,
                                                        paddingBottom: 6,
                                                        paddingTop: 12,
                                                      },
                                                      dimensions.width
                                                    )}
                                                  >
                                                    {/* Left Side Frame */}
                                                    <View>
                                                      {/* Flex Frame for Touchable */}
                                                      <View>
                                                        <Touchable>
                                                          {/* Circle Image Frame */}
                                                          <View
                                                            style={StyleSheet.applyWidth(
                                                              {
                                                                flexGrow: 1,
                                                                flexShrink: 0,
                                                                paddingBottom: 12,
                                                                paddingLeft: 12,
                                                                paddingRight: 6,
                                                                paddingTop: 18,
                                                              },
                                                              dimensions.width
                                                            )}
                                                          >
                                                            <CircleImage
                                                              size={30}
                                                              source={imageSource(
                                                                'Images["User"]'
                                                              )}
                                                            />
                                                          </View>
                                                        </Touchable>
                                                      </View>
                                                    </View>
                                                    {/* Right Side Frame */}
                                                    <View
                                                      style={StyleSheet.applyWidth(
                                                        { maxWidth: '61%' },
                                                        dimensions.width
                                                      )}
                                                    >
                                                      {/* Message Bubble Frame */}
                                                      <View
                                                        style={StyleSheet.applyWidth(
                                                          {
                                                            backgroundColor:
                                                              palettes.App
                                                                .Communial_Icon_BG,
                                                            borderBottomRightRadius: 64,
                                                            borderTopLeftRadius: 32,
                                                            borderTopRightRadius: 64,
                                                            flexGrow: 1,
                                                            flexShrink: 0,
                                                            paddingBottom: 12,
                                                            paddingLeft: 12,
                                                            paddingRight: 12,
                                                            paddingTop: 12,
                                                          },
                                                          dimensions.width
                                                        )}
                                                      >
                                                        {/* Rubik Text Style 12/18 Regular */}
                                                        <Text
                                                          accessible={true}
                                                          selectable={false}
                                                          style={StyleSheet.applyWidth(
                                                            {
                                                              color:
                                                                'theme.colors.communityTrueOption',
                                                              fontFamily:
                                                                'Rubik_400Regular',
                                                              fontSize: 12,
                                                              lineHeight: 18,
                                                            },
                                                            dimensions.width
                                                          )}
                                                        >
                                                          {
                                                            listData?.client_messge
                                                          }
                                                        </Text>
                                                      </View>
                                                    </View>
                                                  </View>
                                                </>
                                              );
                                            }}
                                            showsHorizontalScrollIndicator={
                                              true
                                            }
                                            showsVerticalScrollIndicator={true}
                                            style={StyleSheet.applyWidth(
                                              { flex: 1 },
                                              dimensions.width
                                            )}
                                          />
                                        );
                                      }}
                                    </SupabaseApi.FetchGetchatsGET>
                                  </SimpleStyleScrollView>
                                  {/* Keyboard with Emoticons Group */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        flexGrow: 1,
                                        flexShrink: 0,
                                        justifyContent: 'flex-end',
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {/* Message Frame */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignContent: 'flex-end',
                                          alignItems: 'center',
                                          alignSelf: 'auto',
                                          flexDirection: 'row',
                                          flexGrow: 0,
                                          flexShrink: 0,
                                          flexWrap: 'wrap',
                                          paddingBottom: 12,
                                          paddingLeft: 12,
                                          paddingRight: 12,
                                          paddingTop: 12,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {/* Flex Frame for Touchable */}
                                      <View
                                        style={StyleSheet.applyWidth(
                                          { flexGrow: 0, flexShrink: 0 },
                                          dimensions.width
                                        )}
                                      >
                                        <Touchable>
                                          {/* Flex Frame for Icons */}
                                          <View>
                                            <Icon
                                              color={
                                                palettes.App.Icon_Dark_Gray
                                              }
                                              name={
                                                'MaterialCommunityIcons/camera'
                                              }
                                              size={30}
                                            />
                                          </View>
                                        </Touchable>
                                      </View>
                                      {/* Flex Input */}
                                      <View
                                        style={StyleSheet.applyWidth(
                                          { flexGrow: 1, flexShrink: 0 },
                                          dimensions.width
                                        )}
                                      >
                                        <TextInput
                                          autoCapitalize={'none'}
                                          autoCorrect={true}
                                          changeTextDelay={500}
                                          onChangeText={newTextInputValue => {
                                            try {
                                              setTextInputValue(
                                                newTextInputValue
                                              );
                                            } catch (err) {
                                              console.error(err);
                                            }
                                          }}
                                          webShowOutline={true}
                                          placeholder={'Type something...'}
                                          placeholderTextColor={
                                            palettes.Brand.Surface
                                          }
                                          style={StyleSheet.applyWidth(
                                            {
                                              borderBottomWidth: 1,
                                              borderColor:
                                                palettes.App.Icon_Dark_Gray,
                                              borderLeftWidth: 1,
                                              borderRadius: 60,
                                              borderRightWidth: 1,
                                              borderTopWidth: 1,
                                              color:
                                                theme.colors.background.brand,
                                              fontFamily: 'Rubik_400Regular',
                                              marginLeft: 12,
                                              marginRight: 12,
                                              paddingBottom: 15,
                                              paddingLeft: 12,
                                              paddingRight: 12,
                                              paddingTop: 15,
                                            },
                                            dimensions.width
                                          )}
                                          value={textInputValue}
                                        />
                                      </View>
                                      {/* Flex Frame for Touchable */}
                                      <View
                                        style={StyleSheet.applyWidth(
                                          { flexGrow: 0, flexShrink: 0 },
                                          dimensions.width
                                        )}
                                      >
                                        <Touchable>
                                          <Circle
                                            bgColor={
                                              palettes.App
                                                .Communical_Primary_Green_CTA
                                            }
                                            size={48}
                                          >
                                            {/* Flex Frame for Icons */}
                                            <View
                                              style={StyleSheet.applyWidth(
                                                {
                                                  flexGrow: 0,
                                                  flexShrink: 0,
                                                  justifyContent: 'center',
                                                },
                                                dimensions.width
                                              )}
                                            >
                                              <Icon
                                                size={24}
                                                color={
                                                  'theme.colors.custom_rgb255_255_255'
                                                }
                                                name={'FontAwesome/send'}
                                              />
                                            </View>
                                          </Circle>
                                        </Touchable>
                                      </View>
                                    </View>
                                  </View>
                                </SimpleStyleKeyboardAwareScrollView>
                              </Modal>
                            </Touchable>
                          </View>
                        </View>
                        <Spacer bottom={15} left={12} right={12} top={15} />
                        {/* Actions Frame */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              flexDirection: 'row',
                              flexGrow: 1,
                              flexShrink: 0,
                              justifyContent: 'space-around',
                              paddingBottom: 12,
                              paddingTop: 12,
                            },
                            dimensions.width
                          )}
                        >
                          {/* Flex Touchable */}
                          <>
                            {!menuTab1 ? null : (
                              <View
                                style={StyleSheet.applyWidth(
                                  { flexGrow: 1, flexShrink: 0 },
                                  dimensions.width
                                )}
                              >
                                {/* menuTab Touchable 3 Options */}
                                <Touchable
                                  onPress={() => {
                                    try {
                                      setMenuTab1(true);
                                      setMenuTab2(false);
                                      setMenuTab3(false);
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                >
                                  {/* Tab Frame True */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        backgroundColor:
                                          palettes.App.Peoplebit_Dark_Blue,
                                        borderBottomWidth: 2,
                                        borderColor:
                                          palettes.App.Peoplebit_Dark_Blue,
                                        borderLeftWidth: 2,
                                        borderRadius: 36,
                                        borderRightWidth: 2,
                                        borderTopWidth: 2,
                                        flexDirection: 'row',
                                        flexGrow: 1,
                                        flexShrink: 0,
                                        justifyContent: 'center',
                                        marginLeft: 12,
                                        marginRight: 12,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {/* Button Label */}
                                    <Text
                                      accessible={true}
                                      selectable={false}
                                      style={StyleSheet.applyWidth(
                                        {
                                          color: palettes.App.Internal_White,
                                          fontFamily: 'OpenSans_600SemiBold',
                                          fontSize: [
                                            {
                                              minWidth: Breakpoints.Mobile,
                                              value: 13,
                                            },
                                            {
                                              minWidth: Breakpoints.Tablet,
                                              value: 20,
                                            },
                                            {
                                              minWidth: Breakpoints.Desktop,
                                              value: 30,
                                            },
                                          ],
                                          lineHeight: 18,
                                          paddingBottom: 12,
                                          paddingLeft: 24,
                                          paddingRight: 24,
                                          paddingTop: 12,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {'Description'}
                                    </Text>
                                  </View>
                                </Touchable>
                              </View>
                            )}
                          </>
                          {/* Flex Touchable */}
                          <>
                            {menuTab1 ? null : (
                              <View
                                style={StyleSheet.applyWidth(
                                  { flexGrow: 1, flexShrink: 0 },
                                  dimensions.width
                                )}
                              >
                                {/* menuTab Touchable 3 Options */}
                                <Touchable
                                  onPress={() => {
                                    try {
                                      setMenuTab1(true);
                                      setMenuTab2(false);
                                      setMenuTab3(false);
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                >
                                  {/* Tab Frame False */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        backgroundColor:
                                          palettes.App.Internal_White,
                                        borderBottomWidth: 2,
                                        borderColor:
                                          palettes.App.Peoplebit_Dark_Blue,
                                        borderLeftWidth: 2,
                                        borderRadius: 36,
                                        borderRightWidth: 2,
                                        borderTopWidth: 2,
                                        flexDirection: 'row',
                                        flexGrow: 1,
                                        flexShrink: 0,
                                        justifyContent: 'center',
                                        marginLeft: 12,
                                        marginRight: 12,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {/* Button Label */}
                                    <Text
                                      accessible={true}
                                      selectable={false}
                                      style={StyleSheet.applyWidth(
                                        {
                                          color: palettes.App.ShopAppBlue,
                                          fontFamily: 'OpenSans_600SemiBold',
                                          fontSize: [
                                            {
                                              minWidth: Breakpoints.Mobile,
                                              value: 13,
                                            },
                                            {
                                              minWidth: Breakpoints.Tablet,
                                              value: 20,
                                            },
                                            {
                                              minWidth: Breakpoints.Desktop,
                                              value: 30,
                                            },
                                          ],
                                          lineHeight: 18,
                                          paddingBottom: 12,
                                          paddingLeft: 24,
                                          paddingRight: 24,
                                          paddingTop: 12,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {'Description'}
                                    </Text>
                                  </View>
                                </Touchable>
                              </View>
                            )}
                          </>
                          {/* Flex Touchable */}
                          <>
                            {menuTab2 ? null : (
                              <View
                                style={StyleSheet.applyWidth(
                                  { flexGrow: 1, flexShrink: 0 },
                                  dimensions.width
                                )}
                              >
                                <Touchable
                                  onPress={() => {
                                    try {
                                      setMenuTab2(true);
                                      setMenuTab1(false);
                                      setMenuTab3(false);
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                >
                                  {/* Button Frame */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        backgroundColor:
                                          palettes.App.Internal_White,
                                        borderBottomWidth: 2,
                                        borderColor:
                                          palettes.App.Peoplebit_Dark_Blue,
                                        borderLeftWidth: 2,
                                        borderRadius: 36,
                                        borderRightWidth: 2,
                                        borderTopWidth: 2,
                                        flexDirection: 'row',
                                        flexGrow: 1,
                                        flexShrink: 0,
                                        justifyContent: 'center',
                                        marginLeft: 6,
                                        marginRight: 6,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {/* Button Label */}
                                    <Text
                                      accessible={true}
                                      selectable={false}
                                      style={StyleSheet.applyWidth(
                                        {
                                          color: palettes.App.ShopAppBlue,
                                          fontFamily: 'OpenSans_600SemiBold',
                                          fontSize: [
                                            {
                                              minWidth: Breakpoints.Mobile,
                                              value: 13,
                                            },
                                            {
                                              minWidth: Breakpoints.Tablet,
                                              value: 20,
                                            },
                                            {
                                              minWidth: Breakpoints.Desktop,
                                              value: 30,
                                            },
                                          ],
                                          lineHeight: 18,
                                          paddingBottom: 12,
                                          paddingLeft: 24,
                                          paddingRight: 24,
                                          paddingTop: 12,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {'Gadgets\n'}
                                    </Text>
                                  </View>
                                </Touchable>
                              </View>
                            )}
                          </>
                          {/* Flex Touchable */}
                          <>
                            {!menuTab2 ? null : (
                              <View
                                style={StyleSheet.applyWidth(
                                  { flexGrow: 1, flexShrink: 0 },
                                  dimensions.width
                                )}
                              >
                                {/* menuTab Touchable 3 Options */}
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
                                  {/* Tab Frame */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        backgroundColor:
                                          palettes.App.Peoplebit_Dark_Blue,
                                        borderBottomWidth: 2,
                                        borderColor:
                                          palettes.App.Peoplebit_Dark_Blue,
                                        borderLeftWidth: 2,
                                        borderRadius: 36,
                                        borderRightWidth: 2,
                                        borderTopWidth: 2,
                                        flexDirection: 'row',
                                        flexGrow: 1,
                                        flexShrink: 0,
                                        justifyContent: 'center',
                                        marginLeft: 6,
                                        marginRight: 6,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {/* Button Label */}
                                    <Text
                                      accessible={true}
                                      selectable={false}
                                      style={StyleSheet.applyWidth(
                                        {
                                          color: palettes.App.Internal_White,
                                          fontFamily: 'OpenSans_600SemiBold',
                                          fontSize: [
                                            {
                                              minWidth: Breakpoints.Mobile,
                                              value: 13,
                                            },
                                            {
                                              minWidth: Breakpoints.Tablet,
                                              value: 20,
                                            },
                                            {
                                              minWidth: Breakpoints.Desktop,
                                              value: 30,
                                            },
                                          ],
                                          lineHeight: 18,
                                          paddingBottom: 12,
                                          paddingLeft: 24,
                                          paddingRight: 24,
                                          paddingTop: 12,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {'Gadgets'}
                                    </Text>
                                  </View>
                                </Touchable>
                              </View>
                            )}
                          </>
                          {/* Flex Touchable */}
                          <>
                            {menuTab3 ? null : (
                              <View
                                style={StyleSheet.applyWidth(
                                  { flexGrow: 1, flexShrink: 0 },
                                  dimensions.width
                                )}
                              >
                                {/* menuTab Touchable 3 Options */}
                                <Touchable
                                  onPress={() => {
                                    try {
                                      setMenuTab1(false);
                                      setMenuTab2(false);
                                      setMenuTab3(true);
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                >
                                  {/* Tab Frame */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        backgroundColor:
                                          palettes.App.Internal_White,
                                        borderBottomWidth: 2,
                                        borderColor:
                                          palettes.App.Peoplebit_Dark_Blue,
                                        borderLeftWidth: 2,
                                        borderRadius: 36,
                                        borderRightWidth: 2,
                                        borderTopWidth: 2,
                                        flexDirection: 'row',
                                        flexGrow: 1,
                                        flexShrink: 0,
                                        justifyContent: 'center',
                                        marginLeft: 6,
                                        marginRight: 12,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {/* Button Label */}
                                    <Text
                                      accessible={true}
                                      selectable={false}
                                      style={StyleSheet.applyWidth(
                                        {
                                          color: palettes.App.ShopAppBlue,
                                          fontFamily: 'OpenSans_600SemiBold',
                                          fontSize: [
                                            {
                                              minWidth: Breakpoints.Mobile,
                                              value: 13,
                                            },
                                            {
                                              minWidth: Breakpoints.Tablet,
                                              value: 20,
                                            },
                                            {
                                              minWidth: Breakpoints.Desktop,
                                              value: 30,
                                            },
                                          ],
                                          lineHeight: 18,
                                          paddingBottom: 12,
                                          paddingLeft: 24,
                                          paddingRight: 24,
                                          paddingTop: 12,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {'Reviews'}
                                    </Text>
                                  </View>
                                </Touchable>
                              </View>
                            )}
                          </>
                          {/* Flex Touchable */}
                          <>
                            {!menuTab3 ? null : (
                              <View
                                style={StyleSheet.applyWidth(
                                  { flexGrow: 1, flexShrink: 0 },
                                  dimensions.width
                                )}
                              >
                                {/* menuTab Touchable 3 Options */}
                                <Touchable
                                  onPress={() => {
                                    try {
                                      setMenuTab1(false);
                                      setMenuTab2(false);
                                      setMenuTab3(true);
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                >
                                  {/* Tab Frame */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        backgroundColor:
                                          palettes.App.Peoplebit_Dark_Blue,
                                        borderBottomWidth: 2,
                                        borderColor:
                                          palettes.App.Peoplebit_Dark_Blue,
                                        borderLeftWidth: 2,
                                        borderRadius: 36,
                                        borderRightWidth: 2,
                                        borderTopWidth: 2,
                                        flexDirection: 'row',
                                        flexGrow: 1,
                                        flexShrink: 0,
                                        justifyContent: 'center',
                                        marginLeft: 6,
                                        marginRight: 12,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {/* Button Label */}
                                    <Text
                                      accessible={true}
                                      selectable={false}
                                      style={StyleSheet.applyWidth(
                                        {
                                          color: palettes.App.Internal_White,
                                          fontFamily: 'OpenSans_600SemiBold',
                                          fontSize: [
                                            {
                                              minWidth: Breakpoints.Mobile,
                                              value: 13,
                                            },
                                            {
                                              minWidth: Breakpoints.Tablet,
                                              value: 20,
                                            },
                                            {
                                              minWidth: Breakpoints.Desktop,
                                              value: 30,
                                            },
                                          ],
                                          lineHeight: 18,
                                          paddingBottom: 12,
                                          paddingLeft: 24,
                                          paddingRight: 24,
                                          paddingTop: 12,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {'Reviews'}
                                    </Text>
                                  </View>
                                </Touchable>
                              </View>
                            )}
                          </>
                        </View>
                        {/* Description */}
                        <>
                          {!menuTab1 ? null : (
                            <View
                              style={StyleSheet.applyWidth(
                                { marginTop: 12 },
                                dimensions.width
                              )}
                            >
                              {/* service_description_text */}
                              <View
                                style={StyleSheet.applyWidth(
                                  { paddingLeft: 18, paddingRight: 18 },
                                  dimensions.width
                                )}
                              >
                                {/* service_description */}
                                <Text
                                  accessible={true}
                                  selectable={false}
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors.text.strong,
                                      fontFamily: 'OpenSans_600SemiBold',
                                      fontSize: [
                                        {
                                          minWidth: Breakpoints.Mobile,
                                          value: 16,
                                        },
                                        {
                                          minWidth: Breakpoints.Tablet,
                                          value: 25,
                                        },
                                        {
                                          minWidth: Breakpoints.Desktop,
                                          value: 35,
                                        },
                                      ],
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'Service Description'}
                                </Text>
                                {/* service_cription */}
                                <Text
                                  accessible={true}
                                  selectable={false}
                                  ellipsizeMode={'tail'}
                                  numberOfLines={6}
                                  style={StyleSheet.applyWidth(
                                    {
                                      color:
                                        palettes.App.Internal_Secondary_Dark,
                                      fontFamily: 'OpenSans_400Regular',
                                      fontSize: [
                                        {
                                          minWidth: Breakpoints.Mobile,
                                          value: 12,
                                        },
                                        {
                                          minWidth: Breakpoints.Tablet,
                                          value: 18,
                                        },
                                        {
                                          minWidth: Breakpoints.Desktop,
                                          value: 28,
                                        },
                                        {
                                          minWidth: Breakpoints.Laptop,
                                          value: 20,
                                        },
                                      ],
                                      lineHeight: [
                                        {
                                          minWidth: Breakpoints.Mobile,
                                          value: 19,
                                        },
                                        {
                                          minWidth: Breakpoints.Desktop,
                                          value: 39,
                                        },
                                        {
                                          minWidth: Breakpoints.Laptop,
                                          value: 20,
                                        },
                                      ],
                                      marginTop: 12,
                                      textAlign: {
                                        minWidth: Breakpoints.Laptop,
                                        value: 'justify',
                                      },
                                      whiteSpace: {
                                        minWidth: Breakpoints.Laptop,
                                        value: 'pre-line',
                                      },
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {
                                    'The Interview Review App is designed to allow users to review and rate their interview experiences with different companies. Users can share feedback, provide ratings, and browse reviews from other users. '
                                  }
                                </Text>
                              </View>
                            </View>
                          )}
                        </>
                        {/* Gadget */}
                        <>
                          {!menuTab2 ? null : (
                            <View
                              style={StyleSheet.applyWidth(
                                { marginTop: 12 },
                                dimensions.width
                              )}
                            >
                              {/* gadget_frame */}
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    flexDirection: {
                                      minWidth: Breakpoints.Tablet,
                                      value: 'row',
                                    },
                                  },
                                  dimensions.width
                                )}
                              >
                                {/* gadget_title */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      flexDirection: 'row',
                                      justifyContent: 'space-between',
                                      paddingBottom: 12,
                                      paddingLeft: 12,
                                      paddingRight: 12,
                                      paddingTop: 12,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {/* Records Frame */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        flexDirection: {
                                          minWidth: Breakpoints.Tablet,
                                          value: 'row',
                                        },
                                        marginTop: 12,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {/* Flex Touchable */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          flexDirection: {
                                            minWidth: Breakpoints.Tablet,
                                            value: 'row',
                                          },
                                          marginBottom: 12,
                                          marginLeft: 12,
                                          marginRight: 12,
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
                                            navigation.replace(
                                              'ProfessionalGadgetScreen'
                                            );
                                            /* hidden 'Set Variable' action */
                                          } catch (err) {
                                            console.error(err);
                                          }
                                        }}
                                      >
                                        {/* Record Item Frame */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              borderBottomWidth: 1,
                                              borderColor:
                                                palettes.App.Internal_Border,
                                              borderLeftWidth: 1,
                                              borderRadius: 12,
                                              borderRightWidth: 1,
                                              borderTopWidth: 1,
                                              flexDirection: 'row',
                                              flexGrow: 0,
                                              flexShrink: 0,
                                              minWidth: 160,
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {/* Left Side Frame */}
                                          <View
                                            style={StyleSheet.applyWidth(
                                              {
                                                borderBottomLeftRadius: 12,
                                                borderTopLeftRadius: 12,
                                                flexGrow: 1,
                                                flexShrink: 0,
                                                minHeight: 160,
                                                minWidth: 160,
                                              },
                                              dimensions.width
                                            )}
                                          >
                                            <ImageBackground
                                              resizeMode={'cover'}
                                              source={imageSource(
                                                Images[
                                                  'CharlieGreen3JmfENcL24MUnsplash'
                                                ]
                                              )}
                                              style={StyleSheet.applyWidth(
                                                {
                                                  alignItems: 'flex-end',
                                                  borderBottomLeftRadius: 12,
                                                  borderTopLeftRadius: 12,
                                                  flexGrow: 0,
                                                  flexShrink: 0,
                                                  height: 160,
                                                  width: 160,
                                                },
                                                dimensions.width
                                              )}
                                            />
                                          </View>
                                          {/* Right Side Frame */}
                                          <View
                                            style={StyleSheet.applyWidth(
                                              {
                                                flexDirection: {
                                                  minWidth: Breakpoints.Tablet,
                                                  value: 'row',
                                                },
                                                flexGrow: 1,
                                                flexShrink: 0,
                                              },
                                              dimensions.width
                                            )}
                                          >
                                            {/* Top Frame */}
                                            <View
                                              style={StyleSheet.applyWidth(
                                                {
                                                  flexDirection: {
                                                    minWidth:
                                                      Breakpoints.Tablet,
                                                    value: 'row',
                                                  },
                                                  marginLeft: 12,
                                                  marginRight: 12,
                                                  paddingBottom: 12,
                                                  paddingTop: 12,
                                                  width: [
                                                    {
                                                      minWidth:
                                                        Breakpoints.Mobile,
                                                      value: '5%',
                                                    },
                                                    {
                                                      minWidth:
                                                        Breakpoints.Tablet,
                                                      value: '50%',
                                                    },
                                                  ],
                                                },
                                                dimensions.width
                                              )}
                                            >
                                              {/* Record Name */}
                                              <Text
                                                accessible={true}
                                                selectable={false}
                                                ellipsizeMode={'head'}
                                                style={StyleSheet.applyWidth(
                                                  {
                                                    alignSelf: {
                                                      minWidth:
                                                        Breakpoints.Tablet,
                                                      value: 'flex-start',
                                                    },
                                                    color:
                                                      theme.colors.text.strong,
                                                    fontFamily:
                                                      'OpenSans_700Bold',
                                                    paddingBottom: 9,
                                                    paddingTop: 9,
                                                    textAlign: {
                                                      minWidth:
                                                        Breakpoints.Tablet,
                                                      value: 'justify',
                                                    },
                                                    whiteSpace: {
                                                      minWidth:
                                                        Breakpoints.Tablet,
                                                      value: 'pre-line',
                                                    },
                                                  },
                                                  dimensions.width
                                                )}
                                              >
                                                {listData?.gadgets_description}
                                              </Text>
                                            </View>
                                            {/* Second Line Frame */}
                                            <View
                                              style={StyleSheet.applyWidth(
                                                {
                                                  alignItems: 'center',
                                                  flexDirection: 'row',
                                                  flexGrow: 0,
                                                  flexShrink: 0,
                                                  marginLeft: 12,
                                                  paddingBottom: 9,
                                                  paddingTop: 9,
                                                },
                                                dimensions.width
                                              )}
                                            >
                                              {/* Flex Touchable */}
                                              <View>
                                                <Touchable>
                                                  {/* InLine Badge Frame */}
                                                  <View
                                                    style={StyleSheet.applyWidth(
                                                      {
                                                        alignItems: 'center',
                                                        borderBottomWidth: 1,
                                                        borderColor:
                                                          palettes.App
                                                            .Internal_Primary_Color,
                                                        borderLeftWidth: 1,
                                                        borderRadius: 24,
                                                        borderRightWidth: 1,
                                                        borderTopWidth: 1,
                                                        flexGrow: 0,
                                                        flexShrink: 0,
                                                        paddingBottom: 3,
                                                        paddingLeft: 6,
                                                        paddingRight: 6,
                                                        paddingTop: 3,
                                                      },
                                                      dimensions.width
                                                    )}
                                                  >
                                                    {/* Badge */}
                                                    <Text
                                                      accessible={true}
                                                      selectable={false}
                                                      style={StyleSheet.applyWidth(
                                                        {
                                                          color:
                                                            palettes.App
                                                              .Internal_Primary_Color,
                                                          fontFamily:
                                                            'OpenSans_400Regular',
                                                          fontSize: 11,
                                                        },
                                                        dimensions.width
                                                      )}
                                                    >
                                                      {null}
                                                    </Text>
                                                  </View>
                                                </Touchable>
                                              </View>
                                            </View>
                                          </View>
                                        </View>
                                      </Touchable>
                                    </View>
                                  </View>
                                  {/* Gadget_text */}
                                  <Text
                                    accessible={true}
                                    selectable={false}
                                    style={StyleSheet.applyWidth(
                                      {
                                        color: theme.colors.text.strong,
                                        fontFamily: 'OpenSans_600SemiBold',
                                        fontSize: 16,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {'Gadgets'}
                                  </Text>
                                </View>
                              </View>
                            </View>
                          )}
                        </>
                        {/* Review */}
                        <>
                          {!menuTab3 ? null : (
                            <View
                              style={StyleSheet.applyWidth(
                                { marginTop: 12 },
                                dimensions.width
                              )}
                            >
                              {/* List Content Frame */}
                              <View>
                                {/* List Title Frame  */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      flexDirection: 'row',
                                      justifyContent: 'space-between',
                                      paddingBottom: 12,
                                      paddingLeft: 12,
                                      paddingRight: 12,
                                      paddingTop: 12,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {/* Rich Text Title */}
                                  <Text
                                    accessible={true}
                                    selectable={false}
                                    style={StyleSheet.applyWidth(
                                      {
                                        color: theme.colors.text.strong,
                                        fontFamily: 'OpenSans_600SemiBold',
                                        fontSize: 16,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {'Reviews'}
                                  </Text>
                                  <Link
                                    accessible={true}
                                    selectable={false}
                                    style={StyleSheet.applyWidth(
                                      {
                                        color: theme.colors.branding.primary,
                                        fontFamily: 'OpenSans_700Bold',
                                        fontSize: 12,
                                        lineHeight: 19,
                                      },
                                      dimensions.width
                                    )}
                                    title={'See all'}
                                  />
                                </View>
                                {/* Records Frame */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    { marginTop: 12 },
                                    dimensions.width
                                  )}
                                >
                                  {/* Flex Touchable */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        marginBottom: 12,
                                        marginLeft: 12,
                                        marginRight: 12,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    <Touchable>
                                      {/* Record Item Frame */}
                                      <View
                                        style={StyleSheet.applyWidth(
                                          {
                                            borderBottomWidth: 1,
                                            borderColor:
                                              palettes.App.Internal_Border,
                                            borderLeftWidth: 1,
                                            borderRadius: 12,
                                            borderRightWidth: 1,
                                            borderTopWidth: 1,
                                            flexDirection: 'row',
                                            flexGrow: 0,
                                            flexShrink: 0,
                                            paddingBottom: 12,
                                            paddingTop: 12,
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {/* Left Side Frame */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              alignItems: 'center',
                                              borderBottomLeftRadius: 12,
                                              borderTopLeftRadius: 12,
                                              flexGrow: 1,
                                              flexShrink: 0,
                                              justifyContent: 'center',
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {/* Review Image */}
                                          <CircleImage
                                            size={64}
                                            source={
                                              Images.CharlieGreen3JmfENcL24MUnsplash
                                            }
                                          />
                                        </View>
                                        {/* Middle Frame */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            { flexGrow: 1, flexShrink: 0 },
                                            dimensions.width
                                          )}
                                        >
                                          {/* Top Frame */}
                                          <View
                                            style={StyleSheet.applyWidth(
                                              { marginRight: 12 },
                                              dimensions.width
                                            )}
                                          >
                                            {/* Record Name */}
                                            <Text
                                              accessible={true}
                                              selectable={false}
                                              ellipsizeMode={'tail'}
                                              style={StyleSheet.applyWidth(
                                                {
                                                  color:
                                                    theme.colors.text.strong,
                                                  fontFamily:
                                                    'OpenSans_700Bold',
                                                  paddingBottom: 9,
                                                },
                                                dimensions.width
                                              )}
                                            >
                                              {listData?.firstname}{' '}
                                              {listData?.surname}
                                            </Text>
                                          </View>
                                          {/* Second Line Frame */}
                                          <View
                                            style={StyleSheet.applyWidth(
                                              {
                                                alignItems: 'center',
                                                flexDirection: 'row',
                                                flexGrow: 0,
                                                flexShrink: 0,
                                              },
                                              dimensions.width
                                            )}
                                          >
                                            {/* Time */}
                                            <Text
                                              accessible={true}
                                              selectable={false}
                                              style={StyleSheet.applyWidth(
                                                {
                                                  color:
                                                    palettes.App
                                                      .Internal_Bronzed_Gray,
                                                  fontFamily:
                                                    'OpenSans_600SemiBold',
                                                  fontSize: 10,
                                                  lineHeight: 16,
                                                },
                                                dimensions.width
                                              )}
                                            >
                                              {listData?.created_at}
                                            </Text>
                                          </View>
                                          {/* Third Line Frame */}
                                          <View
                                            style={StyleSheet.applyWidth(
                                              {
                                                alignItems: 'center',
                                                flexDirection: 'row',
                                                marginTop: 6,
                                              },
                                              dimensions.width
                                            )}
                                          >
                                            {/* Data Point */}
                                            <Text
                                              accessible={true}
                                              selectable={false}
                                              style={StyleSheet.applyWidth(
                                                {
                                                  color:
                                                    theme.colors.text.strong,
                                                  fontFamily:
                                                    'OpenSans_400Regular',
                                                  fontSize: 12,
                                                  lineHeight: 18,
                                                },
                                                dimensions.width
                                              )}
                                            >
                                              {listData?.comments}
                                            </Text>
                                          </View>
                                        </View>
                                        {/* Right Side Frame */}
                                        <View>
                                          {/* Badge Frame */}
                                          <View
                                            style={StyleSheet.applyWidth(
                                              {
                                                alignItems: 'center',
                                                backgroundColor:
                                                  palettes.App
                                                    .Internal_Primary_Color,
                                                borderRadius: 12,
                                                flexDirection: 'row',
                                                flexGrow: 0,
                                                flexShrink: 0,
                                                justifyContent: 'center',
                                                marginRight: 6,
                                                paddingBottom: 6,
                                                paddingLeft: 6,
                                                paddingRight: 6,
                                                paddingTop: 6,
                                              },
                                              dimensions.width
                                            )}
                                          >
                                            {/* Icon Frame */}
                                            <View
                                              style={StyleSheet.applyWidth(
                                                { marginRight: 3 },
                                                dimensions.width
                                              )}
                                            >
                                              <Icon
                                                color={
                                                  palettes.App.Internal_White
                                                }
                                                name={'Entypo/star'}
                                                size={14}
                                              />
                                            </View>
                                            {/* Badge Label */}
                                            <Text
                                              accessible={true}
                                              selectable={false}
                                              style={StyleSheet.applyWidth(
                                                {
                                                  color:
                                                    palettes.App.Internal_White,
                                                  fontFamily:
                                                    'OpenSans_400Regular',
                                                },
                                                dimensions.width
                                              )}
                                            >
                                              {listData?.ratings}
                                            </Text>
                                          </View>
                                        </View>
                                      </View>
                                    </Touchable>
                                  </View>
                                </View>

                                <SupabaseApi.FetchClientProfileGET>
                                  {({
                                    loading,
                                    error,
                                    data,
                                    refetchClientProfile,
                                  }) => {
                                    const fetchData = data?.json;
                                    if (loading) {
                                      return <ActivityIndicator />;
                                    }

                                    if (
                                      error ||
                                      data?.status < 200 ||
                                      data?.status >= 300
                                    ) {
                                      return <ActivityIndicator />;
                                    }

                                    return (
                                      <SimpleStyleFlatList
                                        data={fetchData}
                                        horizontal={false}
                                        inverted={false}
                                        keyExtractor={(listData, index) =>
                                          listData
                                        }
                                        keyboardShouldPersistTaps={'never'}
                                        listKey={JSON.stringify(fetchData)}
                                        nestedScrollEnabled={false}
                                        numColumns={1}
                                        onEndReachedThreshold={0.5}
                                        renderItem={({ item, index }) => {
                                          const listData = item;
                                          return null;
                                        }}
                                        showsHorizontalScrollIndicator={true}
                                        showsVerticalScrollIndicator={true}
                                        style={StyleSheet.applyWidth(
                                          { flex: 1 },
                                          dimensions.width
                                        )}
                                      />
                                    );
                                  }}
                                </SupabaseApi.FetchClientProfileGET>
                              </View>
                            </View>
                          )}
                        </>
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
      {/* social media */}
      <View
        style={StyleSheet.applyWidth(
          { flexDirection: 'row', marginLeft: '5%', marginRight: '5%' },
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
              {/* Open Sans */}
              <Text
                accessible={true}
                selectable={false}
                selectionColor={theme.colors.text.strong}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.text.strong,
                    fontFamily: 'AkayaKanadaka_400Regular',
                    fontSize: 15,
                    lineHeight: 21,
                  },
                  dimensions.width
                )}
              >
                {'Follow us on'}
              </Text>
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
                  borderColor: palettes.App.Internal_Egg_White,
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
                name={'AntDesign/linkedin-square'}
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
                  borderColor: palettes.App.Internal_Egg_White,
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
                name={'Feather/facebook'}
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
                name={'AntDesign/instagram'}
              />
            </View>
          </Touchable>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(ClientToProfessionalPageOrg2Screen);
