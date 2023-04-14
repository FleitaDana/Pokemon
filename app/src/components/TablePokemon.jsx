import React from 'react'
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Link, TablePagination } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const TablePokemon = ({ listPokemon = [] }) => {

  const [page, setPage] = React.useState(0); //empieza en pag = 0
  const [rowsPerPage, setRowsPerPage] = React.useState(20); //filas por pagina 20

  const handleChangePage = (event, newPage) => { //cambia pagina; cuando recibe un evento setea a page la nueva pagina
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => { //cambia filas por pagina cuando recibe un evento
    setRowsPerPage(parseInt(event.target.value, 10)); //setea el numero de filas por pagina y
    setPage(0); //retorna a la pagina 0 con la cantidad de filas elegidas anteiormente
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, listPokemon.length - page * rowsPerPage); //calcula el numero de filas vacias que hay que agregar a la tabla para llegar al maximo de filas por pagina

    //ListPokemon es un array que contiene todos los pokemones que va a mostrar la tabla
    //page es el numero de pagina actual
    //rowsPerPage es que cantidad de filas por pagina

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
          <TablePagination
            rowsPerPageOptions={[20, 40, 60]}
            component="div"
            count={listPokemon.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          <Table stickyHeader aria-label="simple table" xs={{ borderColor: 'gris' }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ h1: { color: 'black' } }} align="center"><b>Name</b></TableCell>
                <TableCell align="center"><b>Especification</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {listPokemon
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (

                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align="center" component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">
                      <Link underline="none" color="secondary" href={`/SeeDetails/${row.url.split("/")[6]}`}>See details <ArrowOutwardIcon sx={{ fontSize: 'small' }} /></Link>
                    </TableCell>
                  </TableRow>
                ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
export default TablePokemon;
