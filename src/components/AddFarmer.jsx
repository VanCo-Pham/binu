import React, {useState, useEffect} from "react";
import { supabase } from '../supabaseClient'
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';


function AddFarmer(props) {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [sdt, setSdt] = useState("");
    const [area, setArea] = useState("");
    
    async function addFarmer() { await supabase
    .from('farmer')
    .insert([
      { name: name, address: address, sdt: sdt, area: area },
    ])
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      addFarmer(name);
      props.handleRefresh(name);
      alert(`Farmer Added`);
      // location.reload();

    }
    return (
        <Stack spacing={2}>
        <h2>Thêm Nông Dân</h2>
        <form onSubmit={handleSubmit}>
        <Stack spacing={2}>

          <TextField
          id="outlined-controlled"
          label="Tên"
          margin="normal"
          value={name} 
          onChange={(e) => setName(e.target.value)}/>

          <TextField
          id="outlined-controlled"
          label="Địa chỉ"
          margin="normal"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          />
          
          <TextField
          id="outlined-controlled"
          label="Số điện thoại"
          margin="normal"
          value={sdt}
          onChange={(e) => setSdt(e.target.value)}
          />

          <TextField
          id="outlined-controlled"
          label="Diện tích"
          margin="normal"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          />


          <Button variant="contained" type="submit">Thêm mới</Button>
          <Button variant="outlined" href={`/quanlynd`}>Quay lại</Button>
          </Stack>

        </form>
      </Stack>
    )
}

export default AddFarmer;