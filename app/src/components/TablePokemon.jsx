import React, { useEffect, useState } from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from '@mui/material';
import { Link } from 'react-router-dom';



/* const styles= makeStyles({
    tablaMaterial:{
        maxHeight: 500
    }
}) */

const TablePokemon = ({ listPokemon = []}) => {

 const [listPoke, setListPoke] = useState() 

   useEffect(() => {
    setListPoke(listPokemon)
}, [listPokemon])

  const splitUrl = (url) => {
    return url.split("/")[6]
  } 


  // const classes = styles();
  return (

    <TableContainer sx={{ fontStyle: 'oblique' }} component={Paper}>
      <Table stickyHeader aria-label="simple table" xs={{ borderColor: 'gris' }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ h1: { color: 'black' } }} align="center"><b>Name</b></TableCell>
            <TableCell align="center"><b>Especification</b></TableCell>
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
                <Link underline="none" to={`/SeeDetails/${row.url.split("/")[6]}`}>See details</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


  );

}
export default TablePokemon;
