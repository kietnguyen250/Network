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
    marginTop: 20,
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

  signUp: {
    width: width * 0.9,
    height: 50,
    borderRadius: 5,
    marginVertical: 30,
    backgroundColor: COLOR.primary,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSignUp: {
    color: COLOR.white,
    fontSize: 14,
  },

  viewSignIn: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 8,
    position: 'absolute',
    bottom: 12,
  },
  textSignIn: {
    color: COLOR.primary,
  },
});
