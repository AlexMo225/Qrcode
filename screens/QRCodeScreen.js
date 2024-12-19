import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useUser } from '../context/UserContext';

const QRCodeScreen = () => {
  const { userInfo } = useUser();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>QR Code pour :</Text>
      <Text style={styles.userInfo}>
        {userInfo.name} {userInfo.surname}
      </Text>
      <View style={styles.qrContainer}>
        <QRCode 
          value={`${userInfo.name} ${userInfo.surname}`} 
          size={200} // Taille augmentée pour rendre le QR Code plus grand
          color="#000"
          backgroundColor="#FFF"
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
    backgroundColor: '#F5F5F5', // Arrière-plan moderne
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  userInfo: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  qrContainer: {
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    elevation: 5, // Effet d'ombre pour le QR Code
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});

export default QRCodeScreen;
