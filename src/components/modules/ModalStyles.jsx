import styled from 'styled-components';


export const ModalWrapper = styled.div`
.modal-link {
  cursor: pointer;
}  
div.modal {
  z-index: 214748;
  background-color: rgba(0, 0, 0, 0.5) !important;
  display: none; 
  position: fixed; 
  justify-content: center;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%; 
  height: 100%;
  &.show {
    cursor: pointer;
  }
}

div.modal-dialog {
  max-width: 90%;
  justify-content: center;
  @media screen and (max-width: 576px){
    max-width: 100%;
  }
}

div.modal-content {
  background: none;
  border: none;
  width: auto;
  @media screen and (min-width: 576px){
    margin-top: 40px;
  }
}

img.modal-responsive {
  @media screen and (min-width: 576px){
    max-height: 75vh;
  }
}

.modal-close-button {
  button {
    border: none;
    padding: 0.5rem;
    border-radius: 4px;
  }
}

button.close {
  opacity: 1;
  margin-bottom: 0px;
  padding: 0;
  &:hover {
    background: transparent;
    transition: none;
  }
  &:focus {
    outline: none
  }
}
button.close:not(:disabled):not(.disabled):hover {
  opacity: 1;
}
`