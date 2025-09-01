import React from "react";
import { Search } from "lucide-react";
import { X } from "lucide-react";

interface SearchBarProps {
  setShowSearchBar: (value: boolean) => void;
}
const SearchBar : React.FC<SearchBarProps> =({setShowSearchBar}) => {
  return (
    <div className="h-full flex flex-col items-center w-full justify-between bg-white p-10 ">
      <div className="flex items-center justify-between w-full mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">Neuxss.</h1>
        <div className="bg-white rounded-full p-1 hover:bg-gray-200 transition cursor-pointer" onClick={()=>setShowSearchBar(false)}>
          <X className="h-9 w-9 hover:rotate-180 transform transition-all hover:scale-105" />
        </div>
      </div>
      <div className="w-full max-w-full">
        <div className="relative">
          <input
            type="text"
            placeholder="Type words and hit enter"
            className="w-full px-4 py-2 border-b text-gray-700  text-3xl border-gray-300  focus:outline-none focus:none  placeholder-gray-400"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-9 w-9 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;