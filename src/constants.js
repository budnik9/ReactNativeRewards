import {NativeModules, Platform} from 'react-native';

const {StatusBarManager} = NativeModules;

export const platforms = {
  IOS: 'ios',
  ANDROID: 'android',
};

export const STATUS_BAR_HEIGHT = Platform.OS === platforms.IOS ? StatusBarManager.HEIGHT : 0;
