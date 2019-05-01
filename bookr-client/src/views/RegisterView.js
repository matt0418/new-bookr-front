import React, { useReducer, useState } from 'react'
import { connect } from 'react-redux'
import { registerUser } from '../store/actions/credentialsActions'
import RegistrationForm from '../components/RegistrationForm'
import { Link } from 'react-router-dom'

const RegisterView = props => {
    console.log(props)
    const [state, setState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            name: '',
            email: '',
            username: '',
            password: '',
            role: 'user'
        }
      );
    
    const [displayModal, setModal] = useState(false)

    const handleChanges = e => {
        setState({
            [e.target.name]: e.target.value
        })
    }

    const handleRegister = e => {
        e.preventDefault()
        props.registerUser(state)
        setModal(true)
    }

    const closeModal = e => {
        setModal(false)
    }



    return (
       <div>
           <RegistrationForm 
           {...props} 
           handleChanges={handleChanges} 
           handleRegister={handleRegister}
           registerInfo={state}
           />
            <Modal show={displayModal} close={closeModal}>
                <Link to="/">Go to Login Page?</Link>
                <h4 onClick={closeModal}>Close</h4>
            </Modal>
            <ModalOverlay show={displayModal}></ModalOverlay>
       </div>
    )
}

const mapStateToProps = state => ({
    isRegistering: state.credentialsReducer.isRegistering,
    isRegistered: state.credentialsReducer.isRegistered
})

export default connect(
    mapStateToProps,
    { registerUser }
)(RegisterView)

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