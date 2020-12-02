
import React from "react";

class Search extends React.Component {
    state = {
        search: '',
    };

    getInformation = (search) => {
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