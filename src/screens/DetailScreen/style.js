import { StyleSheet, Dimensions } from 'react-native';
import COLOR from '../../consts/color';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
      },
      title: {
        fontSize: 27,
        marginVertical: 16,
        borderBottomWidth: 1,
      },
      thumb: {
        width: width * 0.95,
        height: 300,
        marginVertical: 20,
        borderRadius: 3,
      },
      info: {
        width: width * 0.9,
        padding: 8,
        justifyContent: 'center',
      },
      txtInfo: {
        fontSize: 19,
      },
  
});
