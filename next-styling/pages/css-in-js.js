import React from 'react';
import styled from "styled-components";

const Title = styled.h1`
  color: ${({ theme }) =>  theme.colors.primary};
`;

const CssInJs = () => {
    return (
        <div>
            <h2 style={{ color: 'red' }}>hello world</h2>
            <Title>hello world</Title>
        </div>
    );
};

export default CssInJs;
