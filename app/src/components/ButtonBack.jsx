import { Box, Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function ButtonBack() {
	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
		localStorage.clear();
	}
	return <>	
	
		<Button onClick={goBack}>Back</Button>	
		
	</>;
} 
export default ButtonBack;


