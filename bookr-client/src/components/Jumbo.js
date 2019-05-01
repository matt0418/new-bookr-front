import React from 'react'
import styled from 'styled-components'
import image from '../img/books.jpg'

const StyledImage = styled.img`
    width: 100%;
`


const StyledDiv = styled.div`
    z-index: 0;
`

const Jumbo = () => {
    return(
        <StyledDiv>
            <StyledImage src ={image} alt="books" />
        </StyledDiv>
        
    )
}

export default Jumbo