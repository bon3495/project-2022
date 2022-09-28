import React from 'react';
import { COMMON_NAME } from '~/constants/common-values';
import InputField from '~/components/InputController/InputField';
import { searchIcon } from '~/styles/icons/icons';

const SearchBar = () => {
  return (
    <InputField
      inputElementClassName="w-[358px] focus:w-[600px] text-base text-dark-4 leading-5 dark:bg-dark-black transition-all ease-in-out duration-200"
      prevIcon={searchIcon}
      name={COMMON_NAME.searchName}
      placeholder={COMMON_NAME.placeholderSearch}
    />
  );
};

export default SearchBar;
