import React from 'react';
import {
  Button,
  Circle,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const CallWaitingScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');

  return (
    <ScreenContainer
      scrollable={false}
      hasSafeArea={true}
      hasTopSafeArea={false}
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
      {/* Call View */}
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
                  { height: 150, width: 150 },
                  dimensions.width
                )}
              />
            </Circle>
          </View>
          {/* User 2 */}
          <View
            style={StyleSheet.applyWidth({ marginLeft: -30 }, dimensions.width)}
          >
            <Circle bgColor={theme.colors.text.light} size={150}>
              <Image
                resizeMode={'cover'}
                source={imageSource(Images['IconProfile'])}
                style={StyleSheet.applyWidth(
                  { height: 150, width: 150 },
                  dimensions.width
                )}
              />
            </Circle>
          </View>
        </View>
        {/* waiting for host */}
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
          {'Waiting for host\n'}
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
      <View>
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
          title={'Join Meeting\n'}
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
              marginBottom: 25,
              marginLeft: 40,
              marginRight: 40,
              textAlign: 'center',
            },
            dimensions.width
          )}
          title={'Start Meeting'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(CallWaitingScreen);
