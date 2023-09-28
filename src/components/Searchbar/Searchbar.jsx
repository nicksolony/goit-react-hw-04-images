import React, { Component } from "react";

import { Header,SearchForm,SearchButton, ButtonLabel, SearchInput } from './Searchbar.styled';


class SearchBar extends Component {
    state = { searchQuery: '' };

    handleChange = e => {
        this.setState({ searchQuery: e.currentTarget.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.searchQuery);
        // this.setState({ searchQuery: '' });
    };

    render() {

        return (
        <Header>
            <SearchForm onSubmit={this.handleSubmit}>
                <SearchButton  type="submit">
                    <ButtonLabel>Search</ButtonLabel>
                </SearchButton>

                <SearchInput
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={this.state.searchQuery}
                    onChange={this.handleChange}
                />
            </SearchForm>
        </Header>
    );
    };

};

export default SearchBar;