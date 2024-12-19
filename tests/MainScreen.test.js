import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import MainScreen from "../screens/MainScreen";

jest.mock("../context/UserContext", () => ({
  useUser: () => ({
    userInfo: { name: "", surname: "" },
    saveUserInfo: jest.fn(),
  }),
}));

global.alert = jest.fn(); // Mock de la fonction alert

afterEach(() => {
  jest.clearAllMocks(); // Nettoyer les mocks après chaque test
});

describe("MainScreen Tests", () => {
  it("devrait correspondre au snapshot", () => {
    const { toJSON } = render(<MainScreen navigation={{ navigate: jest.fn() }} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("devrait vérifier que les champs nom et prénom existent", () => {
    const { getByTestId } = render(<MainScreen navigation={{ navigate: jest.fn() }} />);
    const nomInput = getByTestId("nom-input");
    const prenomInput = getByTestId("prenom-input");
    expect(nomInput).toBeTruthy();
    expect(prenomInput).toBeTruthy();
  });

  it("devrait vérifier que le bouton Générer existe", () => {
    const { getByTestId } = render(<MainScreen navigation={{ navigate: jest.fn() }} />);
    const generateButton = getByTestId("generate-button");
    expect(generateButton).toBeTruthy();
  });

  it("devrait appeler la fonction de navigation une fois lors du clic sur le bouton", () => {
    const navigationMock = { navigate: jest.fn() };
    const { getByTestId } = render(<MainScreen navigation={navigationMock} />);
    const generateButton = getByTestId("generate-button");

    // Remplir les champs pour éviter l'alerte
    fireEvent.changeText(getByTestId("nom-input"), "John");
    fireEvent.changeText(getByTestId("prenom-input"), "Doe");

    fireEvent.press(generateButton);
    expect(navigationMock.navigate).toHaveBeenCalledTimes(1);
    expect(navigationMock.navigate).toHaveBeenCalledWith("QRCodeScreen");
  });

  it("devrait afficher une alerte si les champs sont vides", () => {
    const { getByTestId } = render(<MainScreen navigation={{ navigate: jest.fn() }} />);
    const generateButton = getByTestId("generate-button");
    fireEvent.press(generateButton);
    expect(global.alert).toHaveBeenCalledWith("Veuillez remplir tous les champs");
  });
});
