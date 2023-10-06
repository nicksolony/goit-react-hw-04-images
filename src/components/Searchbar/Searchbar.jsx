import React, { useState } from "react";

import { Header,SearchForm,SearchButton, ButtonLabel, SearchInput } from './Searchbar.styled';


export const SearchBar = ({onSubmit}) => {
    
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (e) => {
        
        setSearchQuery(e.currentTarget.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(searchQuery);
        
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