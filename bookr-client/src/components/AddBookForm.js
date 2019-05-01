import React from 'react'
import styled from 'styled-components'
import NavBar from './NavBar'

const AddBookForm = props => {
    
    const handleSumbit = e => {
        e.preventDefault()
        props.addBook({
            title: props.newBookInfo.title,
            author: props.newBookInfo.author,
            publisher: props.newBookInfo.publisher,
            image: props.newBookInfo.image,
            description: props.newBookInfo.description,
            price: props.newBookInfo.price
        })
        props.history.push('/')

    }

    return (
        <div>
            <NavBar />
            <StyledHeader>Add a New Book</StyledHeader>
            <StyledForm onSubmit={handleSumbit}>
                <StyledInput 
                type="text"
                name="title"
                placeholder="enter book title"
                value={props.newBookInfo.title}
                onChange={props.handleChanges}
                />
                <StyledInput 
                type="text"
                name="author"
                placeholder="enter author"
                value={props.newBookInfo.author}
                onChange={props.handleChanges}
                />
                <StyledInput 
                type="text"
                name="publisher"
                placeholder="enter publisher"
                value={props.newBookInfo.publisher}
                onChange={props.handleChanges}
                />
                <StyledInput 
                type="text"
                name="image"
                placeholder="enter image url"
                value={props.newBookInfo.image}
                onChange={props.handleChanges}
                />
                <StyledInput 
                type="text"
                name="description"
                placeholder="enter book description"
                value={props.newBookInfo.description}
                onChange={props.handleChanges}
                />
                <StyledInput 
                type="number"
                name="price"
                placeholder="enter book price"
                value={props.newBookInfo.price}
                onChange={props.handleChanges}
                />
                <StyledButton type="submit">Add Book</StyledButton>
            </StyledForm>
        </div>
    )
}

export default AddBookForm

const StyledHeader = styled.div`
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    margin-top: 5%;
    margin-bottom: 5%;
    border-bottom: 1px solid black;
    padding-bottom: 3%;
    width: 80%;
    margin-left: 10%;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 15%;
`
const StyledInput = styled.input`
    width: 50%
    padding: .5%;
    font-size: 20px;
    margin-bottom: 1.5%;
`

const StyledButton = styled.button`
    width: 200px;
    padding-top: .5%;
    padding-bottom: .5%;
    border-radius: 10px;
    background: #907163;
    color: white;
    font-weight: bold;
`