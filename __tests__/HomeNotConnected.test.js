import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from "enzyme";
import renderer from 'react-test-renderer';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeNotConnected from "../Components/Home/HomeNotConnected";

Enzyme.configure({ adapter: new Adapter() });


describe("HomeNotConnected", () => {

    it('renders correctly', () => {
        renderer.create(<HomeNotConnected />);
    });

})

