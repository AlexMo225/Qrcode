import { render, fireEvent } from '@testing-library/react-native';
import MainScreen from '../screens/MainScreen';

test('should render main screen', () => {
  const { getByPlaceholderText, getByText } = render(<MainScreen />);
  expect(getByPlaceholderText('Nom')).toBeTruthy();
  expect(getByPlaceholderText('Prénom')).toBeTruthy();
  expect(getByText('Générer le QR Code')).toBeTruthy();
});

test('should call handleGenerateQR when button pressed', () => {
  const { getByText, getByPlaceholderText } = render(<MainScreen />);
  fireEvent.changeText(getByPlaceholderText('Nom'), 'John');
  fireEvent.changeText(getByPlaceholderText('Prénom'), 'Doe');
  fireEvent.press(getByText('Générer le QR Code'));
});
