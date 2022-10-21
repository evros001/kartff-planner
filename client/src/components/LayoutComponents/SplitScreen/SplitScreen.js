import styled from 'styled-comonents';

const Container = styled.div`

`;

const Pane = styled.div`
    flex: 1;
`;

export const SplitScreen = ({
    left: Left,
    right: Right,
}) => {
    return (
        <Container>
            <Pane>
                <Left />
           </Pane>
           <Pane>
                <Right />
           </Pane>
        </Container> 
    )
};