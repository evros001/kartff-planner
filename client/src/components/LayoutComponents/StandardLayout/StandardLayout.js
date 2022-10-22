import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
    displayL flex;
`;

const NavBar = styled.div`
    flex: ${props => props.weight};
`;

const Container = styled.div`
    displayL flex;
`;

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