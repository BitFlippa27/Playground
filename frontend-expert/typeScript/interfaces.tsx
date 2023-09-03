import React, { ChangeEvent } from "react";
//Interface way

interface ISearchBoxProps {
  searchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  //func: ChangeEventHandler;
}

const SearchBox = ({ searchChange }: ISearchBoxProps) => {
  return (
    <div>
      <input
        type="search" 
        placeholder="search robots" 
        className="pa2 ba b--red br2 bg-lightest-gray "
        onChange={searchChange}
        />
    </div>
  );
} 

export default SearchBox;