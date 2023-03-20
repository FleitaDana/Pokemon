import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const CardPokemon = ({ listPokemon}) => {
    return (

        <Grid item xs={12}>


                <Card  sx={{ maxWidth: 500, maxHeight: 500, transition: "0.2s", "&:hover": { transform: "scale(1.05)" } }}>
                    <CardActionArea>

                        <CardMedia
                            component="img"
                            height="140"
                            image=".../fondo2"
                            alt="Foto Pokemon"
                        />
                        <CardContent>

                            <Typography gutterBottom variant="h5" component="div">
                               {listPokemon.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sit neque delectus praesentium eveniet, debitis adipisci suscipit enim voluptas nesciunt, placeat odio id est nobis numquam, quas omnis sed eligendi!
                            </Typography>
                        </CardContent>

                    </CardActionArea>
                </Card>




       </Grid>
    )
}

export default CardPokemon;