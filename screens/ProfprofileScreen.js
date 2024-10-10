import React from 'react';
import {
  Checkbox,
  Circle,
  CircleImage,
  DatePicker,
  Icon,
  LinearGradient,
  Pressable,
  ScreenContainer,
  SimpleStyleFlatList,
  Spacer,
  Surface,
  TextField,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Modal,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';
import * as GlobalStyles from '../GlobalStyles.js';
import * as ExampleDataForListsApi from '../apis/ExampleDataForListsApi.js';
import * as SupabaseApi from '../apis/SupabaseApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import selectFileUtil from '../utils/selectFile';
import useWindowDimensions from '../utils/useWindowDimensions';

const ProfprofileScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [EndDate, setEndDate] = React.useState(new Date());
  const [Institute, setInstitute] = React.useState('');
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
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const supabaseUpdateProfessionalDataPATCH =
    SupabaseApi.useUpdateProfessionalDataPATCH();

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
        />
      </View>

      <SupabaseApi.FetchFindproffessionalGET id={2}>
        {({ loading, error, data, refetchFindproffessional }) => {
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
              listKey={'IHxZNhDk'}
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
                    </View>
                    {/* Profile Image Frame */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'flex-end',
                          marginTop: -40,
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
                      {/* Spacer 3 */}
                      <Spacer bottom={18} left={18} right={18} top={18} />
                      {/* Education */}
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
                          {'Education '}
                        </Text>
                        <Spacer bottom={8} left={8} right={8} top={8} />
                        {/* institute */}
                        <View
                          style={StyleSheet.applyWidth(
                            { flexDirection: 'column' },
                            dimensions.width
                          )}
                        >
                          {/* institute */}
                          <TextInput
                            autoCapitalize={'none'}
                            autoCorrect={true}
                            changeTextDelay={500}
                            onChangeText={newInstituteValue => {
                              try {
                                setInstitute(newInstituteValue);
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            webShowOutline={true}
                            {...GlobalStyles.TextInputStyles(theme)[
                              'Text Input'
                            ].props}
                            placeholder={'Institute name'}
                            style={StyleSheet.applyWidth(
                              GlobalStyles.TextInputStyles(theme)['Text Input']
                                .style,
                              dimensions.width
                            )}
                            value={Institute}
                          />
                          <Spacer bottom={8} left={8} right={8} top={8} />
                        </View>
                        {/* Date */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              flexDirection: 'row',
                              gap: 6,
                              width: {
                                minWidth: Breakpoints.Tablet,
                                value: '60%',
                              },
                            },
                            dimensions.width
                          )}
                        >
                          {/* stateDate */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                width: [
                                  {
                                    minWidth: Breakpoints.Mobile,
                                    value: '40%',
                                  },
                                  {
                                    minWidth: Breakpoints.Tablet,
                                    value: '46%',
                                  },
                                ],
                              },
                              dimensions.width
                            )}
                          >
                            <Text
                              accessible={true}
                              selectable={false}
                              {...GlobalStyles.TextStyles(theme)['Text 2']
                                .props}
                              style={StyleSheet.applyWidth(
                                GlobalStyles.TextStyles(theme)['Text 2'].style,
                                dimensions.width
                              )}
                            >
                              {'Start Date'}
                            </Text>
                            <DatePicker
                              autoDismissKeyboard={true}
                              disabled={false}
                              hideLabel={false}
                              label={'Date'}
                              leftIconMode={'inset'}
                              mode={'date'}
                              onDateChange={newDatePickerValue => {
                                try {
                                  setDatePickerValue(newDatePickerValue);
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                              date={datePickerValue}
                              type={'underline'}
                            />
                          </View>
                          {/* EndDate */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                width: [
                                  {
                                    minWidth: Breakpoints.Mobile,
                                    value: '40%',
                                  },
                                  {
                                    minWidth: Breakpoints.Tablet,
                                    value: '46%',
                                  },
                                ],
                              },
                              dimensions.width
                            )}
                          >
                            <Text
                              accessible={true}
                              selectable={false}
                              {...GlobalStyles.TextStyles(theme)['Text 2']
                                .props}
                              style={StyleSheet.applyWidth(
                                GlobalStyles.TextStyles(theme)['Text 2'].style,
                                dimensions.width
                              )}
                            >
                              {'End Date'}
                            </Text>
                            <DatePicker
                              autoDismissKeyboard={true}
                              disabled={false}
                              hideLabel={false}
                              label={'Date'}
                              leftIconMode={'inset'}
                              mode={'date'}
                              onDateChange={newDatePickerValue => {
                                try {
                                  setEndDate(newDatePickerValue);
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                              date={EndDate}
                              type={'underline'}
                            />
                          </View>
                          {/* upload */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                flexDirection: 'row',
                                left: {
                                  minWidth: Breakpoints.Tablet,
                                  value: '5%',
                                },
                              },
                              dimensions.width
                            )}
                          >
                            <Pressable
                              onPress={() => {
                                const handler = async () => {
                                  try {
                                    const uploaded = await selectFileUtil({
                                      returnNameAndValue: false,
                                    });
                                    /* 'API Request' action requires configuration: choose an API endpoint */
                                  } catch (err) {
                                    console.error(err);
                                  }
                                };
                                handler();
                              }}
                            >
                              <Surface
                                elevation={0}
                                {...GlobalStyles.SurfaceStyles(theme)['Surface']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  GlobalStyles.SurfaceStyles(theme)['Surface']
                                    .style,
                                  dimensions.width
                                )}
                              >
                                <Icon
                                  size={24}
                                  color={palettes.Brand.Community_Primary_Alt}
                                  name={'MaterialIcons/cloud-upload'}
                                  size={StyleSheet.getWidthValue(
                                    [
                                      {
                                        minWidth: Breakpoints.Tablet,
                                        value: 55,
                                      },
                                    ],
                                    dimensions.width
                                  )}
                                />
                              </Surface>
                            </Pressable>
                          </View>
                          {/* checked */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                flexDirection: 'row',
                                left: {
                                  minWidth: Breakpoints.Tablet,
                                  value: '10%',
                                },
                              },
                              dimensions.width
                            )}
                          >
                            <Pressable>
                              <Surface
                                elevation={0}
                                {...GlobalStyles.SurfaceStyles(theme)['Surface']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  GlobalStyles.SurfaceStyles(theme)['Surface']
                                    .style,
                                  dimensions.width
                                )}
                              >
                                <Icon
                                  size={24}
                                  color={palettes.Brand.Community_Primary_Alt}
                                  name={'Feather/check-circle'}
                                  size={StyleSheet.getWidthValue(
                                    [
                                      {
                                        minWidth: Breakpoints.Tablet,
                                        value: 55,
                                      },
                                    ],
                                    dimensions.width
                                  )}
                                />
                              </Surface>
                            </Pressable>
                          </View>
                        </View>
                        {/* Spacer 2 */}
                        <Spacer bottom={3} left={3} right={3} top={3} />
                        {/* Add Touchable */}
                        <Touchable
                          style={StyleSheet.applyWidth(
                            {
                              borderColor: palettes.Blue[500],
                              borderRadius: 10,
                              borderWidth: 2,
                              width: '20%',
                            },
                            dimensions.width
                          )}
                        >
                          {/* add */}
                          <Text
                            accessible={true}
                            selectable={false}
                            {...GlobalStyles.TextStyles(theme)['Text 2'].props}
                            selectionColor={palettes.App.ShopAppBlue}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text 2'].style,
                                {
                                  alignSelf: 'center',
                                  color: palettes.Blue[500],
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Add'}
                          </Text>
                        </Touchable>
                      </View>
                      {/* Spacer 4 */}
                      <Spacer bottom={8} left={8} right={8} top={8} />
                      {/* companies */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            width: {
                              minWidth: Breakpoints.Tablet,
                              value: '60%',
                            },
                          },
                          dimensions.width
                        )}
                      >
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
                          {'Work Experience '}
                        </Text>
                        <Spacer bottom={8} left={8} right={8} top={8} />
                        {/* company */}
                        <View
                          style={StyleSheet.applyWidth(
                            { flexDirection: 'column' },
                            dimensions.width
                          )}
                        >
                          {/* companyName */}
                          <TextInput
                            autoCapitalize={'none'}
                            autoCorrect={true}
                            changeTextDelay={500}
                            onChangeText={newCompanyNameValue => {
                              try {
                                setCompany(newCompanyNameValue);
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            webShowOutline={true}
                            {...GlobalStyles.TextInputStyles(theme)[
                              'Text Input'
                            ].props}
                            placeholder={'Company Name'}
                            style={StyleSheet.applyWidth(
                              GlobalStyles.TextInputStyles(theme)['Text Input']
                                .style,
                              dimensions.width
                            )}
                            value={company}
                          />
                          <Spacer bottom={8} left={8} right={8} top={8} />
                        </View>
                        {/* Date */}
                        <View
                          style={StyleSheet.applyWidth(
                            { flexDirection: 'row', gap: 6 },
                            dimensions.width
                          )}
                        >
                          {/* stateDate */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                width: [
                                  {
                                    minWidth: Breakpoints.Mobile,
                                    value: '40%',
                                  },
                                  {
                                    minWidth: Breakpoints.Tablet,
                                    value: '46%',
                                  },
                                ],
                              },
                              dimensions.width
                            )}
                          >
                            <Text
                              accessible={true}
                              selectable={false}
                              {...GlobalStyles.TextStyles(theme)['Text 2']
                                .props}
                              style={StyleSheet.applyWidth(
                                GlobalStyles.TextStyles(theme)['Text 2'].style,
                                dimensions.width
                              )}
                            >
                              {'Start Date'}
                            </Text>
                            <DatePicker
                              autoDismissKeyboard={true}
                              disabled={false}
                              hideLabel={false}
                              label={'Date'}
                              leftIconMode={'inset'}
                              onDateChange={newDatePickerValue => {
                                try {
                                  setComStartDate(newDatePickerValue);
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                              date={comStartDate}
                              mode={'date'}
                              type={'underline'}
                            />
                          </View>
                          {/* EndDate */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                width: [
                                  {
                                    minWidth: Breakpoints.Mobile,
                                    value: '40%',
                                  },
                                  {
                                    minWidth: Breakpoints.Tablet,
                                    value: '46%',
                                  },
                                ],
                              },
                              dimensions.width
                            )}
                          >
                            <Text
                              accessible={true}
                              selectable={false}
                              {...GlobalStyles.TextStyles(theme)['Text 2']
                                .props}
                              style={StyleSheet.applyWidth(
                                GlobalStyles.TextStyles(theme)['Text 2'].style,
                                dimensions.width
                              )}
                            >
                              {'End Date'}
                            </Text>
                            <DatePicker
                              autoDismissKeyboard={true}
                              disabled={false}
                              hideLabel={false}
                              label={'Date'}
                              leftIconMode={'inset'}
                              mode={'date'}
                              onDateChange={newDatePickerValue => {
                                try {
                                  setComendDate(newDatePickerValue);
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                              date={comendDate}
                              type={'underline'}
                            />
                          </View>
                        </View>
                        <Spacer bottom={8} left={8} right={8} top={8} />
                        {/* Position */}
                        <View
                          style={StyleSheet.applyWidth(
                            { flexDirection: 'row' },
                            dimensions.width
                          )}
                        >
                          {/* Position */}
                          <TextInput
                            autoCapitalize={'none'}
                            autoCorrect={true}
                            changeTextDelay={500}
                            onChangeText={newPositionValue => {
                              try {
                                setInstitute(newPositionValue);
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            webShowOutline={true}
                            {...GlobalStyles.TextInputStyles(theme)[
                              'Text Input'
                            ].props}
                            placeholder={'Job Position'}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextInputStyles(theme)[
                                  'Text Input'
                                ].style,
                                { width: '80%' }
                              ),
                              dimensions.width
                            )}
                            value={Institute}
                          />
                          {/* upload */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                flexDirection: 'row',
                                left: [
                                  { minWidth: Breakpoints.Mobile, value: '3%' },
                                  { minWidth: Breakpoints.Tablet, value: 5 },
                                ],
                                top: '6%',
                              },
                              dimensions.width
                            )}
                          >
                            <Pressable
                              onPress={() => {
                                const handler = async () => {
                                  try {
                                    const uploaded = await selectFileUtil({
                                      returnNameAndValue: false,
                                    });
                                    /* 'API Request' action requires configuration: choose an API endpoint */
                                  } catch (err) {
                                    console.error(err);
                                  }
                                };
                                handler();
                              }}
                            >
                              <Surface
                                elevation={0}
                                {...GlobalStyles.SurfaceStyles(theme)['Surface']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  GlobalStyles.SurfaceStyles(theme)['Surface']
                                    .style,
                                  dimensions.width
                                )}
                              >
                                <Icon
                                  size={24}
                                  color={palettes.Brand.Community_Primary_Alt}
                                  name={'FontAwesome/cloud-upload'}
                                  size={StyleSheet.getWidthValue(
                                    [
                                      {
                                        minWidth: Breakpoints.Tablet,
                                        value: 55,
                                      },
                                    ],
                                    dimensions.width
                                  )}
                                />
                              </Surface>
                            </Pressable>
                          </View>
                          <Spacer bottom={8} left={3} right={3} top={8} />
                          {/* checked */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                flexDirection: 'row',
                                left: [
                                  { minWidth: Breakpoints.Mobile, value: '3%' },
                                  {
                                    minWidth: Breakpoints.Tablet,
                                    value: '10%',
                                  },
                                ],
                                top: '6%',
                              },
                              dimensions.width
                            )}
                          >
                            <Pressable>
                              <Surface
                                elevation={0}
                                {...GlobalStyles.SurfaceStyles(theme)['Surface']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  GlobalStyles.SurfaceStyles(theme)['Surface']
                                    .style,
                                  dimensions.width
                                )}
                              >
                                <Icon
                                  size={24}
                                  color={palettes.Brand.Community_Primary_Alt}
                                  name={'Feather/check-circle'}
                                  size={StyleSheet.getWidthValue(
                                    [
                                      {
                                        minWidth: Breakpoints.Tablet,
                                        value: 55,
                                      },
                                    ],
                                    dimensions.width
                                  )}
                                />
                              </Surface>
                            </Pressable>
                          </View>
                        </View>
                        {/* Spacer 2 */}
                        <Spacer bottom={3} left={3} right={3} top={3} />
                        {/* Add Touchable */}
                        <Touchable
                          style={StyleSheet.applyWidth(
                            {
                              borderColor: palettes.Blue[500],
                              borderRadius: 10,
                              borderWidth: 2,
                              width: '20%',
                            },
                            dimensions.width
                          )}
                        >
                          {/* add */}
                          <Text
                            accessible={true}
                            selectable={false}
                            {...GlobalStyles.TextStyles(theme)['Text 2'].props}
                            selectionColor={palettes.App.ShopAppBlue}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text 2'].style,
                                {
                                  alignSelf: 'center',
                                  color: palettes.Blue[500],
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Add'}
                          </Text>
                        </Touchable>
                      </View>
                      {/* buttons */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            flexDirection: 'row',
                            gap: 5,
                            paddingBottom: 12,
                            paddingLeft: 12,
                            paddingRight: 12,
                            paddingTop: 12,
                            width: {
                              minWidth: Breakpoints.Tablet,
                              value: '60%',
                            },
                          },
                          dimensions.width
                        )}
                      >
                        {/* save and continuenFrame */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              flexGrow: 1,
                              flexShrink: 0,
                              width: [
                                { minWidth: Breakpoints.Mobile, value: '20%' },
                                { minWidth: Breakpoints.Tablet, value: '4%' },
                              ],
                            },
                            dimensions.width
                          )}
                        >
                          {/* Flex Frame for Touchable */}
                          <>
                            {!save ? null : (
                              <View>
                                <Touchable
                                  onPress={() => {
                                    try {
                                      setSave(false);
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                >
                                  {/* Button Frame True */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        backgroundColor:
                                          palettes.App.Community_White,
                                        borderBottomWidth: 1,
                                        borderColor:
                                          palettes.Brand.Community_Primary_Alt,
                                        borderLeftWidth: 1,
                                        borderRadius: 64,
                                        borderRightWidth: 1,
                                        borderTopWidth: 1,
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        paddingBottom: 3,
                                        paddingLeft: 5,
                                        paddingRight: 5,
                                        paddingTop: 3,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {/* Saved */}
                                    <Text
                                      accessible={true}
                                      selectable={false}
                                      style={StyleSheet.applyWidth(
                                        {
                                          color:
                                            palettes.Brand
                                              .Community_Primary_Alt,
                                          fontFamily: 'Rubik_400Regular',
                                          fontSize: [
                                            {
                                              minWidth: Breakpoints.Mobile,
                                              value: 15,
                                            },
                                            {
                                              minWidth: Breakpoints.Tablet,
                                              value: 20,
                                            },
                                          ],
                                          lineHeight: 21,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {'Saved\n\n'}
                                    </Text>
                                  </View>
                                </Touchable>
                              </View>
                            )}
                          </>
                          {/* Flex Frame for Touchable */}
                          <>
                            {save ? null : (
                              <View>
                                <Touchable
                                  onPress={() => {
                                    const handler = async () => {
                                      try {
                                        const saved = (
                                          await supabaseUpdateProfessionalDataPATCH.mutateAsync(
                                            {
                                              EndDate: '5/5/2015',
                                              Institute: 'MIT',
                                              bioinput: 'three people from oz',
                                              company: 'Tesla',
                                              countryValue: 'Venice',
                                              firstname: 'Jane',
                                              id: 3,
                                              profPassword: '123jane',
                                              profdDob: '3/3/2000',
                                              profemail: 'jane@draft.com',
                                              proffemale: true,
                                              profmale: false,
                                              startDate: '2/2/2014',
                                              surname: 'Doe',
                                            }
                                          )
                                        )?.json;
                                        setSave(true);
                                      } catch (err) {
                                        console.error(err);
                                      }
                                    };
                                    handler();
                                  }}
                                >
                                  {/* Button Frame False */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        backgroundColor:
                                          palettes.Brand.Community_Primary_Alt,
                                        borderRadius: 64,
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        paddingBottom: 12,
                                        paddingLeft: 12,
                                        paddingRight: 12,
                                        paddingTop: 12,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {/* Saved and Continue */}
                                    <Text
                                      accessible={true}
                                      selectable={false}
                                      style={StyleSheet.applyWidth(
                                        {
                                          color: palettes.App.Community_White,
                                          fontFamily: 'Rubik_400Regular',
                                          fontSize: [
                                            {
                                              minWidth: Breakpoints.Mobile,
                                              value: 12,
                                            },
                                            {
                                              minWidth: Breakpoints.Tablet,
                                              value: 20,
                                            },
                                          ],
                                          lineHeight: 21,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {'Save and Continue\n'}
                                    </Text>
                                  </View>
                                </Touchable>
                              </View>
                            )}
                          </>
                        </View>
                        {/* submissionFrame */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              flexGrow: 1,
                              flexShrink: 0,
                              width: {
                                minWidth: Breakpoints.Tablet,
                                value: '4%',
                              },
                            },
                            dimensions.width
                          )}
                        >
                          {/* Flex Frame for Touchable */}
                          <>
                            {!submit ? null : (
                              <View>
                                <Touchable
                                  onPress={() => {
                                    try {
                                      setSubmit(false);
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                >
                                  {/* Button Frame True */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        alignContent: 'flex-start',
                                        backgroundColor:
                                          palettes.App.Community_White,
                                        borderBottomWidth: 1,
                                        borderColor:
                                          palettes.Brand.Community_Primary_Alt,
                                        borderLeftWidth: 1,
                                        borderRadius: 64,
                                        borderRightWidth: 1,
                                        borderStyle: 'solid',
                                        borderTopWidth: 1,
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        paddingBottom: 3,
                                        paddingLeft: 5,
                                        paddingRight: 5,
                                        paddingTop: 3,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {/* Submitted */}
                                    <Text
                                      accessible={true}
                                      selectable={false}
                                      style={StyleSheet.applyWidth(
                                        {
                                          color:
                                            palettes.Brand
                                              .Community_Primary_Alt,
                                          fontFamily: 'Rubik_400Regular',
                                          fontSize: [
                                            {
                                              minWidth: Breakpoints.Mobile,
                                              value: 15,
                                            },
                                            {
                                              minWidth: Breakpoints.Tablet,
                                              value: 20,
                                            },
                                          ],
                                          lineHeight: 21,
                                          textAlign: 'center',
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {'Submitted\n\n'}
                                    </Text>
                                  </View>
                                </Touchable>
                              </View>
                            )}
                          </>
                          {/* Flex Frame for Touchable */}
                          <>
                            {submit ? null : (
                              <View>
                                <Touchable
                                  onPress={() => {
                                    try {
                                      /* 'API Request' action requires configuration: choose an API endpoint */
                                      setSubmit(true);
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                >
                                  {/* Button Frame False */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        backgroundColor:
                                          palettes.Brand.Community_Primary_Alt,
                                        borderRadius: 64,
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        paddingBottom: 12,
                                        paddingLeft: 12,
                                        paddingRight: 12,
                                        paddingTop: 12,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {/* Submit */}
                                    <Text
                                      accessible={true}
                                      selectable={false}
                                      style={StyleSheet.applyWidth(
                                        {
                                          color: palettes.App.Community_White,
                                          fontFamily: 'Rubik_400Regular',
                                          fontSize: [
                                            {
                                              minWidth: Breakpoints.Mobile,
                                              value: 15,
                                            },
                                            {
                                              minWidth: Breakpoints.Tablet,
                                              value: 20,
                                            },
                                          ],
                                          lineHeight: 21,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {'Submit'}
                                    </Text>
                                  </View>
                                </Touchable>
                              </View>
                            )}
                          </>
                        </View>
                      </View>
                    </View>
                  </>
                );
              }}
              showsHorizontalScrollIndicator={true}
              showsVerticalScrollIndicator={true}
            />
          );
        }}
      </SupabaseApi.FetchFindproffessionalGET>
    </ScreenContainer>
  );
};

export default withTheme(ProfprofileScreen);
