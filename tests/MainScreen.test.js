import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import MainScreen from "../screens/MainScreen";

describe("MainScreen Tests", () => {
    it("devrait correspondre au snapshot", () => {
        const { toJSON } = render(<MainScreen />);
        expect(toJSON()).toMatchSnapshot();
    });

    it("devrait vérifier que le composant principal existe", () => {
        const { getByTestId } = render(<MainScreen />);
        const mainScreen = getByTestId("main-screen");
        expect(mainScreen).toBeTruthy();
    });

    it("devrait vérifier que les champs nom et prénom existent", () => {
        const { getByPlaceholderText } = render(<MainScreen />);
        const nomInput = getByPlaceholderText("Nom");
        const prenomInput = getByPlaceholderText("Prénom");
        expect(nomInput).toBeTruthy();
        expect(prenomInput).toBeTruthy();
    });

    it("devrait vérifier que le bouton Générer existe", () => {
        const { getByText } = render(<MainScreen />);
        const generateButton = getByText("Générer le QR Code");
        expect(generateButton).toBeTruthy();
    });

    it("devrait appeler la fonction de navigation une fois lors du clic sur le bouton", () => {
        const navigationMock = { navigate: jest.fn() };
        const { getByText } = render(
            <MainScreen navigation={navigationMock} />
        );
        const generateButton = getByText("Générer le QR Code");
        fireEvent.press(generateButton);
        expect(navigationMock.navigate).toHaveBeenCalledTimes(1);
        expect(navigationMock.navigate).toHaveBeenCalledWith("QrCodeScreen");
    });
});
