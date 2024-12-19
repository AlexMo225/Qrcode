import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useUser } from '../context/UserContext';

const MainScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const { saveUserInfo } = useUser();

  const handleGenerateQR = () => {
    if (name && surname) {
      saveUserInfo(name, surname);
      navigation.navigate('QRCodeScreen'); // Naviguer vers l'écran QR Code
    } else {
      alert("Veuillez remplir tous les champs");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nom"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Prénom"
        value={surname}
        onChangeText={setSurname}
      />
      <Button title="Générer le QR Code" onPress={handleGenerateQR} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '100%',
    paddingLeft: 10,
  },
});

export default MainScreen;
