import { CardMedia, CircularProgress, Grid, Typography } from '@mui/material';
import React from 'react'

const NotFound = () => {

return(

<Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            p="20"
        >
            <Grid item
                justifyContent="center"
                alignItems="center"
                xs={12} md={12} lg={12}
                sx={{ margin: 2 }}>
            </Grid>

            <Typography variant="h1" color="text.primary" align='center'>
            Pokemon not found <CircularProgress />
            </Typography>

            <CardMedia
                component="img"
                height="140"
                image="src/assets/loading.png"
                alt="Loading"
            />
        </Grid>
);
} 
export default NotFound;

