import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const Detail = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/search'>Search</Link>
            <Navbar
                variant='floated'
                items={[
                    {
                        iconName: 'read',
                        label: 'Read',
                        onClick: () => {
                            console.log('read');
                        },
                    },
                    {
                        iconName: 'listen',
                        label: 'Listen',
                        onClick: () => {
                            console.log('listen');
                        },
                    },
                    {
                        iconName: 'share',
                        label: 'Share',
                        onClick: () => {
                            console.log('share');
                        },
                    },
                ]}
            />
        </div>
    );
};

export default Detail;
