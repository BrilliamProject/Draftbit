import React from 'react';
import {
  Button,
  Icon,
  LottieAnimation,
  ScreenContainer,
  Spacer,
  Surface,
  TextField,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const StartUpPageScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [menuTab1, setMenuTab1] = React.useState(false);
  const [menuTab2, setMenuTab2] = React.useState(false);
  const [menuTab3, setMenuTab3] = React.useState(false);
  const [styledTextAreaValue, setStyledTextAreaValue] = React.useState('');
  const [styledTextAreaValue2, setStyledTextAreaValue2] = React.useState('');
  const [styledTextAreaValue3, setStyledTextAreaValue3] = React.useState('');
  const [styledTextAreaValue4, setStyledTextAreaValue4] = React.useState('');
  const [styledTextAreaValue5, setStyledTextAreaValue5] = React.useState('');
  const [styledTextAreaValue6, setStyledTextAreaValue6] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textAreaValue, setTextAreaValue] = React.useState('');

  return (
    <ScreenContainer
      hasBottomSafeArea={false}
      hasLeftSafeArea={true}
      hasRightSafeArea={true}
      hasSafeArea={false}
      hasTopSafeArea={false}
      scrollable={true}
      style={StyleSheet.applyWidth(
        { padding: { minWidth: Breakpoints.Laptop, value: '5%' } },
        dimensions.width
      )}
    >
      {/* header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'flex-start',
            flexDirection: [
              { minWidth: Breakpoints.Mobile, value: 'row' },
              { minWidth: Breakpoints.Tablet, value: 'row' },
            ],
            justifyContent: [
              { minWidth: Breakpoints.Tablet, value: 'space-between' },
              { minWidth: Breakpoints.Mobile, value: 'space-between' },
            ],
            marginLeft: '2%',
            marginRight: [
              { minWidth: Breakpoints.Tablet, value: '2%' },
              { minWidth: Breakpoints.Mobile, value: '2%' },
            ],
            marginTop: '2%',
          },
          dimensions.width
        )}
      >
        <View>
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: palettes.Blue[700],
                fontFamily: [
                  {
                    minWidth: Breakpoints.Laptop,
                    value: 'AkayaTelivigala_400Regular',
                  },
                  {
                    minWidth: Breakpoints.Mobile,
                    value: 'AkayaKanadaka_400Regular',
                  },
                ],
                fontSize: [
                  { minWidth: Breakpoints.Mobile, value: 24 },
                  { minWidth: Breakpoints.Desktop, value: 54 },
                  { minWidth: Breakpoints.Laptop, value: 44 },
                ],
              }),
              dimensions.width
            )}
          >
            {'BRILAIM'}
          </Text>
        </View>
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth(
            { top: { minWidth: Breakpoints.Laptop, value: '15%' } },
            dimensions.width
          )}
        >
          <Button
            iconPosition={'left'}
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
            {...GlobalStyles.ButtonStyles(theme)['Button'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ButtonStyles(theme)['Button'].style,
                {
                  fontFamily: { minWidth: Breakpoints.Laptop, value: 'System' },
                  fontSize: { minWidth: Breakpoints.Laptop, value: 16 },
                  fontWeight: { minWidth: Breakpoints.Laptop, value: '700' },
                }
              ),
              dimensions.width
            )}
            title={'Sign-In'}
          />
        </View>
      </View>
      {/* image */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignContent: { minWidth: Breakpoints.Tablet, value: 'center' },
            alignItems: 'flex-end',
            height: [
              { minWidth: Breakpoints.Mobile, value: '40%' },
              { minWidth: Breakpoints.Laptop, value: '90%' },
              { minWidth: Breakpoints.Desktop, value: '90%' },
              { minWidth: Breakpoints.Tablet, value: '90%' },
            ],
            justifyContent: 'flex-start',
            marginLeft: '2%',
            marginRight: [
              { minWidth: Breakpoints.Laptop, value: '2%' },
              { minWidth: Breakpoints.Mobile, value: '2%' },
            ],
            marginTop: [
              { minWidth: Breakpoints.Mobile, value: '5%' },
              { minWidth: Breakpoints.Laptop, value: '1.5%' },
            ],
            padding: [
              { minWidth: Breakpoints.Tablet, value: '2%' },
              { minWidth: Breakpoints.Mobile, value: '2%' },
            ],
            width: [
              { minWidth: Breakpoints.Tablet, value: '95%' },
              { minWidth: Breakpoints.Laptop, value: '95%' },
              { minWidth: Breakpoints.Mobile, value: '96%' },
              { minWidth: Breakpoints.Desktop, value: '90%' },
            ],
          },
          dimensions.width
        )}
      >
        <Image
          resizeMode={'cover'}
          {...GlobalStyles.ImageStyles(theme)['Image 3'].props}
          source={imageSource(Images['inter'])}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ImageStyles(theme)['Image 3'].style,
              {
                height: '100%',
                minHeight: { minWidth: Breakpoints.Tablet, value: '100%' },
                minWidth: { minWidth: Breakpoints.Tablet, value: '100%' },
                width: '100%',
              }
            ),
            dimensions.width
          )}
        />
      </View>
      {/* spacer_view */}
      <View>
        <Spacer bottom={8} left={8} right={8} top={8} />
      </View>
      {/* welcome */}
      <View
        style={StyleSheet.applyWidth(
          { marginLeft: '5%', marginRight: '5%' },
          dimensions.width
        )}
      >
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              color: [
                {
                  minWidth: Breakpoints.Laptop,
                  value: theme.colors.branding.primary,
                },
                {
                  minWidth: Breakpoints.Mobile,
                  value: theme.colors.branding.primary,
                },
              ],
              fontFamily: [
                {
                  minWidth: Breakpoints.Laptop,
                  value: 'AkayaKanadaka_400Regular',
                },
                {
                  minWidth: Breakpoints.Mobile,
                  value: 'AkayaKanadaka_400Regular',
                },
              ],
              fontSize: 34,
              padding: { minWidth: Breakpoints.Laptop, value: 10 },
            }),
            dimensions.width
          )}
        >
          {'Welcome To Brilaim'}
        </Text>
      </View>
      {/* welcome_text */}
      <View
        style={StyleSheet.applyWidth(
          { marginLeft: '2%', marginRight: '2%', padding: 10 },
          dimensions.width
        )}
      >
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              color: [
                {
                  minWidth: Breakpoints.Laptop,
                  value: palettes.App['Custom Color_22'],
                },
                {
                  minWidth: Breakpoints.Mobile,
                  value: palettes.App['Custom Color_22'],
                },
              ],
              fontFamily: [
                {
                  minWidth: Breakpoints.Laptop,
                  value: 'AbhayaLibre_400Regular',
                },
                {
                  minWidth: Breakpoints.Mobile,
                  value: 'AbhayaLibre_400Regular',
                },
              ],
              fontSize: [
                { minWidth: Breakpoints.Mobile, value: 18 },
                { minWidth: Breakpoints.Laptop, value: 20 },
              ],
              textAlign: [
                { minWidth: Breakpoints.Laptop, value: 'center' },
                { minWidth: Breakpoints.Mobile, value: 'right' },
              ],
            }),
            dimensions.width
          )}
        >
          {
            'The best place that connects you with professionals that provide mentorship in securing that job.\n'
          }
        </Text>
      </View>
      {/* join_as_client/prof_view */}
      <View
        style={StyleSheet.applyWidth(
          {
            left: [
              { minWidth: Breakpoints.Mobile, value: '7%' },
              { minWidth: Breakpoints.Tablet, value: '20%' },
              { minWidth: Breakpoints.Laptop, value: '30%' },
            ],
            marginRight: '15%',
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
              fontSize: 24,
            }),
            dimensions.width
          )}
        >
          {'Join as a client or professional\n'}
        </Text>
      </View>
      {/* spacer_view */}
      <View style={StyleSheet.applyWidth({ height: '5%' }, dimensions.width)}>
        <Spacer bottom={8} left={8} right={8} top={8} />
      </View>

      <View
        style={StyleSheet.applyWidth(
          {
            flexDirection: 'column',
            left: { minWidth: Breakpoints.Laptop, value: '5%' },
            marginLeft: [
              { minWidth: Breakpoints.Mobile, value: '8%' },
              { minWidth: Breakpoints.Tablet, value: '12%' },
            ],
            marginRight: '8%',
            width: [
              { minWidth: Breakpoints.Tablet, value: '70%' },
              { minWidth: Breakpoints.Laptop, value: '60%' },
            ],
          },
          dimensions.width
        )}
      >
        {/* create+client */}
        <View
          style={StyleSheet.applyWidth(
            {
              borderColor: [
                {
                  minWidth: Breakpoints.Laptop,
                  value: palettes.Brand['Light 2'],
                },
                {
                  minWidth: Breakpoints.Mobile,
                  value: palettes.Brand['Light 2'],
                },
              ],
              borderRadius: [
                { minWidth: Breakpoints.Laptop, value: 5 },
                { minWidth: Breakpoints.Mobile, value: 5 },
              ],
              borderWidth: [
                { minWidth: Breakpoints.Laptop, value: 2 },
                { minWidth: Breakpoints.Mobile, value: 2 },
              ],
              marginRight: '60%',
              padding: [
                { minWidth: Breakpoints.Laptop, value: '6%' },
                { minWidth: Breakpoints.Mobile, value: '6%' },
              ],
            },
            dimensions.width
          )}
        >
          <Surface
            elevation={0}
            {...GlobalStyles.SurfaceStyles(theme)['Surface'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.SurfaceStyles(theme)['Surface'].style,
                { backgroundColor: theme.colors.background.brand, opacity: 1 }
              ),
              dimensions.width
            )}
          >
            <Touchable
              onPress={() => {
                try {
                  if (navigation.canGoBack()) {
                    navigation.popToTop();
                  }
                  navigation.replace('ClientsSignUpScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Text
                accessible={true}
                selectable={false}
                {...GlobalStyles.TextStyles(theme)['Text 2'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text 2'].style,
                    {
                      color: {
                        minWidth: Breakpoints.Laptop,
                        value: theme.colors.text.medium,
                      },
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Clients Seeking Interview'}
              </Text>
            </Touchable>
          </Surface>
        </View>
        {/* creat_professional */}
        <View
          style={StyleSheet.applyWidth(
            {
              borderColor: [
                {
                  minWidth: Breakpoints.Laptop,
                  value: palettes.Brand['Light 2'],
                },
                {
                  minWidth: Breakpoints.Mobile,
                  value: palettes.Brand['Light 2'],
                },
              ],
              borderRadius: [
                { minWidth: Breakpoints.Laptop, value: 5 },
                { minWidth: Breakpoints.Mobile, value: 5 },
              ],
              borderWidth: [
                { minWidth: Breakpoints.Laptop, value: 2 },
                { minWidth: Breakpoints.Mobile, value: 2 },
              ],
              bottom: '50%',
              marginLeft: [
                { minWidth: Breakpoints.Mobile, value: '60%' },
                { minWidth: Breakpoints.Laptop, value: '60%' },
              ],
              minHeight: { minWidth: Breakpoints.Laptop, value: 40 },
              padding: [
                { minWidth: Breakpoints.Laptop, value: '6%' },
                { minWidth: Breakpoints.Mobile, value: '6%' },
              ],
            },
            dimensions.width
          )}
        >
          <Surface
            elevation={0}
            {...GlobalStyles.SurfaceStyles(theme)['Surface'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.SurfaceStyles(theme)['Surface'].style,
                {
                  backgroundColor: theme.colors.background.brand,
                  borderColor: theme.colors.text.strong,
                  opacity: 1,
                }
              ),
              dimensions.width
            )}
          >
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
            >
              <Text
                accessible={true}
                selectable={false}
                {...GlobalStyles.TextStyles(theme)['Text 2'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text 2'].style,
                    {
                      color: {
                        minWidth: Breakpoints.Laptop,
                        value: theme.colors.text.medium,
                      },
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Professional Looking for Clients'}
              </Text>
            </Touchable>
          </Surface>
        </View>
      </View>
      {/* social media */}
      <View
        style={StyleSheet.applyWidth(
          {
            bottom: '4%',
            flexDirection: 'row',
            marginLeft: '5%',
            marginRight: '5%',
            top: [
              { minWidth: Breakpoints.Desktop, value: '6%' },
              { minWidth: Breakpoints.BigScreen, value: '17%' },
            ],
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

export default withTheme(StartUpPageScreen);
