import React from "react";

import Adapter from 'enzyme-adapter-react-16';
import Enzyme from "enzyme";

import HomeConnectedWithoutPot from "../Components/Home/HomeConnectedWithoutPot";

import renderer from 'react-test-renderer';

import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: ''
}));

Enzyme.configure({ adapter: new Adapter() });

it('renders correctly', () => {
    renderer.create(<HomeConnectedWithoutPot />);
});


describe("HomeConnectedWithoutPot", () => {
    it('navigates on button press', () => {
        const navigate = jest.fn();
        const { getByTestId } = render(<HomeConnectedWithoutPot navigation={{ navigate }} />);
        fireEvent.press(getByTestId("List"));
        expect(navigate).toHaveBeenCalledWith('List');
    });
});

/*
it("displays initial icon", () => {
    const { getByTestId } = render(<HomeConnectedWithoutPot/>);
    const circle = getByTestId("circle");
    expect(circle.children.length).toBe(1);
});
 */




