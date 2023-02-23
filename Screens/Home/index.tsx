import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../../components/CustomButton';
import {ColorContext} from '../../Context/ColorContext';
import ModalComponent from '../../components/Modal';

function Home(): JSX.Element {
  const {color, setColor} = useContext(ColorContext);
  //   const [color, setColor] = React.useState('black');
  const [modalVisible, setModalVisible] = React.useState(false);

  const handleChageColor = (_color: string) => {
    setColor(_color);
    setModalVisible(true);
  };

  const dinamicStyles = StyleSheet.create({
    textButton: {
      color: color,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={dinamicStyles.textButton}>Prueba Básica</Text>
      <View style={styles.buttonsContainer}>
        <Button color="blue" onPress={() => handleChageColor('blue')}>
          <Text style={styles.textButton}>Blue</Text>
        </Button>
        <Button color="red" onPress={() => handleChageColor('red')}>
          <Text style={styles.textButton}>Red</Text>
        </Button>
      </View>
      <ModalComponent
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    margin: 'auto',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: '60%',
    minHeight: 300,
  },

  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10%',
  },

  textButtonRed: {
    color: 'white',
  },
});

export default Home;
