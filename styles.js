import {StyleSheet} from 'react-native';

const baseGap = 16;

export const gap = (multiplier = 1) => baseGap * multiplier;

export const colors = {
  brandPrimary: '#ede9e9',
  brandSecondary: '#948661',
};

export const globalStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  rowCenteredContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  columnCenteredContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerGaps: {
    padding: gap(),
  },
  innerVerticalGaps: {
    paddingVertical: gap(),
  },
  innerHorizontalGaps: {
    paddingHorizontal: gap(),
  },
  outerGaps: {
    margin: gap(),
  },
  textBlack: {
    color: 'black',
  },
  textBold: {
    fontWeight: 'bold',
  },
});
