import React from 'react';
import {
  Button,
  Circle,
  CircleImage,
  Icon,
  IconButton,
  Link,
  ScreenContainer,
  SimpleStyleFlatList,
  Spacer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Image, Text, View } from 'react-native';
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

const ProfprofilepageScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [EndDate, setEndDate] = React.useState(new Date());
  const [Institute, setInstitute] = React.useState('');
  const [SelectedTab, setSelectedTab] = React.useState('');
  const [bioinput, setBioinput] = React.useState('');
  const [comStartDate, setComStartDate] = React.useState(new Date());
  const [comendDate, setComendDate] = React.useState(new Date());
  const [company, setCompany] = React.useState('');
  const [countryValue, setCountryValue] = React.useState('');
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [educationentries, setEducationentries] = React.useState([]);
  const [experienceValue, setExperienceValue] = React.useState('');
  const [firstname, setFirstname] = React.useState('');
  const [menuTab1, setMenuTab1] = React.useState(true);
  const [menuTab2, setMenuTab2] = React.useState(false);
  const [menuTab3, setMenuTab3] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [save, setSave] = React.useState(false);
  const [startDate, setStartDate] = React.useState(new Date());
  const [submit, setSubmit] = React.useState(false);
  const [surname, setSurname] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      scrollable={false}
      hasSafeArea={true}
      style={StyleSheet.applyWidth(
        { backgroundColor: palettes.App.Community_White },
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
            zIndex: 12,
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
              { flexGrow: 1, flexShrink: 0, justifyContent: 'center' },
              dimensions.width
            )}
          >
            <Touchable>
              <Circle
                bgColor={palettes.App.Community_Modal_Opacity_Overlay}
                size={31}
                style={StyleSheet.applyWidth(
                  { backgroundColor: palettes.Brand['Light 2'] },
                  dimensions.width
                )}
              >
                <Icon
                  color={palettes.Brand.Community_Primary_Alt}
                  name={'Ionicons/caret-back'}
                  size={18}
                />
              </Circle>
            </Touchable>
          </View>
        </View>
      </View>

      <SupabaseApi.FetchFindprofessionalbynameGET name={'Amina'}>
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
              keyExtractor={(listData, index) =>
                listData?.id ??
                listData?.uuid ??
                index?.toString() ??
                JSON.stringify(listData)
              }
              keyboardShouldPersistTaps={'never'}
              listKey={'9ohZ8MNA'}
              nestedScrollEnabled={false}
              numColumns={1}
              onEndReachedThreshold={0.5}
              renderItem={({ item, index }) => {
                const listData = item;
                return (
                  <>
                    {/* Hero Frame */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          marginBottom: 6,
                          marginLeft: 3,
                          marginRight: 3,
                          marginTop: -54,
                          overflow: 'hidden',
                        },
                        dimensions.width
                      )}
                    >
                      <Image
                        resizeMode={'cover'}
                        source={imageSource(
                          Images['JonathanBorbaKgCSRo4SiT8Unsplash']
                        )}
                        style={StyleSheet.applyWidth(
                          {
                            height: 150,
                            width: [
                              { minWidth: Breakpoints.Mobile, value: 500 },
                              { minWidth: Breakpoints.Tablet, value: '100%' },
                            ],
                          },
                          dimensions.width
                        )}
                      />
                      <IconButton
                        color={theme.colors.background.brand}
                        icon={'Entypo/edit'}
                        size={20}
                        style={StyleSheet.applyWidth(
                          { bottom: '80%', left: '90%', zIndex: 100 },
                          dimensions.width
                        )}
                      />
                    </View>
                    {/* Profile Image Frame */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'flex-end',
                          marginTop: -80,
                          paddingRight: 18,
                          zIndex: 20,
                        },
                        dimensions.width
                      )}
                    >
                      <Spacer bottom={8} left={8} right={8} top={8} />
                      {/* Profile Image Background */}
                      <Circle bgColor={palettes.App.Community_White} size={96}>
                        {/* Profile Image */}
                        <CircleImage
                          source={imageSource(
                            'https://static.draftbit.com/images/placeholder-image.png'
                          )}
                          size={120}
                        />
                      </Circle>
                    </View>
                    {/* Profile Detail Frame */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: palettes.App.Community_White,
                          flexGrow: 0,
                          flexShrink: 0,
                          marginLeft: '5%',
                          marginRight: '5%',
                          marginTop: -36,
                          top: '5%',
                        },
                        dimensions.width
                      )}
                    >
                      {/* namecountryviews */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            flexDirection: 'row',
                            gap: { minWidth: Breakpoints.Tablet, value: 0 },
                          },
                          dimensions.width
                        )}
                      >
                        {/* fullname */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              paddingBottom: 12,
                              paddingLeft: 12,
                              paddingRight: 12,
                              width: {
                                minWidth: Breakpoints.Tablet,
                                value: '50%',
                              },
                            },
                            dimensions.width
                          )}
                        >
                          {/* fName */}
                          <Text
                            accessible={true}
                            selectable={false}
                            {...GlobalStyles.TextStyles(theme)['Text 2'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text 2'].style,
                                {
                                  fontFamily: 'AbrilFatface_400Regular',
                                  fontSize: [
                                    { minWidth: Breakpoints.Laptop, value: 20 },
                                    { minWidth: Breakpoints.Tablet, value: 25 },
                                  ],
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Full Name'}
                          </Text>
                          {/* names */}
                          <Text
                            accessible={true}
                            selectable={false}
                            {...GlobalStyles.TextStyles(theme)['Text 2'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text 2'].style,
                                {
                                  fontFamily: 'System',
                                  fontSize: [
                                    { minWidth: Breakpoints.Tablet, value: 20 },
                                    { minWidth: Breakpoints.Laptop, value: 14 },
                                  ],
                                  fontWeight: '400',
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {Constants['UserLoginRecord'] &&
                              Constants['UserLoginRecord'][0]['firstname']}{' '}
                            {Constants['UserLoginRecord'] &&
                              Constants['UserLoginRecord'][0]['surname']}
                          </Text>
                          {/* Spacer 4 */}
                          <Spacer bottom={10} left={10} right={10} top={10} />
                        </View>
                        {/* counryviews */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              right: {
                                minWidth: Breakpoints.Tablet,
                                value: '10%',
                              },
                              width: '45%',
                            },
                            dimensions.width
                          )}
                        >
                          {/* Location */}
                          <Text
                            accessible={true}
                            selectable={false}
                            {...GlobalStyles.TextStyles(theme)['Text 2'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text 2'].style,
                                {
                                  fontFamily: 'AbrilFatface_400Regular',
                                  fontSize: {
                                    minWidth: Breakpoints.Tablet,
                                    value: 25,
                                  },
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Location'}
                          </Text>
                          {/* country */}
                          <Text
                            accessible={true}
                            selectable={false}
                            {...GlobalStyles.TextStyles(theme)['Text 2'].props}
                            style={StyleSheet.applyWidth(
                              GlobalStyles.TextStyles(theme)['Text 2'].style,
                              dimensions.width
                            )}
                          >
                            {Constants['UserLoginRecord'] &&
                              Constants['UserLoginRecord'][0]['country']}
                          </Text>
                        </View>
                        {/* professionViews */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              right: {
                                minWidth: Breakpoints.Tablet,
                                value: '25%',
                              },
                              width: '45%',
                            },
                            dimensions.width
                          )}
                        >
                          {/* Profession */}
                          <Text
                            accessible={true}
                            selectable={false}
                            {...GlobalStyles.TextStyles(theme)['Text 2'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text 2'].style,
                                {
                                  fontFamily: 'AbrilFatface_400Regular',
                                  fontSize: {
                                    minWidth: Breakpoints.Tablet,
                                    value: 25,
                                  },
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Profession\n'}
                          </Text>
                          {/* country */}
                          <Text
                            accessible={true}
                            selectable={false}
                            {...GlobalStyles.TextStyles(theme)['Text 2'].props}
                            style={StyleSheet.applyWidth(
                              GlobalStyles.TextStyles(theme)['Text 2'].style,
                              dimensions.width
                            )}
                          >
                            {Constants['UserLoginRecord'] &&
                              Constants['UserLoginRecord'][0]['profession']}
                          </Text>
                        </View>
                      </View>
                      {/* Spacer 2 */}
                      <Spacer bottom={10} left={10} right={10} top={10} />
                      {/* bioviews */}
                      <View>
                        <Text
                          accessible={true}
                          selectable={false}
                          {...GlobalStyles.TextStyles(theme)['Text 2'].props}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text 2'].style,
                              {
                                fontFamily: 'AbrilFatface_400Regular',
                                fontSize: {
                                  minWidth: Breakpoints.Tablet,
                                  value: 20,
                                },
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Biography\n'}
                        </Text>
                        <TextInput
                          autoCorrect={true}
                          changeTextDelay={500}
                          multiline={true}
                          numberOfLines={4}
                          onChangeText={newTextAreaValue => {
                            try {
                              setBioinput(newTextAreaValue);
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          textAlignVertical={'top'}
                          webShowOutline={true}
                          {...GlobalStyles.TextInputStyles(theme)['Text Area']
                            .props}
                          editable={true}
                          maxLength={150}
                          placeholder={'Max 200 Words'}
                          style={StyleSheet.applyWidth(
                            GlobalStyles.TextInputStyles(theme)['Text Area']
                              .style,
                            dimensions.width
                          )}
                          value={bioinput}
                        />
                      </View>
                    </View>
                    {/* Actions Frame */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          flexDirection: 'row',
                          flexGrow: 1,
                          flexShrink: 0,
                          justifyContent: 'space-around',
                          marginTop: 10,
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
                                  {'Gadgets'}
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
                                  {'More Gadgets'}
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
                                  {'More Gadgets'}
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
                            { top: '10%' },
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
                                    { minWidth: Breakpoints.Mobile, value: 16 },
                                    { minWidth: Breakpoints.Tablet, value: 25 },
                                    {
                                      minWidth: Breakpoints.Desktop,
                                      value: 35,
                                    },
                                  ],
                                },
                                dimensions.width
                              )}
                            >
                              {'Gaadget Description'}
                            </Text>
                            {/* service_cription */}
                            <Text
                              accessible={true}
                              selectable={false}
                              ellipsizeMode={'tail'}
                              numberOfLines={6}
                              style={StyleSheet.applyWidth(
                                {
                                  color: palettes.App.Internal_Secondary_Dark,
                                  fontFamily: 'OpenSans_400Regular',
                                  fontSize: [
                                    { minWidth: Breakpoints.Mobile, value: 12 },
                                    { minWidth: Breakpoints.Tablet, value: 18 },
                                    {
                                      minWidth: Breakpoints.Desktop,
                                      value: 28,
                                    },
                                    { minWidth: Breakpoints.Laptop, value: 20 },
                                  ],
                                  lineHeight: [
                                    { minWidth: Breakpoints.Mobile, value: 19 },
                                    {
                                      minWidth: Breakpoints.Desktop,
                                      value: 39,
                                    },
                                    { minWidth: Breakpoints.Laptop, value: 20 },
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
                    {/* Review */}
                    <>
                      {!menuTab3 ? null : (
                        <View
                          style={StyleSheet.applyWidth(
                            { flex: 1, top: '10%' },
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
                                              color: theme.colors.text.strong,
                                              fontFamily: 'OpenSans_700Bold',
                                              paddingBottom: 9,
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {null} {null}
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
                                          {null}
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
                                              color: theme.colors.text.strong,
                                              fontFamily: 'OpenSans_400Regular',
                                              fontSize: 12,
                                              lineHeight: 18,
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {null}
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
                                            color={palettes.App.Internal_White}
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
                                              fontFamily: 'OpenSans_400Regular',
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {null}
                                        </Text>
                                      </View>
                                    </View>
                                  </View>
                                </Touchable>
                              </View>
                            </View>
                          </View>
                        </View>
                      )}
                    </>
                    {/* DetailsTab */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          flex: 1,
                          flexDirection: 'row',
                          gap: 3,
                          opacity: 1,
                          paddingLeft: 25,
                          paddingRight: 25,
                          paddingTop: 16,
                          top: '8%',
                        },
                        dimensions.width
                      )}
                    >
                      {/* Work Experience */}
                      <View
                        style={StyleSheet.applyWidth(
                          { flex: 1 },
                          dimensions.width
                        )}
                      >
                        {/* Active */}
                        <>
                          {!(SelectedTab === 'work') ? null : (
                            <Button
                              iconPosition={'left'}
                              disabled={true}
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor:
                                    palettes.Brand.Community_Primary_Alt,
                                  borderRadius: 12,
                                  fontFamily: 'Inter_500Medium',
                                  fontSize: 15,
                                  height: 50,
                                  textAlign: 'center',
                                },
                                dimensions.width
                              )}
                              title={'Work Experience'}
                            />
                          )}
                        </>
                        {/* Inactive */}
                        <>
                          {SelectedTab === 'work' ? null : (
                            <Button
                              iconPosition={'left'}
                              onPress={() => {
                                try {
                                  setSelectedTab('work');
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: palettes.App['BG Gray'],
                                  borderBottomLeftRadius: 12,
                                  borderBottomRightRadius: 0,
                                  borderRadius: 0,
                                  borderTopLeftRadius: 12,
                                  borderTopRightRadius: 0,
                                  color: theme.colors.text.medium,
                                  fontFamily: 'Inter_500Medium',
                                  fontSize: 15,
                                  height: 50,
                                  opacity: 1,
                                  textAlign: 'center',
                                },
                                dimensions.width
                              )}
                              title={'Work Experience\n'}
                            />
                          )}
                        </>
                      </View>
                      {/* Education */}
                      <View
                        style={StyleSheet.applyWidth(
                          { flex: 1 },
                          dimensions.width
                        )}
                      >
                        {/* Active */}
                        <>
                          {!(SelectedTab === 'education') ? null : (
                            <Button
                              iconPosition={'left'}
                              disabled={true}
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor:
                                    palettes.Brand.Community_Primary_Alt,
                                  borderRadius: 12,
                                  fontFamily: 'Inter_500Medium',
                                  fontSize: 15,
                                  height: 50,
                                  textAlign: 'center',
                                },
                                dimensions.width
                              )}
                              title={'Education'}
                            />
                          )}
                        </>
                        {/* Inactive */}
                        <>
                          {SelectedTab === 'education' ? null : (
                            <Button
                              iconPosition={'left'}
                              onPress={() => {
                                try {
                                  setSelectedTab('education');
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: palettes.App['BG Gray'],
                                  borderBottomLeftRadius: 0,
                                  borderBottomRightRadius: 12,
                                  borderRadius: 0,
                                  borderTopLeftRadius: 0,
                                  borderTopRightRadius: 12,
                                  color: theme.colors.text.medium,
                                  fontFamily: 'Inter_500Medium',
                                  fontSize: 15,
                                  height: 50,
                                  opacity: 1,
                                  overflow: 'hidden',
                                  textAlign: 'center',
                                },
                                dimensions.width
                              )}
                              title={'Education'}
                            />
                          )}
                        </>
                      </View>
                      {/* Meetings */}
                      <View
                        style={StyleSheet.applyWidth(
                          { flex: 1 },
                          dimensions.width
                        )}
                      >
                        {/* Active */}
                        <>
                          {!(SelectedTab === 'meeting') ? null : (
                            <Button
                              iconPosition={'left'}
                              disabled={true}
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor:
                                    palettes.Brand.Community_Primary_Alt,
                                  borderRadius: 12,
                                  fontFamily: 'Inter_500Medium',
                                  fontSize: 15,
                                  height: 50,
                                  textAlign: 'center',
                                },
                                dimensions.width
                              )}
                              title={'Meetings'}
                            />
                          )}
                        </>
                        {/* Inactive */}
                        <>
                          {SelectedTab === 'meeting' ? null : (
                            <Button
                              iconPosition={'left'}
                              onPress={() => {
                                try {
                                  setSelectedTab('meeting');
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: palettes.App['BG Gray'],
                                  borderBottomLeftRadius: 0,
                                  borderBottomRightRadius: 12,
                                  borderRadius: 0,
                                  borderTopLeftRadius: 0,
                                  borderTopRightRadius: 12,
                                  color: theme.colors.text.medium,
                                  fontFamily: 'Inter_500Medium',
                                  fontSize: 15,
                                  height: 50,
                                  opacity: 1,
                                  overflow: 'hidden',
                                  textAlign: 'center',
                                },
                                dimensions.width
                              )}
                              title={'Meetings'}
                            />
                          )}
                        </>
                      </View>
                    </View>
                    {/* eachTabDetail */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          paddingBottom: 16,
                          paddingLeft: 25,
                          paddingRight: 25,
                          paddingTop: 16,
                        },
                        dimensions.width
                      )}
                    >
                      {/* heading */}
                      <Text
                        accessible={true}
                        selectable={false}
                        style={StyleSheet.applyWidth(
                          {
                            color: palettes.App['Custom Color_2'],
                            fontFamily: 'Inter_400Regular',
                            letterSpacing: 0.4,
                            lineHeight: 21,
                            marginBottom: 30,
                            opacity: 0.3,
                            textAlign: 'left',
                          },
                          dimensions.width
                        )}
                      >
                        {
                          'This is test dummy text used as shipit app placeholder.'
                        }
                      </Text>
                      <>
                        {!(SelectedTab === 'work') ? null : (
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
                            autoFocus={true}
                            placeholder={'ID Name'}
                            placeholderTextColor={
                              palettes.App['text placeholder']
                            }
                            style={StyleSheet.applyWidth(
                              {
                                backgroundColor: palettes.App['BG Gray'],
                                borderBottomWidth: 1,
                                borderColor: theme.colors.border.brand,
                                borderLeftWidth: 1,
                                borderRadius: 12,
                                borderRightWidth: 1,
                                borderTopWidth: 1,
                                color: palettes.App['Custom Color_2'],
                                fontFamily: 'Inter_500Medium',
                                fontSize: 14,
                                height: 50,
                                opacity: 1,
                                overflow: 'hidden',
                                paddingBottom: 16,
                                paddingLeft: 25,
                                paddingRight: 8,
                                paddingTop: 16,
                              },
                              dimensions.width
                            )}
                            value={textInputValue}
                          />
                        )}
                      </>
                      <>
                        {!(SelectedTab === 'education') ? null : (
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
                            autoFocus={true}
                            placeholder={'Item Code'}
                            placeholderTextColor={
                              palettes.App['text placeholder']
                            }
                            style={StyleSheet.applyWidth(
                              {
                                backgroundColor: palettes.App['BG Gray'],
                                borderBottomWidth: 1,
                                borderColor: theme.colors.border.brand,
                                borderLeftWidth: 1,
                                borderRadius: 12,
                                borderRightWidth: 1,
                                borderTopWidth: 1,
                                color: palettes.App['Custom Color_2'],
                                fontFamily: 'Inter_500Medium',
                                fontSize: 14,
                                height: 50,
                                opacity: 1,
                                overflow: 'hidden',
                                paddingBottom: 16,
                                paddingLeft: 25,
                                paddingRight: 8,
                                paddingTop: 16,
                              },
                              dimensions.width
                            )}
                            value={textInputValue}
                          />
                        )}
                      </>
                      {/* Text Input 2 */}
                      <>
                        {!(SelectedTab === 'meeting') ? null : (
                          <TextInput
                            autoCapitalize={'none'}
                            autoCorrect={true}
                            changeTextDelay={500}
                            onChangeText={newTextInput2Value => {
                              try {
                                setTextInputValue(newTextInput2Value);
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            placeholder={'Enter a value...'}
                            webShowOutline={true}
                            autoFocus={true}
                            placeholderTextColor={
                              palettes.App['text placeholder']
                            }
                            style={StyleSheet.applyWidth(
                              {
                                backgroundColor: palettes.App['BG Gray'],
                                borderBottomWidth: 1,
                                borderColor: theme.colors.border.brand,
                                borderLeftWidth: 1,
                                borderRadius: 12,
                                borderRightWidth: 1,
                                borderTopWidth: 1,
                                color: palettes.App['Custom Color_2'],
                                fontFamily: 'Inter_500Medium',
                                fontSize: 14,
                                height: 50,
                                opacity: 1,
                                overflow: 'hidden',
                                paddingBottom: 16,
                                paddingLeft: 25,
                                paddingRight: 8,
                                paddingTop: 16,
                              },
                              dimensions.width
                            )}
                            value={textInputValue}
                          />
                        )}
                      </>
                    </View>
                  </>
                );
              }}
              showsHorizontalScrollIndicator={true}
              showsVerticalScrollIndicator={true}
            />
          );
        }}
      </SupabaseApi.FetchFindprofessionalbynameGET>
    </ScreenContainer>
  );
};

export default withTheme(ProfprofilepageScreen);
