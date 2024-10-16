import React from 'react';
import {
  Button,
  Circle,
  CircleImage,
  Divider,
  FAB,
  Icon,
  Picker,
  ScreenContainer,
  SimpleStyleFlatList,
  SimpleStyleScrollView,
  Spacer,
  Surface,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Image, Modal, Text, View } from 'react-native';
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

const defaultProps = { label: 'label' };

const ClientHomePageeScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [ImageModal, setImageModal] = React.useState(false);
  const [Logout, setLogout] = React.useState(false);
  const [acctvisible, setAcctvisible] = React.useState(false);
  const [countryList, setCountryList] = React.useState([
    'Nigeria',
    'UK',
    'Germany',
  ]);
  const [countryPickervalue, setCountryPickervalue] = React.useState({
    countries: [
      'Afghanistan',
      'Albania',
      'Algeria',
      'Andorra',
      'Angola',
      'Antigua and Barbuda',
      'Argentina',
      'Armenia',
      'Australia',
      'Austria',
      'Azerbaijan',
      'Bahamas',
      'Bahrain',
      'Bangladesh',
      'Barbados',
      'Belarus',
      'Belgium',
      'Belize',
      'Benin',
      'Bhutan',
      'Bolivia',
      'Bosnia and Herzegovina',
      'Botswana',
      'Brazil',
      'Brunei',
      'Bulgaria',
      'Burkina Faso',
      'Burundi',
      'Cabo Verde',
      'Cambodia',
      'Cameroon',
      'Canada',
      'Central African Republic',
      'Chad',
      'Chile',
      'China',
      'Colombia',
      'Comoros',
      'Congo',
      'Costa Rica',
      'Croatia',
      'Cuba',
      'Cyprus',
      'Czech Republic',
      'Denmark',
      'Djibouti',
      'Dominica',
      'Dominican Republic',
      'Ecuador',
      'Egypt',
      'El Salvador',
      'Equatorial Guinea',
      'Eritrea',
      'Estonia',
      'Eswatini',
      'Ethiopia',
      'Fiji',
      'Finland',
      'France',
      'Gabon',
      'Gambia',
      'Georgia',
      'Germany',
      'Ghana',
      'Greece',
      'Grenada',
      'Guatemala',
      'Guinea',
      'Guinea-Bissau',
      'Guyana',
      'Haiti',
      'Honduras',
      'Hungary',
      'Iceland',
      'India',
      'Indonesia',
      'Iran',
      'Iraq',
      'Ireland',
      'Israel',
      'Italy',
      'Ivory Coast',
      'Jamaica',
      'Japan',
      'Jordan',
      'Kazakhstan',
      'Kenya',
      'Kiribati',
      'Kosovo',
      'Kuwait',
      'Kyrgyzstan',
      'Laos',
      'Latvia',
      'Lebanon',
      'Lesotho',
      'Liberia',
      'Libya',
      'Liechtenstein',
      'Lithuania',
      'Luxembourg',
      'Madagascar',
      'Malawi',
      'Malaysia',
      'Maldives',
      'Mali',
      'Malta',
      'Marshall Islands',
      'Mauritania',
      'Mauritius',
      'Mexico',
      'Micronesia',
      'Moldova',
      'Monaco',
      'Mongolia',
      'Montenegro',
      'Morocco',
      'Mozambique',
      'Myanmar',
      'Namibia',
      'Nauru',
      'Nepal',
      'Netherlands',
      'New Zealand',
      'Nicaragua',
      'Niger',
      'Nigeria',
      'North Korea',
      'North Macedonia',
      'Norway',
      'Oman',
      'Pakistan',
      'Palau',
      'Panama',
      'Papua New Guinea',
      'Paraguay',
      'Peru',
      'Philippines',
      'Poland',
      'Portugal',
      'Qatar',
      'Romania',
      'Russia',
      'Rwanda',
      'Saint Kitts and Nevis',
      'Saint Lucia',
      'Saint Vincent and the Grenadines',
      'Samoa',
      'San Marino',
      'Sao Tome and Principe',
      'Saudi Arabia',
      'Senegal',
      'Serbia',
      'Seychelles',
      'Sierra Leone',
      'Singapore',
      'Slovakia',
      'Slovenia',
      'Solomon Islands',
      'Somalia',
      'South Africa',
      'South Korea',
      'South Sudan',
      'Spain',
      'Sri Lanka',
      'Sudan',
      'Suriname',
      'Sweden',
      'Switzerland',
      'Syria',
      'Taiwan',
      'Tajikistan',
      'Tanzania',
      'Thailand',
      'Timor-Leste',
      'Togo',
      'Tonga',
      'Trinidad and Tobago',
      'Tunisia',
      'Turkey',
      'Turkmenistan',
      'Tuvalu',
      'Uganda',
      'Ukraine',
      'United Arab Emirates',
      'United Kingdom',
      'United States',
      'Uruguay',
      'Uzbekistan',
      'Vanuatu',
      'Vatican City',
      'Venezuela',
      'Vietnam',
      'Yemen',
      'Zambia',
      'Zimbabwe',
    ],
  });
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [femalecheck, setFemalecheck] = React.useState(false);
  const [hireme, setHireme] = React.useState(false);
  const [isfiltervisible, setIsfiltervisible] = React.useState(false);
  const [isprofilevisible, setIsprofilevisible] = React.useState(false);
  const [isvideovisible, setIsvideovisible] = React.useState(false);
  const [malecheck, setMalecheck] = React.useState(false);
  const [menuTab1, setMenuTab1] = React.useState(false);
  const [menuTab2, setMenuTab2] = React.useState(false);
  const [menuTab3, setMenuTab3] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [notificationmodal, setNotificationmodal] = React.useState(false);
  const [pricePickerValue, setPricePickerValue] = React.useState('');
  const [professionalPrice, setProfessionalPrice] = React.useState([]);
  const [sliderValue, setSliderValue] = React.useState(0);
  const [switchValue, setSwitchValue] = React.useState(false);
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState(undefined);
  const myFunctionName = (Variables, setGlobalVariableValue, data) => {
    const filteredData = data.filter(item => {
      const searchTerm = textInputValue.toLowerCase();

      return (
        item.firstname.toLowerCase().includes(searchTerm) ||
        //item.surname.toLowerCase().includes(searchTerm) ||
        item.rate.toString().toLowerCase().includes(searchTerm) ||
        item.country.toLowerCase().includes(searchTerm) ||
        item.ratings.toString().toLowerCase().includes(searchTerm) ||
        item.language.toLowerCase().includes(searchTerm) ||
        item.profession.toLowerCase().includes(searchTerm)

        // Add more conditions as needed
      );
    });

    // Set screen variable 'search_is_empty' default to 'false'
    //setSearch_is_empty(false);

    // Check if the filtered data is empty
    //if (filteredData.length === 0) {
    //setSearch_is_empty(true);
    //}

    // Sort the filtered data by first name (or other criteria)
    //filteredData.sort((a, b) => {
    //if (a.firstname.toLowerCase() < b.firstname.toLowerCase()) return -1;
    //if (a.firstname.toLowerCase() > b.firstname.toLowerCase()) return 1;
    //return 0;
    //});

    // Return the filtered and sorted data
    return filteredData;
  };

  const priceFilter = (Variables, setGlobalVariableValue, data) => {
    const filterByPriceRange = (items, minPrice, maxPrice) => {
      return items.filter(
        item => item.price >= minPrice && item.price <= maxPrice
      );
    };

    // Sample usage
    const items = [
      { id: 1, rate: 'rate', rate: 10 },
      { id: 2, rate: 'rate', rate: 25 },
      { id: 3, rate: 'rate', rate: 50 },
    ];

    const filteredItems = filterByPriceRange(items, 10, 50);

    console.log(filteredItems);
  };

  return (
    <ScreenContainer
      scrollable={false}
      hasSafeArea={true}
      hasTopSafeArea={true}
    >
      <Spacer bottom={10} left={'8'} right={'8'} top={10} />
      {/* Top Navigation Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 5,
            marginRight: [
              { minWidth: Breakpoints.Laptop, value: '5%' },
              { minWidth: Breakpoints.Mobile, value: 5 },
            ],
            marginTop: 8,
            paddingBottom: 8,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 8,
          },
          dimensions.width
        )}
      >
        {/* Left Section */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-start',
              bottom: '10%',
              justifyContent: 'center',
              marginLeft: { minWidth: Breakpoints.Desktop, value: 1 },
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.text.medium,
                fontFamily: 'Inter_500Medium',
                fontSize: [
                  { minWidth: Breakpoints.Desktop, value: 25 },
                  { minWidth: Breakpoints.BigScreen, value: 35 },
                  { minWidth: Breakpoints.Laptop, value: 30 },
                  { minWidth: Breakpoints.Mobile, value: 15 },
                  { minWidth: Breakpoints.Tablet, value: 26 },
                ],
              },
              dimensions.width
            )}
          >
            {'Hello, '}
            {Constants['UserLoginRecord'] &&
              Constants['UserLoginRecord'][0]['firstname']}
            {'\n'}
          </Text>

          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', flexDirection: 'row', marginTop: 3 },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors.text.medium}
              name={'Feather/map-pin'}
              size={40}
            />
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.text.strong,
                  fontFamily: 'Inter_700Bold',
                  fontSize: [
                    { minWidth: Breakpoints.Mobile, value: 15 },
                    { minWidth: Breakpoints.Desktop, value: 25 },
                    { minWidth: Breakpoints.BigScreen, value: 35 },
                    { minWidth: Breakpoints.Tablet, value: 26 },
                    { minWidth: Breakpoints.Laptop, value: 30 },
                  ],
                  paddingLeft: 8,
                  paddingRight: 5,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {Constants['UserLoginRecord'] &&
                Constants['UserLoginRecord'][0]['country']}
            </Text>
          </View>
        </View>
        {/* Right Section */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            },
            dimensions.width
          )}
        >
          {/* videoTouchable */}
          <Touchable
            onPress={() => {
              try {
                setIsvideovisible(true);
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Icon
              color={palettes.App.Menu_Slate_Gray_Tab}
              name={'MaterialIcons/ondemand-video'}
              size={44}
              style={StyleSheet.applyWidth({ right: '20%' }, dimensions.width)}
            />
            <Modal
              animationType={'none'}
              supportedOrientations={['portrait', 'landscape']}
              transparent={false}
              visible={isvideovisible}
            >
              {/* Header */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingLeft: 10,
                    paddingRight: 10,
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
                        navigation.replace('ClientHomePageeScreen');
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    <Icon
                      size={24}
                      color={palettes.Brand.Community_Primary_Alt}
                      name={'AntDesign/arrowleft'}
                    />
                  </Touchable>
                </View>
              </View>
              {/* Call View 2 */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flex: 0.75,
                    justifyContent: 'center',
                    paddingBottom: 5,
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 16,
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
                    },
                    dimensions.width
                  )}
                >
                  {/* User 1 */}
                  <View>
                    <Circle bgColor={theme.colors.text.light} size={150}>
                      <Image
                        resizeMode={'cover'}
                        source={imageSource(Images['IconMyChannel'])}
                        style={StyleSheet.applyWidth(
                          { height: '150%', width: '150%' },
                          dimensions.width
                        )}
                      />
                    </Circle>
                  </View>
                  {/* User 2 */}
                  <View
                    style={StyleSheet.applyWidth(
                      { marginLeft: -30 },
                      dimensions.width
                    )}
                  >
                    <Circle bgColor={theme.colors.text.light} size={150}>
                      <Image
                        resizeMode={'cover'}
                        source={imageSource(Images['IconProfile'])}
                        style={StyleSheet.applyWidth(
                          { height: '150%', width: '150%' },
                          dimensions.width
                        )}
                      />
                    </Circle>
                  </View>
                </View>
                {/* join meeting */}
                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.Brand.Community_Primary_Alt,
                      fontFamily: 'Poppins_700Bold',
                      fontSize: 25,
                      marginTop: 50,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                >
                  {'Join Meeting'}
                </Text>

                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.App['Custom Color_8'],
                      fontFamily: 'Poppins_400Regular',
                      fontSize: 15,
                      marginTop: 15,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                >
                  {'Start conversation now to each other'}
                </Text>
              </View>
              {/* Clicks */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignSelf: {
                      minWidth: Breakpoints.Tablet,
                      value: 'center',
                    },
                    flexDirection: 'row',
                    justifyContent: {
                      minWidth: Breakpoints.Tablet,
                      value: 'center',
                    },
                    width: { minWidth: Breakpoints.Tablet, value: '50%' },
                  },
                  dimensions.width
                )}
              >
                {/* join Meeting */}
                <Button
                  iconPosition={'left'}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: palettes.Brand.Community_Primary_Alt,
                      borderRadius: 24,
                      fontFamily: 'Poppins_500Medium',
                      fontSize: 17,
                      height: 48,
                      marginBottom: 25,
                      marginLeft: 40,
                      marginRight: 40,
                      marginTop: 25,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                  title={'Meeting With Jason\n'}
                />
                {/* Start Meeting */}
                <Button
                  iconPosition={'left'}
                  onPress={() => {
                    try {
                      navigation.goBack();
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: palettes.App['Custom Color_4'],
                      borderBottomWidth: 1,
                      borderColor: palettes.Brand.Community_Primary_Alt,
                      borderLeftWidth: 1,
                      borderRadius: 24,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      color: palettes.Brand.Community_Primary_Alt,
                      fontFamily: 'Poppins_500Medium',
                      fontSize: 17,
                      height: 48,
                      textAlign: 'center',
                      top: '25%',
                      width: '20%',
                    },
                    dimensions.width
                  )}
                  title={'Start'}
                />
              </View>
              {/* Clicks 2 */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignSelf: {
                      minWidth: Breakpoints.Tablet,
                      value: 'center',
                    },
                    flexDirection: 'row',
                    justifyContent: {
                      minWidth: Breakpoints.Tablet,
                      value: 'center',
                    },
                    width: { minWidth: Breakpoints.Tablet, value: '50%' },
                  },
                  dimensions.width
                )}
              >
                {/* join Meeting */}
                <Button
                  iconPosition={'left'}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: palettes.Brand.Community_Primary_Alt,
                      borderRadius: 24,
                      fontFamily: 'Poppins_500Medium',
                      fontSize: 17,
                      height: 48,
                      marginBottom: 25,
                      marginLeft: 40,
                      marginRight: 40,
                      marginTop: 25,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                  title={'Meeting With Sarra\n'}
                />
                {/* Start Meeting */}
                <Button
                  iconPosition={'left'}
                  onPress={() => {
                    try {
                      navigation.goBack();
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: palettes.App['Custom Color_4'],
                      borderBottomWidth: 1,
                      borderColor: palettes.Brand.Community_Primary_Alt,
                      borderLeftWidth: 1,
                      borderRadius: 24,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      color: palettes.Brand.Community_Primary_Alt,
                      fontFamily: 'Poppins_500Medium',
                      fontSize: 17,
                      height: 48,
                      textAlign: 'center',
                      top: '25%',
                      width: '20%',
                    },
                    dimensions.width
                  )}
                  title={'Start\n'}
                />
              </View>
            </Modal>
          </Touchable>
          {/* notificationTouchabe */}
          <Touchable
            onPress={() => {
              try {
                setNotificationmodal(true);
              } catch (err) {
                console.error(err);
              }
            }}
          >
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
              <Icon
                color={palettes.App.TextPlaceholder}
                name={'Ionicons/notifications'}
                size={44}
                style={StyleSheet.applyWidth(
                  { marginTop: 14 },
                  dimensions.width
                )}
              />
              <View
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: palettes.App['Custom Color'],
                    borderBottomWidth: 3,
                    borderColor: palettes.App['Custom Color_2'],
                    borderLeftWidth: 3,
                    borderRadius: 7,
                    borderRightWidth: 3,
                    borderTopWidth: 3,
                    height: 14,
                    left: 6,
                    top: -30,
                    width: 14,
                  },
                  dimensions.width
                )}
              />
            </View>
            {/* notificationModal */}
            <Modal
              animationType={'none'}
              supportedOrientations={['portrait', 'landscape']}
              transparent={false}
              visible={notificationmodal}
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
                        navigation.replace('ClientHomePageeScreen');
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
              </View>
              {/* Header Wrapper */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignSelf: 'flex-start',
                    marginBottom: 12,
                    marginTop: 18,
                    paddingLeft: 12,
                    paddingRight: 12,
                  },
                  dimensions.width
                )}
              >
                {/* Updates ~ */}
                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.App.Peoplebit_Dark_Emerald_Green,
                      fontFamily: 'Merriweather_700Bold',
                      fontSize: 27,
                    },
                    dimensions.width
                  )}
                >
                  {'Updates'}
                </Text>
              </View>

              <SimpleStyleScrollView
                bounces={true}
                horizontal={false}
                keyboardShouldPersistTaps={'never'}
                nestedScrollEnabled={false}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
                style={StyleSheet.applyWidth(
                  {
                    flexGrow: 1,
                    flexShrink: 0,
                    paddingLeft: 12,
                    paddingRight: 12,
                  },
                  dimensions.width
                )}
              >
                {/* Content Wrapper */}
                <View>
                  <SupabaseApi.FetchGadgetdescriptionGET>
                    {({ loading, error, data, refetchGadgetdescription }) => {
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
                          listKey={'ZFQ6f6xW'}
                          nestedScrollEnabled={false}
                          numColumns={1}
                          onEndReachedThreshold={0.5}
                          renderItem={({ item, index }) => {
                            const listData = item;
                            return (
                              <Touchable>
                                {/* Surface 3 */}
                                <Surface
                                  elevation={3}
                                  style={StyleSheet.applyWidth(
                                    {
                                      borderColor: theme.colors.border.brand,
                                      borderLeftWidth: 1,
                                      borderRadius: 3,
                                      borderRightWidth: 1,
                                      flexGrow: 1,
                                      flexShrink: 0,
                                      marginBottom: 12,
                                      paddingBottom: 12,
                                      paddingLeft: 9,
                                      paddingRight: 9,
                                      paddingTop: 12,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {/* Record */}
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
                                    {/* Image */}
                                    <CircleImage
                                      size={50}
                                      source={imageSource(
                                        `${listData?.img_src}`
                                      )}
                                    />
                                    {/* Update Information Wrapper */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          flex: 1,
                                          paddingLeft: 9,
                                          paddingRight: 12,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {/* Title ~ */}
                                      <Text
                                        accessible={true}
                                        selectable={false}
                                        ellipsizeMode={'tail'}
                                        numberOfLines={1}
                                        style={StyleSheet.applyWidth(
                                          {
                                            color:
                                              palettes.App
                                                .Peoplebit_Dark_Emerald_Green,
                                            fontFamily: 'Inter_600SemiBold',
                                            fontSize: 14,
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {listData?.title}
                                      </Text>
                                      {/* Details ~ */}
                                      <Text
                                        accessible={true}
                                        selectable={false}
                                        style={StyleSheet.applyWidth(
                                          {
                                            color:
                                              palettes.App
                                                .Peoplebit_Earthy_Brown,
                                            fontFamily: 'System',
                                            fontSize: 10,
                                            fontWeight: '400',
                                            paddingTop: 3,
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {
                                          'QA environment has been primed for production.'
                                        }
                                      </Text>
                                      {/* Time Update */}
                                      <Text
                                        accessible={true}
                                        selectable={false}
                                        style={StyleSheet.applyWidth(
                                          {
                                            color:
                                              palettes.App
                                                .Peoplebit_Light_Brown,
                                            fontSize: 10,
                                            paddingTop: 6,
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {'25 MIN AGO'}
                                      </Text>
                                    </View>

                                    <Touchable>
                                      {/* Delete Wrapper */}
                                      <View
                                        style={StyleSheet.applyWidth(
                                          { flexGrow: 0, flexShrink: 0 },
                                          dimensions.width
                                        )}
                                      >
                                        <Icon
                                          color={palettes.App['Custom Color']}
                                          name={'Ionicons/trash-outline'}
                                          size={18}
                                        />
                                      </View>
                                    </Touchable>
                                  </View>
                                </Surface>
                              </Touchable>
                            );
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
                  </SupabaseApi.FetchGadgetdescriptionGET>
                </View>
              </SimpleStyleScrollView>
              {/* Footer Wrapper */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    bottom: 0,
                    marginBottom: 12,
                    marginTop: 12,
                    paddingLeft: 12,
                    paddingRight: 12,
                    position: 'absolute',
                    right: 24,
                  },
                  dimensions.width
                )}
              >
                {/* New Post Button */}
                <FAB
                  loading={false}
                  size={32}
                  bgColor={palettes.App.Peoplebit_Ocean_Blue}
                  iconSize={32}
                />
              </View>
            </Modal>
          </Touchable>
          {/* profileTouchable */}
          <Touchable
            onPress={() => {
              try {
                setIsprofilevisible(true);
              } catch (err) {
                console.error(err);
              }
            }}
            disabled={false}
            style={StyleSheet.applyWidth({ marginLeft: 12 }, dimensions.width)}
          >
            <Surface
              elevation={3}
              style={StyleSheet.applyWidth(
                {
                  borderRadius: 20,
                  justifyContent: 'center',
                  minHeight: 40,
                  opacity: { minWidth: Breakpoints.Tablet, value: 0.98 },
                  overflow: 'hidden',
                },
                dimensions.width
              )}
            >
              <CircleImage
                size={55}
                source={imageSource('Images["EditProfile"]')}
              />
            </Surface>
            {/* profileModal */}
            <Modal
              animationType={'none'}
              supportedOrientations={['portrait', 'landscape']}
              presentationStyle={'pageSheet'}
              transparent={true}
              visible={isprofilevisible}
            >
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
                        { minWidth: Breakpoints.Mobile, value: '22%' },
                        { minWidth: Breakpoints.Tablet, value: '35%' },
                        { minWidth: Breakpoints.Laptop, value: '30%' },
                      ],
                      marginLeft: [
                        { minWidth: Breakpoints.Mobile, value: '70%' },
                        { minWidth: Breakpoints.Tablet, value: '78%' },
                      ],
                      marginTop: [
                        { minWidth: Breakpoints.Mobile, value: '25%' },
                        { minWidth: Breakpoints.Tablet, value: '13%' },
                        { minWidth: Breakpoints.Laptop, value: '11%' },
                        { minWidth: Breakpoints.Desktop, value: '8%' },
                        { minWidth: Breakpoints.BigScreen, value: '6%' },
                      ],
                      maxWidth: [
                        { minWidth: Breakpoints.Desktop, value: '2%' },
                        { minWidth: Breakpoints.Laptop, value: '0%' },
                      ],
                      minHeight: null,
                      minWidth: { minWidth: Breakpoints.Laptop, value: '0%' },
                      paddingBottom: '10%',
                      paddingLeft: '10%',
                      paddingRight: '10%',
                      paddingTop: '10%',
                      width: [
                        { minWidth: Breakpoints.Mobile, value: '30%' },
                        { minWidth: Breakpoints.Tablet, value: '8%' },
                        { minWidth: Breakpoints.Laptop, value: '5%' },
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
                      alignItems: {
                        minWidth: Breakpoints.Tablet,
                        value: 'center',
                      },
                      alignSelf: {
                        minWidth: Breakpoints.Tablet,
                        value: 'center',
                      },
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
                        alignContent: {
                          minWidth: Breakpoints.Tablet,
                          value: 'center',
                        },
                        alignItems: {
                          minWidth: Breakpoints.Tablet,
                          value: 'center',
                        },
                        bottom: [
                          { minWidth: Breakpoints.Mobile, value: '12%' },
                          { minWidth: Breakpoints.Tablet, value: '20%' },
                          { minWidth: Breakpoints.Desktop, value: '30%' },
                        ],
                        flexDirection: 'row',
                        height: 48,
                        justifyContent: [
                          {
                            minWidth: Breakpoints.Mobile,
                            value: 'space-between',
                          },
                          { minWidth: Breakpoints.Tablet, value: 'center' },
                        ],
                        left: [
                          { minWidth: Breakpoints.Mobile, value: 25 },
                          { minWidth: Breakpoints.Tablet, value: 60 },
                          { minWidth: Breakpoints.Laptop, value: 80 },
                          { minWidth: Breakpoints.Desktop, value: 100 },
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
                            name={'AntDesign/closecircleo'}
                            size={StyleSheet.getWidthValue(
                              [
                                { minWidth: Breakpoints.Desktop, value: 45 },
                                { minWidth: Breakpoints.Mobile, value: 25 },
                              ],
                              dimensions.width
                            )}
                          />
                        </Touchable>
                      </View>
                    </View>
                  </View>
                  {/* Menu */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignContent: 'center',
                        alignSelf: 'center',
                        bottom: [
                          { minWidth: Breakpoints.Mobile, value: '30%' },
                          { minWidth: Breakpoints.Laptop, value: '22%' },
                          { minWidth: Breakpoints.Tablet, value: '25%' },
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
                          if (navigation.canGoBack()) {
                            navigation.popToTop();
                          }
                          navigation.replace('AccountEditScreen');
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
                                  { minWidth: Breakpoints.Tablet, value: 20 },
                                  { minWidth: Breakpoints.Desktop, value: 35 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 45,
                                  },
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
                                  { minWidth: Breakpoints.Tablet, value: 20 },
                                  { minWidth: Breakpoints.Desktop, value: 35 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 45,
                                  },
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
                                  { minWidth: Breakpoints.Tablet, value: 20 },
                                  { minWidth: Breakpoints.Desktop, value: 35 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 45,
                                  },
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
                                  { minWidth: Breakpoints.Tablet, value: 20 },
                                  { minWidth: Breakpoints.Desktop, value: 35 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 45,
                                  },
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
                                  { minWidth: Breakpoints.Tablet, value: 20 },
                                  { minWidth: Breakpoints.Desktop, value: 35 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 45,
                                  },
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
                                width: [
                                  {
                                    minWidth: Breakpoints.Mobile,
                                    value: '100%',
                                  },
                                  {
                                    minWidth: Breakpoints.Tablet,
                                    value: '60%',
                                  },
                                  {
                                    minWidth: Breakpoints.Desktop,
                                    value: '50%',
                                  },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: '40%',
                                  },
                                ],
                              },
                              dimensions.width
                            )}
                          >
                            {/* Cancel */}
                            <Button
                              iconPosition={'left'}
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
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor:
                                    palettes.App['Custom Color_18'],
                                  borderRadius: 100,
                                  color: palettes.App['Custom Color'],
                                  fontFamily: 'Inter_600SemiBold',
                                  fontSize: 16,
                                  height: 58,
                                  textAlign: 'center',
                                  width: {
                                    minWidth: Breakpoints.Tablet,
                                    value: '38%',
                                  },
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
                                  /* hidden 'Set Variable' action */
                                  if (navigation.canGoBack()) {
                                    navigation.popToTop();
                                  }
                                  navigation.replace('StartUpPageScreen');
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor:
                                    theme.colors.branding.primary,
                                  borderRadius: 100,
                                  fontFamily: 'Inter_600SemiBold',
                                  fontSize: 16,
                                  height: 58,
                                  textAlign: 'center',
                                  width: {
                                    minWidth: Breakpoints.Tablet,
                                    value: '38%',
                                  },
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
            </Modal>
          </Touchable>
        </View>
      </View>
      {/* Search And Filter  */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: [
              { minWidth: Breakpoints.Tablet, value: '2%' },
              { minWidth: Breakpoints.Mobile, value: '2%' },
            ],
            marginTop: 10,
            paddingBottom: 16,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 16,
            position: 'relative',
            width: [
              { minWidth: Breakpoints.Mobile, value: '95%' },
              { minWidth: Breakpoints.Laptop, value: '97%' },
              { minWidth: Breakpoints.Tablet, value: '95%' },
            ],
          },
          dimensions.width
        )}
      >
        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
          <Surface
            elevation={3}
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: palettes.Brand.Surface,
                borderRadius: 12,
                flex: 1,
                flexDirection: 'row',
                height: 48,
                justifyContent: 'space-between',
                minHeight: 48,
                paddingRight: 16,
              },
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
              placeholder={'Search'}
              placeholderTextColor={theme.colors.text.strong}
              style={StyleSheet.applyWidth(
                {
                  borderRadius: 8,
                  color: theme.colors.text.strong,
                  fontFamily: 'Inter_400Regular',
                  fontSize: [
                    { minWidth: Breakpoints.Mobile, value: 15 },
                    { minWidth: Breakpoints.Desktop, value: 30 },
                    { minWidth: Breakpoints.BigScreen, value: 35 },
                    { minWidth: Breakpoints.Laptop, value: 30 },
                    { minWidth: Breakpoints.Tablet, value: 25 },
                  ],
                  height: 48,
                  paddingBottom: 8,
                  paddingLeft: 24,
                  paddingRight: 8,
                  paddingTop: 8,
                  width: '100%',
                },
                dimensions.width
              )}
              value={textInputValue}
            />
            <Icon
              color={palettes.App.TextPlaceholder}
              name={'Feather/search'}
              size={35}
            />
          </Surface>
        </View>

        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              gap: 4,
              left: '5%',
              marginLeft: 16,
              width: '40%',
            },
            dimensions.width
          )}
        >
          <>
            {!true ? null : (
              <Touchable
                onPress={() => {
                  const handler = async () => {
                    try {
                      (await SupabaseApi.getpriceGET(Constants))?.json;
                      undefined;
                    } catch (err) {
                      console.error(err);
                    }
                  };
                  handler();
                }}
                style={StyleSheet.applyWidth(
                  { width: '50%' },
                  dimensions.width
                )}
              >
                <Picker
                  dropDownBackgroundColor={theme.colors.background.brand}
                  dropDownBorderColor={theme.colors.border.brand}
                  dropDownBorderRadius={8}
                  dropDownBorderWidth={1}
                  dropDownTextColor={theme.colors.text.strong}
                  leftIconMode={'inset'}
                  onValueChange={newPickerValue => {
                    const handler = async () => {
                      const pickerValue = newPickerValue;
                      try {
                        const successful = (
                          await SupabaseApi.getpriceGET(Constants)
                        )?.json;
                        setPricePickerValue(newPickerValue);
                      } catch (err) {
                        console.error(err);
                      }
                    };
                    handler();
                  }}
                  selectedIconColor={theme.colors.text.strong}
                  selectedIconName={'Feather/check'}
                  assistiveText={''}
                  autoDismissKeyboard={true}
                  iconSize={35}
                  label={'Price'}
                  mode={'dropdown-modal'}
                  placeholder={''}
                  placeholderTextColor={theme.colors.text.strong}
                  selectedIconSize={35}
                  style={StyleSheet.applyWidth(
                    {
                      fontSize: [
                        { minWidth: Breakpoints.Mobile, value: 11 },
                        { minWidth: Breakpoints.Desktop, value: 23 },
                        { minWidth: Breakpoints.BigScreen, value: 27 },
                        { minWidth: Breakpoints.Laptop, value: 25 },
                        { minWidth: Breakpoints.Tablet, value: 20 },
                      ],
                      textAlign: {
                        minWidth: Breakpoints.Laptop,
                        value: 'auto',
                      },
                      width: '70%',
                    },
                    dimensions.width
                  )}
                  type={'underline'}
                  value={pricePickerValue}
                />
              </Touchable>
            )}
          </>
          {/* Touchable 2 */}
          <>
            {!true ? null : (
              <Touchable
                onPress={() => {
                  try {
                    setIsfiltervisible(true);
                    /* 'If/Else' action requires configuration: select If Condition */
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { width: '50%' },
                  dimensions.width
                )}
              >
                <Picker
                  dropDownBackgroundColor={theme.colors.background.brand}
                  dropDownBorderColor={theme.colors.border.brand}
                  dropDownBorderRadius={8}
                  dropDownBorderWidth={1}
                  dropDownTextColor={theme.colors.text.strong}
                  leftIconMode={'inset'}
                  onValueChange={newPickerValue => {
                    try {
                      /* 'Set Variable' action requires configuration: choose a variable */
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  selectedIconColor={theme.colors.text.strong}
                  selectedIconName={'Feather/check'}
                  assistiveText={''}
                  autoDismissKeyboard={false}
                  iconSize={35}
                  label={'Country'}
                  mode={'dropdown-modal'}
                  options={countryList}
                  placeholder={''}
                  placeholderTextColor={theme.colors.text.strong}
                  selectedIconSize={35}
                  style={StyleSheet.applyWidth(
                    {
                      color: {
                        minWidth: Breakpoints.Tablet,
                        value: theme.colors.text.strong,
                      },
                      fontSize: [
                        { minWidth: Breakpoints.Mobile, value: 11.5 },
                        { minWidth: Breakpoints.Desktop, value: 23 },
                        { minWidth: Breakpoints.BigScreen, value: 27 },
                        { minWidth: Breakpoints.Laptop, value: 25 },
                        { minWidth: Breakpoints.Tablet, value: 20 },
                      ],
                      width: '70%',
                    },
                    dimensions.width
                  )}
                  type={'underline'}
                />
              </Touchable>
            )}
          </>
        </View>
        <Surface
          elevation={0}
          {...GlobalStyles.SurfaceStyles(theme)['Surface'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.SurfaceStyles(theme)['Surface'].style,
            dimensions.width
          )}
        />
      </View>
      {/* Recommendation */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: theme.colors.background.brand,
            borderBottomWidth: 1,
            borderColor: theme.colors.border.brand,
            borderLeftWidth: 1,
            borderRadius: 12,
            borderRightWidth: 1,
            borderTopWidth: 1,
            flexDirection: 'row',
            height: 48,
            marginBottom: 15,
            marginLeft: '2%',
            marginRight: '2%',
            marginTop: 15,
            paddingLeft: 20,
            paddingRight: 20,
          },
          dimensions.width
        )}
      >
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text 2'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'].style, {
              fontFamily: 'ADLaMDisplay_400Regular',
              fontSize: [
                { minWidth: Breakpoints.Mobile, value: 16 },
                { minWidth: Breakpoints.Tablet, value: 26 },
                { minWidth: Breakpoints.Laptop, value: 36 },
              ],
            }),
            dimensions.width
          )}
        >
          {'Recommended'}
        </Text>
      </View>
      {/* grid */}
      <SupabaseApi.FetchProfessionalprofileGET
        handlers={{
          on2xx: gridData => {
            try {
              setCountryPickervalue(gridData?.json?.[0]?.rate);
            } catch (err) {
              console.error(err);
            }
          },
        }}
      >
        {({ loading, error, data, refetchProfessionalprofile }) => {
          const gridData = data?.json;
          if (loading) {
            return <ActivityIndicator />;
          }

          if (error || data?.status < 200 || data?.status >= 300) {
            return <ActivityIndicator />;
          }

          return (
            <SimpleStyleFlatList
              data={myFunctionName(Variables, setGlobalVariableValue, gridData)}
              horizontal={false}
              inverted={false}
              keyExtractor={(listData, index) =>
                listData?.id ??
                listData?.uuid ??
                index?.toString() ??
                JSON.stringify(listData)
              }
              keyboardShouldPersistTaps={'never'}
              listKey={'IdiH5I7d'}
              nestedScrollEnabled={false}
              numColumns={1}
              onEndReachedThreshold={0.5}
              renderItem={({ item, index }) => {
                const listData = item;
                return (
                  <Touchable
                    onPress={() => {
                      try {
                        setGlobalVariableValue({
                          key: 'findProfessional',
                          value: listData?.firstname,
                        });
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
                    style={StyleSheet.applyWidth(
                      { marginTop: 5, width: '98%' },
                      dimensions.width
                    )}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: {
                            minWidth: Breakpoints.Tablet,
                            value: 'flex-start',
                          },
                          alignSelf: {
                            minWidth: Breakpoints.Tablet,
                            value: 'baseline',
                          },
                          backgroundColor: theme.colors.background.brand,
                          borderRadius: 12,
                          flexDirection: [
                            { minWidth: Breakpoints.Mobile, value: 'column' },
                            { minWidth: Breakpoints.Tablet, value: 'column' },
                          ],
                          flexWrap: 'wrap',
                          justifyContent: [
                            {
                              minWidth: Breakpoints.Mobile,
                              value: 'space-around',
                            },
                            {
                              minWidth: Breakpoints.Tablet,
                              value: 'flex-start',
                            },
                          ],
                          paddingBottom: 20,
                          paddingLeft: 20,
                          paddingRight: 20,
                          paddingTop: 20,
                        },
                        dimensions.width
                      )}
                    >
                      <Image
                        resizeMode={'cover'}
                        source={imageSource(Images['User'])}
                        style={StyleSheet.applyWidth(
                          {
                            borderRadius: 4,
                            height: 135,
                            width: [
                              { minWidth: Breakpoints.Mobile, value: 140 },
                              { minWidth: Breakpoints.Tablet, value: '100%' },
                            ],
                          },
                          dimensions.width
                        )}
                      />
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            marginTop: 7,
                            width: [
                              { minWidth: Breakpoints.Mobile, value: 140 },
                              { minWidth: Breakpoints.Tablet, value: '100%' },
                            ],
                          },
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
                              fontFamily: 'Inter_500Medium',
                              fontSize: [
                                { minWidth: Breakpoints.Mobile, value: 15 },
                                { minWidth: Breakpoints.Tablet, value: 16 },
                                { minWidth: Breakpoints.Laptop, value: 24 },
                              ],
                              opacity: 0.7,
                            },
                            dimensions.width
                          )}
                        >
                          {listData?.firstname} {listData?.country}
                        </Text>
                        {/* profession */}
                        <Text
                          accessible={true}
                          selectable={false}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.branding.primary,
                              fontFamily: 'Inter_500Medium',
                              fontSize: [
                                { minWidth: Breakpoints.Tablet, value: 16 },
                                { minWidth: Breakpoints.Laptop, value: 24 },
                              ],
                              marginTop: 5,
                            },
                            dimensions.width
                          )}
                        >
                          {listData?.profession}
                        </Text>
                      </View>
                      {/* View 2 */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            flexDirection: 'row',
                            marginTop: 7,
                            width: [
                              { minWidth: Breakpoints.Mobile, value: 140 },
                              { minWidth: Breakpoints.Tablet, value: '100%' },
                            ],
                          },
                          dimensions.width
                        )}
                      >
                        <Icon
                          size={24}
                          color={palettes.App.Internal_Yellow_Secondary}
                          name={'MaterialIcons/star-rate'}
                        />
                        {/* Icon 2 */}
                        <Icon
                          size={24}
                          color={palettes.App.Internal_Yellow_Secondary}
                          name={'MaterialIcons/star-rate'}
                        />
                        {/* Icon 3 */}
                        <Icon
                          size={24}
                          color={palettes.App.Internal_Yellow_Secondary}
                          name={'MaterialIcons/star-rate'}
                        />
                        {/* Icon 5 */}
                        <Icon
                          size={24}
                          color={palettes.App.Internal_Yellow_Secondary}
                          name={'MaterialIcons/star-rate'}
                        />
                        {/* Icon 4 */}
                        <Icon
                          size={24}
                          color={palettes.App.Internal_Yellow_Secondary}
                          name={'MaterialIcons/star-rate'}
                        />
                      </View>
                      {/* View 3 */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            marginTop: 7,
                            width: [
                              { minWidth: Breakpoints.Mobile, value: 140 },
                              { minWidth: Breakpoints.Tablet, value: '100%' },
                            ],
                          },
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
                              fontFamily: 'Inter_500Medium',
                              fontSize: [
                                { minWidth: Breakpoints.Mobile, value: 13 },
                                { minWidth: Breakpoints.Tablet, value: 16 },
                                { minWidth: Breakpoints.Laptop, value: 20 },
                              ],
                              opacity: 0.7,
                            },
                            dimensions.width
                          )}
                        >
                          {listData?.rate}{' '}
                        </Text>
                      </View>
                    </View>
                  </Touchable>
                );
              }}
              showsHorizontalScrollIndicator={true}
              showsVerticalScrollIndicator={true}
              style={StyleSheet.applyWidth(
                {
                  alignSelf: { minWidth: Breakpoints.Tablet, value: 'auto' },
                  flexDirection: [
                    { minWidth: Breakpoints.Tablet, value: 'row' },
                    { minWidth: Breakpoints.Mobile, value: 'row' },
                  ],
                  flexWrap: [
                    { minWidth: Breakpoints.Tablet, value: 'wrap' },
                    { minWidth: Breakpoints.Mobile, value: 'wrap' },
                  ],
                  justifyContent: {
                    minWidth: Breakpoints.Tablet,
                    value: 'space-around',
                  },
                  margin: { minWidth: Breakpoints.Tablet, value: 10 },
                },
                dimensions.width
              )}
            />
          );
        }}
      </SupabaseApi.FetchProfessionalprofileGET>
      {/* social media */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignContent: 'flex-start',
            alignSelf: 'auto',
            flexDirection: 'row',
            marginLeft: '5%',
            marginRight: '5%',
            position: 'relative',
          },
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

export default withTheme(ClientHomePageeScreen);
