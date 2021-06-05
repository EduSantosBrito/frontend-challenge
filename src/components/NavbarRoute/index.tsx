import { FC } from 'react';
import Navbar from '../Navbar';

const NavbarRoute: FC = ({ children }) => {
    return (
        <>
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
        </>
    );
};

export default NavbarRoute;
