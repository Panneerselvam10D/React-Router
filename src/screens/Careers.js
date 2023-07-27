import { Typography, styled } from '@mui/material'
import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import CareersList from '../components/CareersList'

const StyledLink = styled(Link)({
    textDecoration :'none'
})

const Careers = () => {
    const careerData =useLoaderData()
    console.log(careerData)
  return (
    <>
    <Typography variant='h3'>Careers</Typography>
    {
        careerData && careerData.map((career)=>{
            return <StyledLink to={career.id.toString()} key={career.id}>
                
            <CareersList Title={career.title} Location={career.location} /> 
            </StyledLink>

        }
        )
    }
    </>
  )
}
export const careerLoader = async() =>{
    const response = await fetch('http://localhost:8000/careers')
        if(!response.ok){
            throw new Error('job not found...')
        }
    const jsonResponse = await response.json()

    return jsonResponse

}

export default Careers