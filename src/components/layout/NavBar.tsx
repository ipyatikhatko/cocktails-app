import React from "react";
import TextField from "@/components/common/TextField";
import { Search } from "react-feather";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className="pt-5 w-full flex items-center fixed top-0 left-0 z-[55]">
      <div className="lg:max-w-screen-xl mx-auto w-full h-full rounded-full shadow-md shadow-black/70 backdrop-blur-sm p-4 bg-gradient-to-b from-cyan-400 to-blue-500">
        <TextField
          startIcon={<Search className="text-slate-500" size={18} />}
          containerClassName="z-50 p-2 rounded-full bg-white border border-slate-200 shadow-md w-[260px]"
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
