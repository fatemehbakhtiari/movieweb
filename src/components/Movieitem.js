import React from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';

const Movieitem = (movie) => {
    return (
        <Grid item xs={12}>
           <Paper style={{ display:'flex', alignItems:'center' }}>
                <img style={{marginRight:'20px'}} src={movie.thumbnails.medium.url} />
                <Typography variant="subtitle1"><b>{movie.title}</b></Typography>
           </Paper>
        </Grid>
    )
}

export default Movieitem;
