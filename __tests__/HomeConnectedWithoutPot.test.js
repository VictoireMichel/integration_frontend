import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from "enzyme";
import HomeConnectedWithoutPot from "../Components/Home/HomeConnectedWithoutPot";
import renderer from 'react-test-renderer';
import { render, fireEvent, waitFor } from '@testing-library/react-native';


jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: ''
}));

Enzyme.configure({ adapter: new Adapter() });


describe("HomeConnectedWithoutPot", () => {

    it('renders correctly', () => {
        renderer.create(<HomeConnectedWithoutPot />);
    });

    it('navigates on button press', () => {
        const navigate = jest.fn();
        const { getByTestId } = render(<HomeConnectedWithoutPot navigation={{ navigate }} />);
        fireEvent.press(getByTestId("List"));
        expect(navigate).toHaveBeenCalledWith('List');
    });
});




