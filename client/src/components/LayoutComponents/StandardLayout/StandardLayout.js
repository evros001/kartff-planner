import React, { useState, useEffect, createContext } from 'react';
import styled from 'styled-components';
import Logout from '../../Logout/Logout';

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
    // const [user, setUser] = useState(null);
    const [top, bottom] = children;
    const UserContext = createContext()

    const user = JSON.parse(localStorage.getItem("token"))
    console.log("user at Standard Layout Compnent", user);

    
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
        <UserContext.Provider value={user}>
            <Container>
                <NavBar weight={topWeight}>
                    {top}
                </NavBar>
                <ContentContainer weight={bottomWeight}>
                    {bottom}
                </ContentContainer>
            </Container> 
            <Logout />
        </UserContext.Provider>
    )
}

export default StandardLayout