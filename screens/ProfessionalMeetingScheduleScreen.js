import React from 'react';
import {
  ScreenContainer,
  SimpleStyleFlatList,
  SimpleStyleScrollView,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, ImageBackground, Text, View } from 'react-native';
import { Fetch } from 'react-request';
import * as SupabaseApi from '../apis/SupabaseApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const ProfessionalMeetingScheduleScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  // Turns dates into readable formats for humans.
  const HumanReadableDate = time => {
    return new Date(time).toLocaleString();
  };

  return (
    <ScreenContainer
      scrollable={false}
      hasSafeArea={true}
      hasTopSafeArea={false}
    >
      {/* Header Wrapper */}
      <View
        style={StyleSheet.applyWidth(
          {
            marginBottom: 12,
            marginTop: 18,
            paddingLeft: 12,
            paddingRight: 12,
          },
          dimensions.width
        )}
      >
        {/* Schedule ~ */}
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
          {'Meeting Schedule'}
        </Text>
      </View>
      {/* Content Scroll Wrapper */}
      <SimpleStyleScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        style={StyleSheet.applyWidth(
          { paddingLeft: 12, paddingRight: 12 },
          dimensions.width
        )}
      >
        {/* Content Wrapper */}
        <View
          style={StyleSheet.applyWidth(
            { flexGrow: 1, flexShrink: 0 },
            dimensions.width
          )}
        >
          <SupabaseApi.FetchProfessionalprofileGET>
            {({ loading, error, data, refetchProfessionalprofile }) => {
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
                  listKey={'TqLNdXtE'}
                  nestedScrollEnabled={false}
                  numColumns={1}
                  onEndReachedThreshold={0.5}
                  renderItem={({ item, index }) => {
                    const listData = item;
                    return (
                      <Touchable>
                        {/* Surface Elevation 8 */}
                        <Surface
                          elevation={3}
                          style={StyleSheet.applyWidth(
                            {
                              backgroundColor: palettes.App.Peoplebit_White,
                              borderColor: theme.colors.border.brand,
                              borderLeftWidth: 1,
                              borderRadius: 8,
                              marginBottom: 12,
                              overflow: 'hidden',
                            },
                            dimensions.width
                          )}
                        >
                          {/* Schedule Record */}
                          <View
                            style={StyleSheet.applyWidth(
                              { flexDirection: 'row' },
                              dimensions.width
                            )}
                          >
                            <View>
                              {/* Card Image Asset */}
                              <ImageBackground
                                resizeMode={'cover'}
                                source={imageSource(
                                  'https://picsum.photos/100'
                                )}
                                style={StyleSheet.applyWidth(
                                  { height: 100, width: 100 },
                                  dimensions.width
                                )}
                              />
                            </View>
                            {/* Card Info Wrapper */}
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  flexShrink: 1,
                                  paddingBottom: 8,
                                  paddingLeft: 8,
                                  paddingRight: 8,
                                  paddingTop: 8,
                                },
                                dimensions.width
                              )}
                            >
                              {/* Meeting Date Time ~ */}
                              <Text
                                accessible={true}
                                selectable={false}
                                style={StyleSheet.applyWidth(
                                  {
                                    color: palettes.App.Peoplebit_Salmon_Red,
                                    fontFamily: 'Inter_400Regular',
                                    fontSize: 10,
                                    paddingBottom: 6,
                                  },
                                  dimensions.width
                                )}
                              >
                                {listData?.created_at}
                                {'\n'}
                              </Text>
                              {/* Meeting Name ~ */}
                              <Text
                                accessible={true}
                                selectable={false}
                                style={StyleSheet.applyWidth(
                                  {
                                    color:
                                      palettes.App.Peoplebit_Dark_Emerald_Green,
                                    fontFamily: 'Inter_600SemiBold',
                                    fontSize: 21,
                                    marginBottom: 3,
                                  },
                                  dimensions.width
                                )}
                              >
                                {listData?.firstname} {listData?.surname}
                              </Text>
                              {/* Text ~ */}
                              <Text
                                accessible={true}
                                selectable={false}
                                style={StyleSheet.applyWidth(
                                  {
                                    color: palettes.App.Peoplebit_Earthy_Brown,
                                    fontFamily: 'Inter_400Regular',
                                    fontSize: 11,
                                    lineHeight: 13,
                                    marginTop: 6,
                                  },
                                  dimensions.width
                                )}
                              >
                                {listData?.profession}
                              </Text>
                            </View>
                          </View>
                        </Surface>
                      </Touchable>
                    );
                  }}
                  showsHorizontalScrollIndicator={true}
                  showsVerticalScrollIndicator={true}
                  style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
                />
              );
            }}
          </SupabaseApi.FetchProfessionalprofileGET>
        </View>
      </SimpleStyleScrollView>
      {/* Footer Wrapper */}
      <View
        style={StyleSheet.applyWidth(
          { justifyContent: 'flex-end', paddingLeft: 12, paddingRight: 12 },
          dimensions.width
        )}
      />
    </ScreenContainer>
  );
};

export default withTheme(ProfessionalMeetingScheduleScreen);
