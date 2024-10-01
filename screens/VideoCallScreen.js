import React from 'react';
import {
  Circle,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ImageBackground, Text, View } from 'react-native';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const defaultProps = {
  UserImage:
    'https://s3-us-west-1.amazonaws.com/example-data.draftbit.com/people_photos/square/model-008.jpg',
  UserName: 'Jack Joe',
};

const VideoCallScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer scrollable={false} hasSafeArea={true}>
      {/* Call View */}
      <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
        {/* User 1 */}
        <View
          style={StyleSheet.applyWidth(
            { borderRadius: 8, flex: 1, overflow: 'hidden' },
            dimensions.width
          )}
        >
          <ImageBackground
            resizeMode={'cover'}
            source={imageSource(
              `${props.route?.params?.UserImage ?? defaultProps.UserImage}`
            )}
            style={StyleSheet.applyWidth(
              {
                height: '100%',
                justifyContent: 'space-between',
                width: '100%',
              },
              dimensions.width
            )}
          >
            {/* Back */}
            <View
              style={StyleSheet.applyWidth(
                { marginLeft: 20, marginTop: 20 },
                dimensions.width
              )}
            >
              <Touchable
                onPress={() => {
                  try {
                    navigation.goBack();
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <Circle bgColor={palettes.App['Custom Color_20']} size={48}>
                  <Icon
                    size={24}
                    color={palettes.App['Custom Color']}
                    name={'Ionicons/arrow-back-sharp'}
                  />
                </Circle>
              </Touchable>
            </View>
            {/* Name */}
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.App['Custom Color'],
                  fontFamily: 'Poppins_500Medium',
                  fontSize: 15,
                  paddingBottom: 30,
                  textAlign: 'center',
                },
                dimensions.width
              )}
            >
              {props.route?.params?.UserName ?? defaultProps.UserName}
            </Text>
          </ImageBackground>
        </View>
        {/* User 2 */}
        <View
          style={StyleSheet.applyWidth(
            { borderRadius: 8, flex: 1, marginTop: 4, overflow: 'hidden' },
            dimensions.width
          )}
        >
          <ImageBackground
            resizeMode={'cover'}
            source={imageSource(
              'https://s3-us-west-1.amazonaws.com/example-data.draftbit.com/people_photos/square/model-005.jpg'
            )}
            style={StyleSheet.applyWidth(
              { height: '100%', justifyContent: 'flex-end', width: '100%' },
              dimensions.width
            )}
          >
            {/* Name */}
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.App['Custom Color'],
                  fontFamily: 'Poppins_500Medium',
                  fontSize: 15,
                  paddingBottom: 30,
                  textAlign: 'center',
                },
                dimensions.width
              )}
            >
              {'Katie'}
            </Text>
          </ImageBackground>
        </View>
      </View>
      {/* Buttons */}
      <View
        style={StyleSheet.applyWidth(
          {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            paddingBottom: 25,
            paddingTop: 25,
          },
          dimensions.width
        )}
      >
        {/* Mute */}
        <View>
          <Touchable>
            <Circle bgColor={palettes.App['Custom Color_20']} size={50}>
              <Icon
                size={24}
                color={palettes.App['Custom Color']}
                name={'Ionicons/mic-outline'}
              />
            </Circle>
          </Touchable>
        </View>
        {/* Speaker */}
        <View>
          <Touchable>
            <Circle bgColor={palettes.App['Custom Color_20']} size={50}>
              <Icon
                size={24}
                color={palettes.App['Custom Color']}
                name={'Ionicons/volume-medium-outline'}
              />
            </Circle>
          </Touchable>
        </View>
        {/* Video */}
        <View>
          <Touchable>
            <Circle bgColor={palettes.App['Custom Color_20']} size={50}>
              <Icon
                size={24}
                color={palettes.App['Custom Color']}
                name={'Ionicons/videocam-outline'}
              />
            </Circle>
          </Touchable>
        </View>
        {/* Chat */}
        <View>
          <Touchable>
            <Circle bgColor={palettes.App['Social Orange']} size={50}>
              <Icon
                size={24}
                color={palettes.App['Custom Color']}
                name={'Ionicons/chatbox-outline'}
              />
            </Circle>
          </Touchable>
        </View>
        {/* Close */}
        <View>
          <Touchable
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Circle bgColor={palettes.App['Custom Color_31']} size={50}>
              <Icon
                size={24}
                color={palettes.App['Custom Color']}
                name={'Entypo/cross'}
              />
            </Circle>
          </Touchable>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(VideoCallScreen);
