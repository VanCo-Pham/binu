import { useState, useEffect } from 'react'
import * as React from 'react'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { supabase } from '../supabaseClient'



  async function getNames() {
    const { data } = await supabase.from("farmer").select();
    console.log("Da lay data: " + data);
  }

function Row({name, sdt, address, area}) {
  const [open, setOpen] = React.useState(false);


  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {name}
        </TableCell>
        <TableCell align="right">{address}</TableCell>
        <TableCell align="right">{sdt}</TableCell>
        <TableCell align="right">{area}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                {/* <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody> */}
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

// Row.propTypes = {
//     name: PropTypes.string.isRequired,
//     address: PropTypes.string,
//     sdt: PropTypes.string,
//     area : PropTypes.string
//     // history: PropTypes.arrayOf(
//     //   PropTypes.shape({
//     //     amount: PropTypes.number.isRequired,
//     //     customerId: PropTypes.string.isRequired,
//     //     date: PropTypes.string.isRequired,
//     //   }),
//     // ),
// };


export default function CollapsibleTable() {
  const [fnames, setNames] = useState([]);

  async function getNames() {
    const { data } = await supabase.from("farmer").select();
    console.log("Da lay data: " + data);
    setNames(data);
  }
  useEffect(() => {
    getNames();
  }, [])
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Tên</TableCell>
            <TableCell align="right">Địa chỉ</TableCell>
            <TableCell align="right">Điện thoại</TableCell>
            <TableCell align="right">Diện tích</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fnames.map((data) => (
            <Row key={data.name} name={data.name} address={data.address} sdt={data.sdt} area={data.area} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
