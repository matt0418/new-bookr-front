import React from 'react'

const AddBookForm = props => {
    console.log(props, 'addbook')
    
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
    }

    return (
        <div>
            <form onSubmit={handleSumbit}>
                <input 
                type="text"
                name="title"
                placeholder="enter book title"
                value={props.newBookInfo.title}
                onChange={props.handleChanges}
                />
                <input 
                type="text"
                name="author"
                placeholder="enter author"
                value={props.newBookInfo.author}
                onChange={props.handleChanges}
                />
                <input 
                type="text"
                name="publisher"
                placeholder="enter publisher"
                value={props.newBookInfo.publisher}
                onChange={props.handleChanges}
                />
                <input 
                type="text"
                name="image"
                placeholder="enter image url"
                value={props.newBookInfo.image}
                onChange={props.handleChanges}
                />
                <input 
                type="text"
                name="description"
                placeholder="enter book description"
                value={props.newBookInfo.description}
                onChange={props.handleChanges}
                />
                <input 
                type="number"
                name="price"
                placeholder="enter book price"
                value={props.newBookInfo.price}
                onChange={props.handleChanges}
                />
                <button type="submit">Add Book</button>
            </form>
        </div>
    )
}

export default AddBookForm