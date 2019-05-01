import React,{ useEffect, useReducer } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const IndividualBook = props => {
    
    const [state, setState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
            {
                users: [],
                displayModal: false 
            }
         );

    const closeModal = e => {
        e.preventDefault()
        setState({
            displayModal: false
        })
    }

    useEffect(() => {
        const token = localStorage.getItem('jwt')
        const requestOptions = {
            headers: {
                authorization: token
            }
        };
        axios
            .get(`https://bookr-matt.herokuapp.com/api/users`, requestOptions)
            .then(res => {
                setState({
                    users: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    

    const handleDeleteBook = () => {
        const id = props.match.params.id
        props.deleteBook(id)
        props.history.push('/')
    }


    return(
        <div>
            <StyledHeader>{props.book.title}</StyledHeader>
            <Image src={props.book.image} alt={props.book.title}/>
            <h5>Written by <strong>{props.book.author}</strong></h5>
            <h6>Published by {props.book.publisher}</h6>
            <Para>{props.book.description}</Para>
            <p>Price: ${props.book.price / 100}</p>
            <Contain>
                <StyledLink href="https://www.barnesandnoble.com/">Buy Here!</StyledLink>
                <DeleteButton onClick={() => setState({displayModal: true})}>Delete Me</DeleteButton>
            </Contain>
            <ReviewHeader>Reviews</ReviewHeader>
            {props.book.comments !== undefined ? props.book.comments.map(comment => {
                let listOfUsers = []
                for (let i = 0; i < state.users.length; i++ ) {
                    if (state.users[i].id === comment.user_id) {
                        listOfUsers.push(state.users[i])
                        return(
                            <SingleReview>
                                <strong><p>User: {listOfUsers[0].name}</p></strong>
                                <p>Rating: {comment.rating} stars / 5 stars</p>
                                <p>Review: {comment.comment}</p>
                            </SingleReview>
                        )
                    }
                }
                
            }): <div></div>}
            <Modal show={state.displayModal} close={closeModal}>
                <h2>Are you sure you want to delete this book?</h2>
                <div>
                    <h4 onClick={handleDeleteBook}>Yes!</h4>
                    <h4 onClick={closeModal}>Cancel</h4>
                </div>
            </Modal>
            <ModalOverlay show={state.displayModal}></ModalOverlay>
        </div>
    )
}

const Modal = ({ close, show, children }) => {
    const showHideClassName = show
      ? "Modal display-block"
      : "Modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal">
          {children}
          <div className="closeModalButton" onClick={close}>
            X
          </div>
        </section>
      </div>
    );
};
  
const ModalOverlay = ({ close, show }) => {
    const showHideClassName = show ? "modalOverlay" : null;
    return <div className={showHideClassName} />;
};

export default IndividualBook



const Image = styled.img`
    width: 30%
    margin-top: 1%;
    margin-bottom: 1%;
`
const Para = styled.p`
    width: 35%;
    margin-left: 32.5%;
    @media(max-width: 500px) {
        width: 90%;
        text-align: right;
    }
`

const StyledHeader = styled.h1`
    font-size: 90px;
    margin-top: 2%;
    @media(max-width: 500px) {
        font-size: 55px;
    }
`

const DeleteButton = styled.button`
    border-radius: 10px;
    margin-bottom: -2%;
    margin-top: 1%;
    padding: 5px 5%;
    font-size: 1.2rem;
    
`


const ReviewHeader = styled.h2`
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    text-align: center;
    margin-top: 5%;
    background-color: lightgrey;
`

const SingleReview = styled.div`
    border: 1px solid black;
    margin-bottom: 3%;
    width: 40%;
    text-align: center;
    margin-left: 30%;
    margin-top:3%;
    @media(max-width: 500px) {
        width: 85%;
        margin-left: 7.5%;
    }
`

const StyledLink = styled.a`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: -3%;
`

const Contain = styled.div`
    display: flex;
    justify-content: space-between;
    width: 40%;
    margin-left: 30%;
    align-items: baseline;
`