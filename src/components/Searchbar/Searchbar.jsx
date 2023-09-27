import React from "react";

import { Header,SearchForm,SearchButton,ButtonLabelt, ButtonLabel, SearchInput } from './Searchbar.styled';


export const SearchBar = ({ onSubmit }) => {
    return (
        <Header>
            <SearchForm>
                <SearchButton type="submit">
                    <ButtonLabel>Search</ButtonLabel>
                </SearchButton>

                <SearchInput
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </SearchForm>
        </Header>
    );
};