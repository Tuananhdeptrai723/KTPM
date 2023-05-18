import React, { useContext } from 'react';
import Slide_bar from '../../components/Slider_bar';
import ViewProfile from '../../components/ViewProfile/ViewProfile';
import { AuthContext } from '../../context/auth';
import { useNavigate } from 'react-router-dom';
import "./Logout.css";


function Profile_page() {
    const auth = useContext(AuthContext);
    const nav = useNavigate()
    return (
        <div className="Profile_page">
            <Slide_bar>
                <ViewProfile></ViewProfile>
                <button className='Logout_button' onClick={() => {
                    auth.logout();
                    nav('/');
                }}>
                    logout
                </button>
            </Slide_bar>

        </div>
    );

}

export default Profile_page;
