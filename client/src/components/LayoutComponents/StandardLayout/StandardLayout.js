import React, { createContext } from 'react';
import styled from 'styled-components';
import Logout from '../../Logout/Logout';

const ContentContainer = styled.div`
    display: flex;
`;

const NavBar = styled.div`
    flex: ${props => props.weight};
`;

const Container = styled.div`
    display: flex;
`;

// create user context
const UserContext = createContext();

const StandardLayout = ({
    children,
    topWeight = 1,
    bottomWeight = 1,
}) => {
    // const [user, setUser] = useState(null);
    const [top, bottom] = children;

    if (localStorage.getItem("token")) {
        console.log("user at Standard Layout Compnent", localStorage.getItem("token"));
        const user = JSON.parse(localStorage.getItem("token"));
    }
    

    
    // useEffect(() => {
    //     const getCurrentUser = async () => {
    //       try {
    //         const result = await axios.get('http://localhost:5500/api/users');
    //         setAllUsers(results)
    //         console.log('all users', results);
    //       } catch (err) {
    //         console.log('all users error', err);
    //       }
    //     }
    //     getAllUsers();
    //   }, [])

    return (
        <>
            <Container>
                <NavBar weight={topWeight}>
                    {top}
                </NavBar>
                <ContentContainer weight={bottomWeight}>
                    {bottom}
                </ContentContainer>
            </Container> 
            <Logout />
        </>
    )
}

export default StandardLayout