 import {useState} from 'react';

export default function useUserProfile() {
const [userData, setUserData] = useState(null);
const [userAccount, setUserAccount] = useState('');

const onSubmit = (e) => {
    e.preventDefault();
    fetchUserProfile(userAccount);
}

const onInputChange = (e) => {
    setUserAccount(e.target.value)
}
    const fetchUserProfile = async (userAccount) => {
        const res = await fetch(`https://api.github.com/users/${userAccount}`);
        const data = await res.json();
        setUserData(data);
    }  
    
  return {
    userData,
    fetchUserProfile,
    userAccount,
    onSubmit,
    onInputChange,
  }
}
