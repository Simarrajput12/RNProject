import { StyleSheet } from 'react-native';
import Constants from '../../constants';

const styles = StyleSheet.create({
    container: {
      backgroundColor: Constants.Colors.WHITE,
      flex: 1,
      marginTop: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 1.5,

    },
    rowStyle:  { 
      padding: Constants.BaseStyle.PADDING },
    textStyle: { 
      ...Constants.Fonts.regular 
    },
    leftIconStyle: {
        height:45,
        width:45
    },
    rightIconStyle: {
      height:30,
      width:30
    },
    headerStyle :{
        marginTop: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 1.5,
    },
    bubbleView: {
      alignItems:'center',
      bottom:80
    },
    titleView: {
    marginTop:20,
    paddingHorizontal: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 2,
    },
    title: {
      ...Constants.Fonts.OpenSans.extraLargeBold,
    },
    viewAll: {
      ...Constants.Fonts.OpenSans.smallBold,
      color: Constants.Colors.PRIMARY_COLOR
    }
  
  });

  export default styles;