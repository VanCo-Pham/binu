import React, {useState, useEffect} from "react";
import { supabase } from '../supabaseClient'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';

function InputGood(props) {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [quantity, setQuantity] = useState("");
    const [goodType, setGoodType] = useState([])
    
    async function addInputGood() { await supabase
    .from('nhapHang')
    .insert([
      { name: name, type: type, quantity: quantity },
    ])
    }
    async function getGoodType() {
        const { data } = await supabase.from("goodType").select('name');
          setGoodType(data);
          console.log("Da lay goodType: " + data[0]);
      }
      useEffect(() => {
        getGoodType();
      }, [])
    const handleSubmit = (event) => {
      event.preventDefault();
      if (name !== "" && quantity !== 0 && type !== "") {

          addInputGood(name);
          alert(`Đã nhận hàng`);
          setName("");
          setType("");
          setQuantity("");
        } else {
            alert("Thiếu thông tin, vui lòng điền đầy đủ!")
        }
      // location.reload();
    }
    return (
        <Stack spacing={2}>
        <h2>Nhận Hàng</h2>
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
                {goodType.map((data) => (
                    <MenuItem value={data.name}>{data.name}</MenuItem>
                ))}
                {/* <MenuItem value={20}>Bí Trọc</MenuItem>
                <MenuItem value={30}>Đọt</MenuItem> */}
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

export default InputGood;