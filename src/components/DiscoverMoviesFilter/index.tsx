"use client";
import React, { useState } from "react";
import Button from "../common/Button";
import Modal from "../common/Modal";
import { Filter } from "react-feather";

type DiscoverMoviesFilterProps = {};

const DiscoverMoviesFilter = (props: DiscoverMoviesFilterProps) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  return (
    <>
      <Button
        onClick={handleOpen}
        label="Filters"
        className="w-full sm:w-fit sm:absolute sm:top-0 sm:right-0"
        endIcon={<Filter size={18} />}
      />
      <Modal title="Discover movies filter" show={open} onClose={handleClose}>
        <h1>In development</h1>
        <Button onClick={handleClose} label="Got it!" />
      </Modal>
    </>
  );
};

export default DiscoverMoviesFilter;
