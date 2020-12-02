import { SearchBar } from 'react-native-elements';
import React from "react";

class Search extends React.Component {
    state = {
        search: '',
    };

    updateSearch = (search) => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;

        return (
            <SearchBar
                placeholder="Rechercher..."
                onChangeText={this.updateSearch}
                value={search}
            />
        );
    }
}