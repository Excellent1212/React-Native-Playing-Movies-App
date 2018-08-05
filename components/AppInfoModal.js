import React from 'react';
import { StyleSheet, Modal, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class AppInfoModal extends React.Component {
  state = { modalVisible: false, };
  render() {
    return (
      <View style={styles.about}>
        <Modal style={styles.modal}
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}>
          <View style={styles.modal}>
            <View>
              <Text style={styles.titleText}>One-Stop Movies App</Text>
              <Text style={styles.mediumText}>is brought to you by:</Text>
              <Text style={styles.khoa}>Khoa Bui</Text>
              <View style={styles.innerView}>
                <Icon name="logo-github" size={30} color="#ccc6bf"/> 
                <Text style={styles.mediumText}>buihdk</Text>
              </View>
              <View style={styles.innerView}>
                <Icon name="logo-linkedin" size={30} color="#ccc6bf"/> 
                <Text style={styles.mediumText}>in/buihdk</Text>
              </View>
              <View style={styles.innerView}>
                <Icon name="logo-twitter" size={30} color="#ccc6bf"/> 
                <Text style={styles.mediumText}>buihdk</Text>
              </View>
              <View style={styles.innerView}>
                <Icon name="ios-mail" size={30} color="#ccc6bf"/> 
                <Text style={styles.mediumText}>contact@buihdk.com</Text>
              </View>
              <View style={styles.innerView}>
                <Icon name="ios-link" size={30} color="#ccc6bf"/> 
                <Text style={styles.mediumText}>https://www.buihdk.com</Text>
              </View>
              <TouchableOpacity onPress={ () => { this.setState({modalVisible: false}); } }>
                <Text style={styles.close}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <TouchableOpacity onPress={ () => { this.setState({modalVisible: true}); } }>
          <Icon  name="ios-contact" size={30} color="#ccc6bf"/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  about: {
    marginRight: 10,
  },
  modal: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    paddingTop: '45%',
    color: '#fff',
    textAlign: 'center',
    fontSize: 22,
  },
  mediumText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  khoa: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  close: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: '45%',
  }
});