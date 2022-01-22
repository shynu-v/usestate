import React from 'react';
import styled from 'styled-components';

const Lamp = styled.div`
    position: relative;
	margin: 10%;
	background: ${(props) => (props.lighton ? "orange" : "grey")};
	width: 100px;
	height: 100px;
	border-radius: 50%;
`;

const Light = ({lighton}) => {
    return (
        <Lamp lighton={lighton}></Lamp>
    );
};

export default Light;