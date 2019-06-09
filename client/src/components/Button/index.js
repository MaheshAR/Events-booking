import React from 'react';
import { ButtonWrap } from './styles';

function Button({ onClick, disabled = false, children }) {
  return (
    <ButtonWrap onClick={onClick} disabled={disabled}>
      {children}
    </ButtonWrap>
  );
}

export default Button;