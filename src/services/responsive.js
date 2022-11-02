import {Dimensions, PixelRatio} from 'react-native';

const {height, width} = Dimensions.get('window');

export const heightPercentageToDpi = heightPercent =>
  PixelRatio.roundToNearestPixel((height * parseFloat(heightPercent)) / 100);

export const widthPercentageToDpi = widthPercent =>
  PixelRatio.roundToNearestPixel((width * parseFloat(widthPercent)) / 100);
