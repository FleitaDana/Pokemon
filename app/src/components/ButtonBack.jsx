import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function ButtonBack() {
	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}
	return <>	
		<Button onClick={goBack}>Back</Button>	
		<p>About Page</p>
	</>;
} 
export default ButtonBack;