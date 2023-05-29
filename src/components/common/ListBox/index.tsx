"use client";
import React, { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Check } from "react-feather";
import clsx from "clsx";

export type ListBoxOption = { id: number | string; name: string };
type ListBoxProps = {
  label: string;
  options: ListBoxOption[];
  value: ListBoxOption | ListBoxOption[];
  multiple?: boolean;
  onChange: (option: ListBoxOption) => void;
};

const ListBox = ({
  value,
  label,
  options,
  multiple = false,
  onChange,
}: ListBoxProps) => {
  const displayValue = () => {
    if (Array.isArray(value)) {
      return value.length
        ? value.map((option) => option.name).join(", ")
        : "All";
    }
    return value ? value.name : "All";
  };

  return (
    <Listbox value={value} multiple={multiple}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
            {label}
          </Listbox.Label>
          <div className="relative my-2">
            <Listbox.Button
              placeholder="Select some genres..."
              className="relative w-full cursor-pointer rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
            >
              {displayValue()}
            </Listbox.Button>
            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-50 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {options.map((option) => (
                  <Listbox.Option
                    key={option.id}
                    className={({ active }) =>
                      clsx(
                        active ? "bg-indigo-600 text-white" : "text-gray-900",
                        "relative cursor-pointer select-none py-2 pl-3 pr-9"
                      )
                    }
                    onClick={() => onChange(option)}
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={clsx(
                            selected ? "font-semibold" : "font-normal",
                            "ml-3 block truncate"
                          )}
                        >
                          {option.name}
                        </span>
                        {selected ? (
                          <span
                            className={clsx(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <Check className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default ListBox;
