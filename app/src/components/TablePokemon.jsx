import React from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from '@mui/material';
import { Link } from 'react-router-dom';
import { borderColor } from '@mui/system';

/* const styles= makeStyles({
    tablaMaterial:{
        maxHeight: 500
    }
}) */

const TablePokemon = ({ listPokemon = [] }) => {

    // const classes = styles();
    return (

         <TableContainer component={Paper}>
      <Table stickyHeader aria-label="simple table" xs={{borderColor: 'gris'}}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Especificacion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listPokemon.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">
              <Link to={`/SeeDetails/${row.id}`}> See details</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 

        
);

}
export default TablePokemon;
