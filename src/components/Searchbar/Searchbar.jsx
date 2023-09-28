import React from "react";

import { Header,SearchForm,SearchButton, ButtonLabel, SearchInput } from './Searchbar.styled';


export const SearchBar = ({ onSubmit }) => {
    return (
        <Header>
            <SearchForm onSubmit={onSubmit}>
                <SearchButton  type="submit">
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