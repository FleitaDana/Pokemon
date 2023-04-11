import { Box, Button, Container, createTheme, ThemeProvider, Link} from '@mui/material';
import React from 'react'

const Main = () => {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#FFFFFF',
            },  
        },
    });

    return (
        <div className='background-main'>
            <Container maxWidth="md" sx={{ mt: 40 }}>
                <Box
                    alignItems="center"
                    display="flex"
                    sx={{ width: '100%', height: '500' }}>
                    <ThemeProvider theme={theme}> 
                        <Link underline='none' href='/home' >
                            <Button size="large" color="primary" variant="contained" sx={{borderRadius: '20px', border:2, fontStyle: 'oblique'}}><b>Meet Pokemon</b></Button>
                        </Link>
                     </ThemeProvider> 
                </Box>
            </Container>
        </div>
    );
}
export default Main;