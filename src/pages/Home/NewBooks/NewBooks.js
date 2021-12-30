import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import GettingBookModal from '../../Shared/GettingBookModal/GettingBookModal';
import useAuth from '../../../hooks/useAuth';
AOS.init();


const NewBooks = ({ book }) => {
    const { user } = useAuth();
    const [openGettingBookModal, setOpenGettingBookModal] = React.useState(false);
    const handleGettingBookOpen = () => setOpenGettingBookModal(true);
    const handleGettingBookClose = () => setOpenGettingBookModal(false);

    const { name, image, category, author, translator, publisher } = book;
    return (
        <div data-aos="fade-up"
            data-aos-duration="3000">
            <Card>
                <CardMedia>
                    <img style={{ margin: 'auto', maxWidth: '300px', maxHeight: '300px', padding: '15px 0px' }} src={`data:image/png;base64,${image}`} alt="" />
                </CardMedia>

                <CardContent sx={{ textAlign: 'left', px: 1 }}>
                    <Typography sx={{ textAlign: 'center' }}>
                        {name}
                    </Typography>
                    <Typography>
                        By: <span className="text-red-600">{author}</span>

                    </Typography>
                    {translator && <Typography>
                        Translator: <span className="text-red-600">{translator}</span>
                    </Typography>}
                    <Typography>
                        Category: <span className="text-red-600">{category}</span>
                    </Typography>
                    <Typography>
                        Publisher: <span className="text-red-600">{publisher}</span>
                    </Typography>
                </CardContent>

                {user?.email ? <button type="button" className="my-3 focus:outline-none text-white text-md py-2.5 px-5 rounded-md hover:shadow-lg" style={{ backgroundColor: '#6797c7' }} onClick={handleGettingBookOpen}>Get Book</button> :
                    <Link to="/login"><button type="button" className="my-3 focus:outline-none text-white text-md py-2.5 px-5 rounded-md hover:shadow-lg" style={{ backgroundColor: '#6797c7' }}>Get Book</button></Link>}

            </Card>
            <GettingBookModal handleGettingBookClose={handleGettingBookClose} openGettingBookModal={openGettingBookModal} book={book}></GettingBookModal>
        </div>
    );
};

export default NewBooks;