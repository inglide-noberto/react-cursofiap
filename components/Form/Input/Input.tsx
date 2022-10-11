import styled from '@emotion/styled';
import React, {InputHTMLAttributes} from 'react'

const InputData = styled.input`
border: none;
border-radius: 10px;
padding: 2px 10px;
height: 25px;
`;

export default function Input(props:InputHTMLAttributes<HTMLInputElement>) {
    return (
        <InputData {...props} />
    );
}
