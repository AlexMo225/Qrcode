import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useUser } from '../context/UserContext';

const QRCodeScreen = () => {
  const { userInfo } = useUser();

  return (
    <View style={styles.container}>
      <Text>QR Code pour :</Text>
      <Text>{userInfo.name} {userInfo.surname}</Text>
      <QRCode value={`${userInfo.name} ${userInfo.surname}`} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default QRCodeScreen;
