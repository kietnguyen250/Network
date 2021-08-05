import {StyleSheet, Dimensions} from 'react-native';
import COLOR from '../../consts/color';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    padding: 8,
    backgroundColor: COLOR.white,
  },
  title: {
    marginTop: 15,
    paddingLeft: 8,
  },
  textTitle: {
    fontSize: 25,
    marginBottom: 5,
  },
  line: {
    width: width * 0.15,
    height: 2.5,
    backgroundColor: COLOR.primary,
    marginVertical: 5,
  },
  input: {
    width: width * 0.9,
    height: 50,
    alignSelf: 'center',
    marginVertical: 12,
    paddingVertical: 3,
    borderBottomWidth: 1,
    borderBottomColor: COLOR.grey,
  },
  forgot: {
    alignSelf: 'flex-end',
    padding: 8,
  },
  textForgot: {
    color: COLOR.grey,
    fontSize: 13,
  },
  login: {
    width: width * 0.9,
    height: 50,
    borderRadius: 5,
    marginVertical: 15,
    backgroundColor: COLOR.primary,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogin: {
    color: COLOR.white,
    fontSize: 14,
  },
  textOr: {
    textAlign: 'center',
    color: COLOR.gray,
    fontSize: 13,
  },
  loginTwit: {
    width: width * 0.9,
    height: 50,
    borderRadius: 5,
    marginVertical: 15,
    backgroundColor: COLOR.twiterColor,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textLoginTwit: {
    color: COLOR.white,
    fontSize: 14,
    marginHorizontal: 3,
  },
  loginFB: {
    width: width * 0.9,
    height: 50,
    borderRadius: 5,
    marginVertical: 5,
    backgroundColor: COLOR.secondary,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textLoginFB: {
    color: COLOR.white,
    fontSize: 14,
    marginHorizontal: 3,
  },
  viewSignUp: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 8,
    position: 'absolute',
    bottom: 12,
  },
  textSignUp: {
    color: COLOR.primary,
  },
});
