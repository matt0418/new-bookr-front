import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



const StyledBook = styled.div`
    color: black;
    border: 1px solid black;
    margin-top: 5%;
    // margin-left: 5%;
    // padding-right: 5%;
    margin-bottom: 5%;
    width: 350px;
    // padding: 20px;
    text-align: center;
    background: white;
    box-shadow: 3px 6px;
`

const Image = styled.img`
    width: 200px;
    margin-top: 5%;
    margin-bottom: 5%;
    border: 1px solid black;
`

const Tite = styled.h3`
    width: 40%
    margin-left: 30%;
`




const BookItem = props => {
    return(
        <Link to={`book/${props.book.id}`}>
            <StyledBook key={props.book.id}>
                <Tite>{props.book.title}</Tite>
                <Image src ={props.book.image} alt="book"/>
                <p>By {props.book.author}</p>
            </StyledBook>
        </Link>  
    )
}

export default BookItem