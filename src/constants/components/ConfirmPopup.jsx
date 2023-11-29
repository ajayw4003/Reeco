import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const PopupDiv = styled.div`
justify-content: center;
align-items: center;
position: fixed;
height: 25%;
width: 35%;
padding: 15px;
background-color: #ffffff;
transition: .2s ease-in-out;
border: 1px solid #3b3838;
border-radius: 5px;
margin: auto;
top: 35%;
left: 30%;
z-index: 2;
;
`


const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: end;
  align-items: center;
`

const ModalContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
`

const ConfirmPopup = (props) => {
  const { message, yesHandler, noHanlder, title="Alert" } = props;
  function confirm() {
    yesHandler()
  }
  return (
    <ModalContainer>
      <PopupDiv>
        <h3>{title}</h3>
        <div>
        {message}
        </div>
        <ButtonDiv>
          <Button onClick={confirm}>Yes</Button>
          <Button onClick={noHanlder}>No</Button>
        </ButtonDiv>
      </PopupDiv>
    </ModalContainer>
  );
};

export default ConfirmPopup;