import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ViewPropTypes, Image, SafeAreaView } from 'react-native';
import { oneOfType, bool, func, string, number } from 'prop-types';
import Constants from '../../constants';

const styles = StyleSheet.create({

  safeAreaView: {
    flex: 1
  },
  container: {
    alignItems: 'center',
    backgroundColor: Constants.Colors.TRANSPARENT,
    flexDirection: 'row',
    shadowColor: 'gray',
    color: Constants.Colors.TRANSPARENT,
    height: 60,
  },
  content: {
    flexDirection: 'row',
    marginRight: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 4,
    marginLeft: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 4,
    alignItems: 'center',
  },
  iconStyle: {
    height: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 5,
    width: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 5,
    resizeMode: 'contain'
  },
  textStyle: {
    textTransform: 'capitalize',
    color: Constants.Colors.STEELBLUE,
    justifyContent: 'center',
    textAlign: 'center',
    flex: 1,
  },
  rightSideView: {
    marginRight: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 4,
  }
});

function Header(props) {
  const {
    hideleftIcon,
    hideIcon,
    iconName,
    onPressBack,
    style,
    textStyle,
    text,
    rightIcon,
    onPressRight
  } = props;

  return (
    <SafeAreaView>
      <View style={[styles.container, style]}>
        <TouchableOpacity
          hitSlop={Constants.BaseStyle.HIT_SLOP}
          underlayColor={Constants.Colors.TRANSPARENT}
          onPress={onPressBack}
          style={styles.content}
        >
          {!hideleftIcon && <Image source={iconName} style={styles.iconStyle} />}
        </TouchableOpacity>
        <Text numberOfLines={1} style={[styles.textStyle, textStyle]}>{text}</Text>
        {!hideIcon ? <TouchableOpacity onPress={onPressRight} style={styles.rightSideView}><Image source={iconName} style={styles.iconStyle} /></TouchableOpacity> : null}
      </View>
    </SafeAreaView>
  );
};

Header.propTypes = {
  hideleftIcon: bool,
  hideIcon: bool,
  onPressBack: func,
  style: ViewPropTypes.style,
  text: string,
  textStyle: Text.propTypes.style,
  onPressRight: func
};

Header.defaultProps = {
  hideleftIcon: false,
  hideIcon: false,
  iconName: Constants.Images.back,
  onPressBack: () => true,
  onPressRight: () => { },
  style: {},
  text: '',
  textStyle: {},

};

export default Header;