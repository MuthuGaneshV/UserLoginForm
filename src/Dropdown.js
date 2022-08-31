import React, { useState } from 'react'
import './Dropdown.css';
import Select from 'react-select';

function Dropdown() {
  const options = [
    { value: "Male", label: "Male"},
    { value:"Female", label: "Female"},
  ];
  const handleChange = (selectedOption) => {
    console.log("handleChange", selectedOption);
  };
  return <Select options={options} label="Gender" onChange={handleChange}/>;
};
export default Dropdown;