import React,{ useEffect, useReducer } from 'react'
import axios from 'axios'

const IndividualBook = props => {
    console.log(props.book.title)
    
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

    console.log(state.displayModal)



    return(
        <div>
            <button onClick={() => setState({displayModal: true})}>Delete Me</button>
            <h2>{props.book.title}</h2>
            <img src={props.book.image} alt={props.book.title}/>
            <h5>Written by <strong>{props.book.author}</strong></h5>
            <h6>Published by {props.book.publisher}</h6>
            <p>{props.book.description}</p>
            <p>Price: ${props.book.price / 100}</p>
            <a href="https://www.barnesandnoble.com/">Buy Here!</a>
            {props.book.comments !== undefined ? props.book.comments.map(comment => {
                let listOfUsers = []
                for (let i = 0; i < state.users.length; i++ ) {
                    if (state.users[i].id === comment.user_id) {
                        listOfUsers.push(state.users[i])
                        return(
                            <div>
                                <strong><p>User: {listOfUsers[0].name}</p></strong>
                                <p>Rating: {comment.rating} stars / 5 stars</p>
                                <p>Review: {comment.comment}</p>
                            </div>
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