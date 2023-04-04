import { CircularProgress, Typography } from '@mui/material';
import React from 'react'

const Loading = () => {



return(
<Typography variant="h6" color="text.primary" align='center'>
Loading datos <CircularProgress />
</Typography> 

);

} 
export default Loading;