import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const JobDetail = () => {

    const{id} = useParams();
    console.log(id);
    const JobData= useLoaderData()
    console.log(JobData);

  return (
    <>
    <Divider sx={{mx:20, my:5}} >
    <Box>
        <Typography variant='h4'>Post : {JobData.title}</Typography>
        <Typography variant='h5'>Salary : {JobData.salary}</Typography>
        <Typography variant='body1'>Location : {JobData.location}</Typography>
    </Box>
    </Divider>
    </>
  )
}

  export const JobDetailLoader = async({params}) =>{
    const {id} =params

    const response = await fetch('http://localhost:8000/careers/'+id)
    
    if(!response.ok){
        throw new Error('job not found')
    }
    const jsonResponse =  await response.json();
    return jsonResponse

}


export default JobDetail