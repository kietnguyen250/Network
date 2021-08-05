import { StyleSheet, Dimensions } from 'react-native';
import COLOR from '../../consts/color';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    padding: 8,
    backgroundColor: COLOR.white,
    position: 'relative',
  },
  header: {
    width,
    height: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 5,
  },

  textHeader: {
    fontSize: 27,
    fontWeight: 'bold',
    marginVertical: 5,
    color: 'black',
  },
  formInsert: {

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

  viewImg: {
    width: width * 0.9,
    flexDirection: 'row',
    // padding: 8,
    marginVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  img:{
    width: 200,
    height: 150,
    marginHorizontal: 16
  },

  btnImg: {
    backgroundColor: COLOR.dark,
    padding: 8,
    borderRadius: 5,
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16
  },

  btnText: { color: 'white', fontSize: 14 },
  addBtn: {
    width: width * 0.9,
    height: 50,
    borderRadius: 5,
    marginVertical: 30,
    backgroundColor: COLOR.black,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    color: COLOR.white,
    fontSize: 14,
  },
  delBtn:{
    width: width * 0.9,
    height: 50,
    borderRadius: 5,
    marginVertical: 10,
    backgroundColor: COLOR.white,
    borderWidth: 2,
    borderColor: COLOR.black,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  delText:{
    color: COLOR.black,
    fontSize: 14,
  }
});
