import React, { createContext } from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
    display: flex;
`;

const NavBar = styled.div`
    flex: ${props => props.weight};
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

// create user context
const UserContext = createContext();

const StandardLayout = ({
    children,
    topWeight = 1,
    bottomWeight = 1,
}) => {
    const [top, bottom] = children;

    return (
        <Container>
            <NavBar weight={topWeight}>
                {top}
            </NavBar>
            <ContentContainer weight={bottomWeight}>
                {bottom}
            </ContentContainer>
        </Container> 
    )
}

export default StandardLayout