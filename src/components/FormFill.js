import React, { useState } from 'react';
import { FormControl, Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';


function FormFill({Login, error}) {
    const [details, setDetails] = useState({name:"",telephone:"", dateofbirth:"", Gender:""});
    
    const [ Gender, setGender ] = useState('');

    const handleChange = (event) => {
        setGender(event.target.value);
      };

        const submitHandler = e => {
        e.preventDefault();
        FormFill(details);
    }
    
    return (
    <form onSubmit={submitHandler}>
        <div className="form-inner">
            <h2>Form Fill</h2>
            {
            (error != "") ? (<div className="error">{error}</div>) : ""
        }
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
            </div>
            <div className="form-group">
                <label htmlFor="telephone">Phone Number: </label>
                <input type="tel" name="telephone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" id="telephone" onChange={e => setDetails({...details, telephone: e.target.value})} value={details.telephone} />
            </div>
                     
            <div className="form-group">
                <label htmlFor="dateofbirth">Date of Birth: </label>
                <input type="date" name="dateofbirth" id="dateofbirth" onChange={e=>setDetails({...details, dateofbirth: e.target.value})} value={details.dateofbirth} />
            </div>
            <div>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="select-small">Gender</InputLabel>
            <Select
                labelId="Gender"
                id="Gender"
                value={Gender}
                label="Gender"
                onChange={handleChange}
                >       
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
                </Select>
            </FormControl>
            </div>
            <div className="form-group"> 
            <input type="submit" value="save"/>
            </div>
        </div>
    </form>
  );}

export default FormFill;