import React, {useState, useEffect, forwardRef, useImperativeHandle} from "react";
import { supabase } from '../supabaseClient'

const FarmerList = forwardRef((props, ref) =>  {
    const [fnames, setNames] = useState([]);

    useImperativeHandle(ref, () => ({

      getAlert() {
        getNames()
      }
  
    }));
    useEffect(() => {
      getNames();
      console.log("useEffect is running from beginning")
    },[])
    useEffect(() => {
      console.log("useEffect is re-running")
    },[fnames])
    async function getNames() {
      const { data } = await supabase.from("farmer").select();
        setNames(data);
        console.log("Da lay data: " + data);
    }
    return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      <div>
        <h2>Danh sách Farmer</h2>
        <ul>
          Danh sách farmer
        {fnames.map((fname) => (
          <li key={fname.name}>{fname.name}</li>
          ))}
        </ul>
      </div>
    </div>
    )
})

export default FarmerList;