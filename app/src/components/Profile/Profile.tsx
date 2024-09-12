import React from 'react';
import styles from './Profile.module.css';
import profile from './Profile.png';
import { MdKeyboardArrowDown } from 'react-icons/md';

interface ProfileProps {
    name: string;
    role: string;
}

const Profile: React.FC<ProfileProps> = ({ name, role }) => {
    return (
        <div className={styles.profileContainer}>
            <img src={profile} width={45} />
            <div className={styles.profileText}>
                <h5>{name}</h5>
                <p>{role}</p>
            </div>
            <MdKeyboardArrowDown />
        </div>
    );
};

export default Profile;
