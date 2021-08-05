import { StyleSheet, Dimensions } from 'react-native';
import COLOR from '../../consts/color';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    backgroundColor: COLOR.white,
    position:'relative',
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
  listContainer: {
    width: width * 0.93,
    marginVertical: 8,
    marginHorizontal: 5,
    backgroundColor: COLOR.light,
    borderRadius: 8,

  },

  thumb: {
    alignItems: 'center',
    width: 400,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,

  },

  info: {
    padding: 8
  },
  add_cart: {

    position: 'absolute',
    bottom: 20,
    right: 20,
    // width: 60,
    // height: 40,
    alignItems: 'center',
    justifyContent: 'center',

  },
  detail: {
    color: 'grey',
    borderBottomWidth:2,
    borderBottomColor: 'grey',
    fontSize: 17,
  },
  addBtn: {
    width: 70,
    height: 70,
    backgroundColor:COLOR.black,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 35,
    position:'absolute',
    bottom: 15,
    right: 15,
  },
});
