import React from 'react'
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Link, TablePagination } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const TablePokemon = ({ listPokemon = [] }) => {

  // const [page, setPage] = React.useState(2);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      xs={12}
      p="20"
    >
      <Grid item
        justifyContent="center"
        alignItems="center"
        xs={12} md={12} lg={12}
        sx={{ margin: 3 }}>
        <TableContainer sx={{ fontStyle: 'oblique', border: 1, minWidth: 500 }} component={Paper}>
          {/* <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={100}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          /> */}
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
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="center" component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">
                    <Link underline="none" href={`/SeeDetails/${row.url.split("/")[6]}`}>See details <ArrowOutwardIcon sx={{ fontSize: 'small' }} /></Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

        </TableContainer>
      </Grid>
    </Grid>
  );
}
export default TablePokemon;
