import styled from 'styled-comonents';

const Container = styled.div`
    displayL flex;
`;

const Pane = styled.div`
    flex: ${props => props.weight};
`;

export const SplitScreen = ({
    children,
    leftWeight = 1,
    rightWeight = 1,
}) => {
    const [left, right] = children;

    return (
        <Container>
            <Pane weight={leftWeight}>
                {left}
           </Pane>
           <Pane weight={rightWeight}>
                {right}
           </Pane>
        </Container> 
    )
};