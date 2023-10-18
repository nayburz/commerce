import React from "react";
import { BiSearch } from "react-icons/bi";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div>
      <div className="flex items-center bg-gray-100 p-2 rounded-full max-md:hidden">
        <button>
          <BiSearch size={20} className="opacity-50" />
        </button>
        <input
          type="text"
          placeholder="Search"
          autoComplete="false"
          className="outline-none bg-transparent ml-2 text-[15px] caret-blue-500 placeholder:font-light placeholder:text-gray-600"
        />
      </div>
    </div>
  );
};

export default SearchBar;
