import React from 'react';
import { FilterDiv, FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ value, onChangeFilter }) => {
  return (
    <FilterDiv>
      <FilterLabel>
        Find contacts by name
        <FilterInput
          type="text"
          name="filter"
          placeholder="Enter contact name"
          value={value}
          onChange={onChangeFilter}
        />
      </FilterLabel>
    </FilterDiv>
  );
};
