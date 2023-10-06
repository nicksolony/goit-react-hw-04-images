import React, { useState } from "react";

import { Header,SearchForm,SearchButton, ButtonLabel, SearchInput } from './Searchbar.styled';


export const SearchBar = ({onSubmit}) => {
    // state = { searchQuery: '' };
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (e) => {
        // this.setState({ searchQuery: e.currentTarget.value });
        setSearchQuery(e.currentTarget.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(searchQuery);
        // this.setState({ searchQuery: '' });
    };

    

        return (
        <Header>
            <SearchForm onSubmit={handleSubmit}>
                <SearchButton  type="submit">
                    <ButtonLabel>Search</ButtonLabel>
                </SearchButton>

                <SearchInput
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={searchQuery}
                    onChange={handleChange}
                />
            </SearchForm>
        </Header>
    );
    };



export default SearchBar;