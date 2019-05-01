import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



const StyledBook = styled.div`
    color: black;
    border: 1px solid black;
    margin: 10%;
    width: 500px;
    padding: 40px;
    text-align: center;
    background: white;
    box-shadow: 3px 6px;
`

const Image = styled.img`
    width: 80%;
    margin-top: 5%;
    margin-bottom: 5%;
`




const BookItem = props => {
    return(
        <Link to={`home/bookview/${props.book.id}`}>
            <StyledBook key={props.book.id}>
                <h3>{props.book.title}</h3>
                <Image src ={props.book.image} alt="book"/>
                <p>By {props.book.author}</p>
            </StyledBook>
        </Link>  
    )
}

export default BookItem