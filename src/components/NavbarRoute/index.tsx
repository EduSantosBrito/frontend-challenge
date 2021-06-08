import { FC } from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';

const Container = styled.div`
    padding-bottom: 3.75rem;
`;

const NavbarRoute: FC = ({ children }) => {
    return (
        <Container>
            {children}
            <Navbar
                items={[
                    { iconName: 'home', label: 'Home', to: '/' },
                    { iconName: 'book', label: 'Libraries', to: '/detail' },
                    {
                        iconName: 'profile',
                        label: 'Profile',
                        to: '/search',
                    },
                ]}
            />
        </Container>
    );
};

export default NavbarRoute;
