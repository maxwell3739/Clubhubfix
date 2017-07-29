//Styles
import {
  StyleSheet
} from 'react-native';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    flex: 3/4,
    backgroundColor: '#ee593b',
    width: '100%',
    height: 50
  },
  center: {
    // alignItems: 'center',
    // justifyContent: 'center',
    flex: 20,
    backgroundColor: 'white',
    width: '100%',
    height: 50
  },
  footer: {
    flex: 4,
    backgroundColor: '#ee593b',
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textBig: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#463628',
  },
  textSmall: {
    fontSize: 12,
    textAlign: 'center',
    margin: 10,
  },
  textClub: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    padding: 10,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 20,
    borderRadius: 20,
    borderColor: '#ef5a3b',
    borderWidth: 3,
    width: 280
  },
  //FOR CAMERA
  buttonSolidYellow: {
    padding: 10,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: '#f5c151',
    borderWidth: 3,
    width: 280
  },
  buttonLabelWhite: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white'
  },
  //
  buttonLabel: {
    textAlign: 'center',
    fontSize: 20,
    color: '#545454'
  },
  inputField: {
    height: 40,
    borderColor: '#f5c151',
    borderWidth: 3,
    margin: 5,
    borderRadius: 20,
    paddingLeft: 15,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    display: 'flex',
    height: 100,
    width: 250,
    resizeMode: 'stretch',
    marginBottom: 20,
    marginTop: 20,
  },
  imageSmall: {
    display: 'flex',
    height: 60,
    width: 300,
    resizeMode: 'stretch',
    marginBottom: 20,
    marginTop: 5,
  },
  textInstruct: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 5,
    color: '#463628',
  },
  imageThumb: {
    display: 'flex',
    height: 50,
    width: 50,
  },
  bluebox: {
    width: 50,
    height: 50,
    backgroundColor: 'blue'
  },
  //CAMERA
  camcontainer: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: 'transparent',
    borderRadius: 5,
    padding: 10,
    margin: 40
  },
  // //RECEIPT PAGE
  receiptImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  }
};
export default styles
