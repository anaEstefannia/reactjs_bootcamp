import React from "react";
import { UserCard, UserForm } from "./components";
import { useUserProfile } from "../../hooks";

export default function UserProfile() {
  const { onInputChange, userData, userAccount, onSubmit } = useUserProfile();
  console.log(userData);
  
  return (
    <div style={{ display: "flex", flex: 1, flexDirection: "column",}}>
      <h1>Get Github Profile</h1>
      <div style={{display: 'flex', flexDirection: "row",}}>
        <div style={{display: 'flex', flex: 1, justifyContent: 'flex-end', marginRight: 20,}}>
          <UserForm onSubmit={onSubmit} value={userAccount} onInputChange={onInputChange}/>
        </div>
        <div style={{flex: 1,}}>
          {userData?.name &&
          <UserCard
            userName={userData?.name}
            userImg={userData?.avatar_url}
            userAccount={userData?.login}
            userLocation={userData?.location}
            userRole={userData?.bio}
            userUrl={userData?.html_url}
          />
        }
        {userData?.message &&
          <h3>{userData?.message}</h3>
        }
        {!userData &&
          <h1>Start Searching a profile</h1>
        }
        </div>
      </div>
    </div>
  );
}
