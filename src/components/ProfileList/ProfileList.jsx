import React from 'react';
import ProfileCard from '../ProfileCard/ProfileCard';
import './ProfileList.scss';

const ProfileList = ({profiles}) => {
  // This is used to give every profileCard a unique key
  let key = 0

  // remove
  console.log(profiles)
  return (
    <div className="profileList">
      {
        profiles && profiles.length > 0 ? profiles.map(profile => {
          return (
            <ProfileCard
              key={key++}
              name={profile.name}
              email={profile.email}
              location={profile.office}
              github={profile.gitHub}
              twitter={profile.twitter}
              linkedin={profile.linkedIn}
              phone={profile.phoneNumber}
              image={profile.imagePortraitUrl}
            />
          )
        }) : 
        <div>Searching...</div>
      }
    </div>
  )
}

export default ProfileList;