import React from 'react';
import {
  Button,
  CircleImage,
  DatePicker,
  Divider,
  FAB,
  Icon,
  Picker,
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

const ClientHomePageTestingScreen = props => {
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
  const [hireme, setHireme] = React.useState(false);
  const [isfiltervisible, setIsfiltervisible] = React.useState(false);
  const [isprofilevisible, setIsprofilevisible] = React.useState(false);
  const [menuTab1, setMenuTab1] = React.useState(false);
  const [menuTab2, setMenuTab2] = React.useState(false);
  const [menuTab3, setMenuTab3] = React.useState(false);
  const [notificationmodal, setNotificationmodal] = React.useState(false);
  const [pricePickerValue, setPricePickerValue] = React.useState('');
  const [professionalPrice, setProfessionalPrice] = React.useState([]);
  const [sliderValue, setSliderValue] = React.useState(0);
  const [switchValue, setSwitchValue] = React.useState(false);
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');
  const [date, setDate] = React.useState(new Date());
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

  const transformCountry = data => {
    //(data) => {
    //return data.map(country => ({
    //label: country.name,
    //value: country.id
    //}));
    //}
  };

  const priceFilter = (Variables, setGlobalVariableValue, data) => {
    //const filterByPriceRange = (items, minPrice, maxPrice) => {
    //return items.filter(item => item.price >= minPrice && item.price <= maxPrice);
    //};
    // Sample usage
    //const items = [
    //{ id: 1, rate: 'rate', rate: 10 },
    //{ id: 2, rate: 'rate', rate: 25 },
    //{ id: 3, rate: 'rate', rate: 50 }
    //];
    //const filteredItems = filterByPriceRange(items, 10, 50);
    //console.log(filteredItems);
  };

  return (
    <ScreenContainer
      scrollable={false}
      hasSafeArea={true}
      hasTopSafeArea={false}
    >
      {/* Top Navigation Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginRight: { minWidth: Breakpoints.Laptop, value: '5%' },
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
            { alignItems: 'flex-start', justifyContent: 'center' },
            dimensions.width
          )}
        >
          <Spacer bottom={8} left={8} right={8} top={16} />
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.text.medium,
                fontFamily: 'Inter_500Medium',
                fontSize: [
                  { minWidth: Breakpoints.Mobile, value: 16 },
                  { minWidth: Breakpoints.Desktop, value: 25 },
                  { minWidth: Breakpoints.BigScreen, value: 35 },
                  { minWidth: Breakpoints.Laptop, value: 30 },
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
              size={44}
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
          <Touchable>
            <Icon
              color={palettes.App.Menu_Slate_Gray_Tab}
              name={'MaterialIcons/ondemand-video'}
              size={44}
              style={StyleSheet.applyWidth({ right: '20%' }, dimensions.width)}
            />
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
                  <Touchable>
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
                          listKey={'1dJdTCvT'}
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
                  overflow: 'hidden',
                },
                dimensions.width
              )}
            >
              <CircleImage size={55} source={imageSource('Images["User"]')} />
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
                                keyExtractor={(listData, index) => listData}
                                keyboardShouldPersistTaps={'never'}
                                listKey={'D9THY0JT'}
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
                                                name={
                                                  'Ionicons/arrow-back-sharp'
                                                }
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
                                                    minWidth:
                                                      Breakpoints.Laptop,
                                                    value:
                                                      theme.colors.text.strong,
                                                  },
                                                  {
                                                    minWidth:
                                                      Breakpoints.Mobile,
                                                    value:
                                                      theme.colors.text.strong,
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
                                      >
                                        {/* Profile Picture */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              alignItems: 'center',
                                              marginTop: 30,
                                            },
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
                                                size={100}
                                                source={imageSource(
                                                  'Images["User"]'
                                                )}
                                              />
                                              {/* User Image */}
                                              <CircleImage
                                                size={100}
                                                source={imageSource('')}
                                                style={StyleSheet.applyWidth(
                                                  { position: 'absolute' },
                                                  dimensions.width
                                                )}
                                              />
                                              {/* Edit Icon */}
                                              <CircleImage
                                                size={32}
                                                source={Images.Edit}
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
                                              flexDirection: {
                                                minWidth: Breakpoints.Tablet,
                                                value: 'row',
                                              },
                                              gap: {
                                                minWidth: Breakpoints.Tablet,
                                                value: 0,
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
                                                  color:
                                                    theme.colors.text.strong,
                                                  fontFamily:
                                                    'Inter_400Regular',
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
                                                    palettes.App[
                                                      'Custom Color_4'
                                                    ],
                                                  borderLeftWidth: 0.5,
                                                  borderRadius: 8,
                                                  borderRightWidth: 0.5,
                                                  borderTopWidth: 0.5,
                                                  color:
                                                    palettes.App[
                                                      'Custom Color_2'
                                                    ],
                                                  fontFamily:
                                                    'Inter_400Regular',
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
                                                  color:
                                                    theme.colors.text.strong,
                                                  fontFamily:
                                                    'Inter_400Regular',
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
                                                    palettes.App[
                                                      'Custom Color_4'
                                                    ],
                                                  borderLeftWidth: 1,
                                                  borderRadius: 8,
                                                  borderRightWidth: 1,
                                                  borderTopWidth: 1,
                                                  color:
                                                    palettes.App[
                                                      'Custom Color_2'
                                                    ],
                                                  fontFamily:
                                                    'Inter_400Regular',
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
                                              flexDirection: {
                                                minWidth: Breakpoints.Tablet,
                                                value: 'row',
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
                                                  color:
                                                    theme.colors.text.strong,
                                                  fontFamily:
                                                    'Inter_400Regular',
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
                                                    palettes.App[
                                                      'Custom Color_4'
                                                    ],
                                                  borderLeftWidth: 1,
                                                  borderRadius: 8,
                                                  borderRightWidth: 1,
                                                  borderTopWidth: 1,
                                                  color:
                                                    palettes.App[
                                                      'Custom Color_2'
                                                    ],
                                                  fontFamily:
                                                    'Inter_400Regular',
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
                                                  color:
                                                    theme.colors.text.strong,
                                                  fontFamily:
                                                    'Inter_400Regular',
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
                                              flexDirection: {
                                                minWidth: Breakpoints.Tablet,
                                                value: 'row',
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
                                                  color:
                                                    theme.colors.text.strong,
                                                  fontFamily:
                                                    'Inter_400Regular',
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
                                              placeholder={
                                                'someone@draftbit.com'
                                              }
                                              placeholderTextColor={
                                                theme.colors.text.strong
                                              }
                                              style={StyleSheet.applyWidth(
                                                {
                                                  borderBottomWidth: 0.5,
                                                  borderColor:
                                                    palettes.App[
                                                      'Custom Color_4'
                                                    ],
                                                  borderLeftWidth: 0.5,
                                                  borderRadius: 8,
                                                  borderRightWidth: 0.5,
                                                  borderTopWidth: 0.5,
                                                  color:
                                                    palettes.App[
                                                      'Custom Color_2'
                                                    ],
                                                  fontFamily:
                                                    'Inter_400Regular',
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
                                                  color:
                                                    theme.colors.text.strong,
                                                  fontFamily:
                                                    'Inter_400Regular',
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
                                                    palettes.App[
                                                      'Custom Color_4'
                                                    ],
                                                  borderLeftWidth: 0.5,
                                                  borderRadius: 8,
                                                  borderRightWidth: 0.5,
                                                  borderTopWidth: 0.5,
                                                  color:
                                                    theme.colors.text.strong,
                                                  fontFamily:
                                                    'Inter_400Regular',
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
                                                      palettes.App[
                                                        'Custom Color_4'
                                                      ],
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
                                                  color={
                                                    palettes.App[
                                                      'Custom Color_2'
                                                    ]
                                                  }
                                                  name={
                                                    'FontAwesome/circle-thin'
                                                  }
                                                />
                                                <Text
                                                  accessible={true}
                                                  selectable={false}
                                                  style={StyleSheet.applyWidth(
                                                    {
                                                      color:
                                                        theme.colors.text
                                                          .strong,
                                                      fontFamily:
                                                        'Inter_400Regular',
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
                                                    {
                                                      left: 12,
                                                      position: 'absolute',
                                                    },
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
                                                      palettes.App[
                                                        'Custom Color_4'
                                                      ],
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
                                                  color={
                                                    palettes.App[
                                                      'Custom Color_2'
                                                    ]
                                                  }
                                                  name={
                                                    'FontAwesome/circle-thin'
                                                  }
                                                />
                                                <Text
                                                  accessible={true}
                                                  selectable={false}
                                                  style={StyleSheet.applyWidth(
                                                    {
                                                      color:
                                                        theme.colors.text
                                                          .strong,
                                                      fontFamily:
                                                        'Inter_400Regular',
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
                                                    {
                                                      left: 12,
                                                      position: 'absolute',
                                                    },
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
                                              flexDirection: {
                                                minWidth: Breakpoints.Tablet,
                                                value: 'row',
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
                                                  color:
                                                    theme.colors.text.strong,
                                                  fontFamily:
                                                    'Inter_400Regular',
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
                                                    palettes.App[
                                                      'Custom Color_4'
                                                    ],
                                                  borderLeftWidth: 0.5,
                                                  borderRadius: 8,
                                                  borderRightWidth: 0.5,
                                                  borderTopWidth: 0.5,
                                                  color:
                                                    theme.colors.text.strong,
                                                  fontFamily:
                                                    'Inter_400Regular',
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
                                                  color:
                                                    theme.colors.text.strong,
                                                  fontFamily:
                                                    'Inter_400Regular',
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
                                                    palettes.App[
                                                      'Custom Color_4'
                                                    ],
                                                  borderLeftWidth: 1,
                                                  borderRadius: 8,
                                                  borderRightWidth: 1,
                                                  borderTopWidth: 1,
                                                  color:
                                                    theme.colors.text.strong,
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
                                          style={StyleSheet.applyWidth(
                                            {
                                              backgroundColor:
                                                theme.colors.text.strong,
                                              borderRadius: 24,
                                              color:
                                                palettes.App['Custom Color_2'],
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
                              onPress={() => {
                                try {
                                  setLogout(false);
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
                                  setLogout(false);
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
                style={StyleSheet.applyWidth(
                  { width: '50%' },
                  dimensions.width
                )}
              >
                <SupabaseApi.FetchGetCountryGET>
                  {({ loading, error, data, refetchGetCountry }) => {
                    const fetchData = data?.json;
                    if (loading) {
                      return <ActivityIndicator />;
                    }

                    if (error || data?.status < 200 || data?.status >= 300) {
                      return <ActivityIndicator />;
                    }

                    return (
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
                        mode={'dropdown-modal'}
                        options={transformCountry(fetchData)}
                        placeholder={'Country'}
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
                              { minWidth: Breakpoints.Tablet, value: 20 },
                              { minWidth: Breakpoints.Laptop, value: 18 },
                            ],
                            width: '70%',
                          },
                          dimensions.width
                        )}
                        type={'underline'}
                      />
                    );
                  }}
                </SupabaseApi.FetchGetCountryGET>
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
              listKey={'1z1yAFE7'}
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

export default withTheme(ClientHomePageTestingScreen);
