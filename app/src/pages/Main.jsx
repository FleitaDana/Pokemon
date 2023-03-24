import { Box, Button, Container, createTheme, ThemeProvider } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const Main = () => {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#6645vf',
            },
            secondary: {
                main: '#FFFFFF',
            },
        },
    });


    return (
        <div className='fondo-main'>

            <Container maxWidth="md" sx={{ mt: 40 }}>
                <Box
                    alignItems="center"
                    display="flex"
                    sx={{ width: '100%', height: '500' }}>
                    <ThemeProvider theme={theme}>
                        <Link underline="none" to='/home' >
                            <Button size="large" color="secondary" variant="contained" sx={{borderRadius: '20px', border:2, fontStyle: 'oblique'}}><b>Meet Pokemon</b></Button>
                        </Link>

                    </ThemeProvider>
                </Box>
            </Container>

        </div>
    );
}
export default Main;