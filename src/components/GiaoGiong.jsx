import React, {useState, useEffect} from "react";
import { supabase } from '../supabaseClient'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';

function GiaoGiong(props) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [type, setType] = useState("");
    const [seedType, setSeedType] = useState([]);

    
    async function addGiaoGiong() { await supabase
    .from('giaoGiong')
    .insert([
      { name: name, seedType: type, quantity: quantity },
    ])
    }
    async function getSeedType() {
        const { data } = await supabase.from("SeedType").select('name');
        setSeedType(data);
        console.log("Da lay loai giong: " + data);
      }
    useEffect(() => {
        getSeedType();
      }, [])
    const handleSubmit = (event) => {
      event.preventDefault();
      if (name !== "" && quantity !== 0 && type !== "") {
        addGiaoGiong();
        setName("");
        setType("");
        setQuantity("");
        alert(`Đã thêm`);
      } else {
        alert("Thiếu thông tin, vui lòng điền đầy đủ!")
      }
    }
    return (
        <Stack spacing={2}>
        <h2>Giao giống</h2>
        <form onSubmit={handleSubmit}>
        <Stack spacing={2}>

          <TextField
          id="outlined-controlled"
          label="Tên"
          margin="normal"
          value={name} 
          onChange={(e) => setName(e.target.value)}/>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Loại</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="Loại"
                onChange={(e) => setType(e.target.value)}
            >
                {seedType.map((data) => (
                    <MenuItem value={data.name}>{data.name}</MenuItem>
                ))}
            </Select>
            </FormControl>
          
          <TextField
          id="outlined-controlled"
          label="Số lượng"
          type="number"
          margin="normal"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          />


          <Button variant="contained" type="submit">Xác Nhận</Button>
          <Button variant="outlined" href={`/quanlynd`}>Quay lại</Button>
          </Stack>

        </form>
      </Stack>
    )
}

export default GiaoGiong;