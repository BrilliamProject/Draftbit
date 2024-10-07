import * as StyleSheet from './utils/StyleSheet';

import Breakpoints from './utils/Breakpoints';

import palettes from './themes/palettes';

export const ModalStyles = theme =>
  StyleSheet.create({
    dell: {
      style: {},
      props: { presentationStyle: 'pageSheet', transparent: true },
    },
    'dell 2': {
      style: {},
      props: { presentationStyle: 'pageSheet', transparent: true },
    },
  });

export const SliderStyles = theme =>
  StyleSheet.create({
    Slider: { style: { marginLeft: 12, marginRight: 12 }, props: {} },
  });

export const NumberInputStyles = theme =>
  StyleSheet.create({
    'Number Input': {
      style: {
        borderBottomWidth: 1,
        borderColor: theme.colors.border.brand,
        borderLeftWidth: 1,
        borderRadius: 8,
        borderRightWidth: 1,
        borderTopWidth: 1,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
      },
      props: {},
    },
  });

export const TextStyles = theme =>
  StyleSheet.create({
    Text: { style: { color: theme.colors.text.strong }, props: {} },
    'Text 2': { style: { color: theme.colors.text.strong }, props: {} },
  });

export const ButtonStyles = theme =>
  StyleSheet.create({
    Button: {
      style: {
        backgroundColor: theme.colors.branding.primary,
        borderRadius: 8,
        fontFamily: 'System',
        fontWeight: '700',
        textAlign: 'center',
      },
      props: {},
    },
    'Sign-in': {
      style: {
        backgroundColor: theme.colors.branding.primary,
        borderRadius: 8,
        fontFamily: 'System',
        fontWeight: '700',
        position: 'relative',
        textAlign: 'center',
        top: 10,
        width: 100,
      },
      props: {},
    },
  });

export const ImageStyles = theme =>
  StyleSheet.create({
    Image: { style: { height: 100, width: 100 }, props: {} },
    'Image 2': { style: { height: 100, width: 100 }, props: {} },
    'Image 3': { style: { height: 100, width: 100 }, props: {} },
  });

export const TextInputStyles = theme =>
  StyleSheet.create({
    'Text Area': {
      style: {
        borderBottomWidth: 1,
        borderColor: theme.colors.border.brand,
        borderLeftWidth: 1,
        borderRadius: 8,
        borderRightWidth: 1,
        borderTopWidth: 1,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
      },
      props: {},
    },
    'Text Input': {
      style: {
        borderBottomWidth: 1,
        borderColor: theme.colors.border.brand,
        borderLeftWidth: 1,
        borderRadius: 8,
        borderRightWidth: 1,
        borderTopWidth: 1,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
      },
      props: {},
    },
  });

export const LinkStyles = theme =>
  StyleSheet.create({
    Link: { style: { color: theme.colors.branding.primary }, props: {} },
  });

export const SurfaceStyles = theme =>
  StyleSheet.create({ Surface: { style: { minHeight: 40 }, props: {} } });

export const BottomSheetStyles = theme =>
  StyleSheet.create({
    'Bottom Sheet': {
      style: {
        paddingBottom: 10,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 10,
      },
      props: {},
    },
  });

export const VideoPlayerStyles = theme =>
  StyleSheet.create({ Video: { style: { height: 215 }, props: {} } });

export const SwiperStyles = theme =>
  StyleSheet.create({
    Swiper: { style: { height: 300, width: '100%' }, props: {} },
  });

export const FetchStyles = theme =>
  StyleSheet.create({
    Fetch: { style: { minHeight: 40 }, props: {} },
    'Fetch 2': { style: { minHeight: 40 }, props: {} },
  });

export const CheckboxRowStyles = theme =>
  StyleSheet.create({
    'Checkbox Row': {
      style: { minHeight: 50, paddingLeft: 20, paddingRight: 20 },
      props: {},
    },
  });

export const ActionSheetItemStyles = theme =>
  StyleSheet.create({
    'Action Sheet Item': { style: { textAlign: 'center' }, props: {} },
  });

export const LottieAnimationStyles = theme =>
  StyleSheet.create({
    'Lottie Animation': { style: { height: 100, width: 100 }, props: {} },
  });
