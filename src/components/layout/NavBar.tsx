import React from "react";
import TextField from "@/components/common/TextField";
import { Search } from "react-feather";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className="xs:pt-5 xs:px-4 h-[8vh] xs:h-[10vh]  w-full flex items-center fixed top-0 left-0 z-[55]">
      <div className="flex items-center px-2 xs:px-3 lg:max-w-screen-xl mx-auto w-full h-full xs:rounded-xl bg-gradient-to-br from-gray-900 to-gray-600 backdrop-blur">
        <TextField
          startIcon={<Search className="text-slate-500" size={18} />}
          containerClassName="z-50 p-1 md:p-2 rounded-full bg-white border border-slate-200 shadow-md w-[260px]"
          className="bg-transparent text-sm placeholder:text-slate-500"
          placeholder="Search movies here..."
          value=""
          onChange={() => {}}
        />
      </div>
    </nav>
  );
};

export default NavBar;
