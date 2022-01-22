import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    position: relative;
	width: 40px;
	height: 25px;
	cursor: pointer;
    margin: 15%;
`;

const Lightswitch = ({callback, btn}) => {
    return (
        <Btn onClick={callback}>{btn ? "ON" : "OFF"}
        </Btn>
    );
};

export default Lightswitch;