import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import Button from '../CustomButton';
import {ColorContext} from '../../Context/ColorContext';

function ModalComponent({isVisible, onClose}) {
  const {color, setColor} = useContext(ColorContext);
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      style={styles.modal}>
      <View style={styles.container}>
        <Text style={styles.text}>
          señor usuario el color de la pantalla ha cambiado a {color}
        </Text>
        <Button onPress={onClose}>
          <Text style={styles.buttonText}>Cerrar</Text>
        </Button>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    color: 'black',
  },
  buttonText: {
    color: 'white',
  },
});

export default ModalComponent;
