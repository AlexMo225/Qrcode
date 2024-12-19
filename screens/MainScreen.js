import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
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
      alert('Veuillez remplir tous les champs');
    }
  };

  return (
    <View style={styles.container}>
      {/* Titre principal */}
      <Text style={styles.title}>Générateur de QR Code</Text>

      {/* Champs de saisie */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nom"
          value={name}
          onChangeText={setName}
          testID="nom-input"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Prénom"
          value={surname}
          onChangeText={setSurname}
          testID="prenom-input"
          placeholderTextColor="#888"
        />
      </View>

      {/* Bouton */}
      <View style={styles.buttonContainer}>
        <Button
          title="Générer le QR Code"
          onPress={handleGenerateQR}
          testID="generate-button"
          color="#4CAF50"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5', // Couleur de fond moderne
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#4CAF50',
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#FFF',
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonContainer: {
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden', // Pour appliquer le border-radius au bouton natif
  },
});

export default MainScreen;
