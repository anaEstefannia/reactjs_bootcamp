import React from 'react'

export default function UserCard({userName, userImg, userAccount, userLocation, userRole, userUrl}) {
  return (
    <div style={{display: 'flex', width: '50%' ,flexDirection: 'column', borderWidth: 1, borderColor: '#000', padding: 20, borderRadius: 10, borderStyle: 'solid'}}>
        <div style={{width: '100%'}}>
            <img src={userImg} style={{width: '100%'}} />
        </div>
        <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
            <h1>{userName}</h1>
            <h3>{userAccount}</h3>
            <h3>{userLocation}</h3>
            <h3>{userRole}</h3>
            <a href={userUrl} target="_blank" >
              Go to GitHub profile
            </a>
        </div>
    </div>
  )
}