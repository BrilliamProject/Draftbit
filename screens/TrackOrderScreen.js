import React from 'react';
import { Button, ScreenContainer, TextInput, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const TrackOrderScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [SelectedTab, setSelectedTab] = React.useState('work');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasBottomSafeArea={false}
      scrollable={true}
    >
      {/* DetailsTab */}
      <View
        style={StyleSheet.applyWidth(
          {
            flexDirection: 'row',
            gap: 3,
            opacity: 1,
            paddingLeft: 25,
            paddingRight: 25,
            paddingTop: 16,
          },
          dimensions.width
        )}
      >
        {/* Work Experience */}
        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
          {/* Active */}
          <>
            {!(SelectedTab === 'work') ? null : (
              <Button
                iconPosition={'left'}
                disabled={true}
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: palettes.Brand.Community_Primary_Alt,
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
        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
          {/* Active */}
          <>
            {!(SelectedTab === 'education') ? null : (
              <Button
                iconPosition={'left'}
                disabled={true}
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: palettes.Brand.Community_Primary_Alt,
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
        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
          {/* Active */}
          <>
            {!(SelectedTab === 'meeting') ? null : (
              <Button
                iconPosition={'left'}
                disabled={true}
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: palettes.Brand.Community_Primary_Alt,
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
      ></View>
    </ScreenContainer>
  );
};

export default withTheme(TrackOrderScreen);
