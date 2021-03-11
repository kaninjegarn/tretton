import React from 'react';
import './ProfileCard.scss';

const ProfileCard = ({name, email, location, github, twitter, linkedin, phone, image}) => {
  return (
    <div className="profile">
      <div className="profile__image">
        <img className="profile__image--portrait" src={image} alt=""/>
      </div>
      <div className="profile__content">
        <div className="profile__content--upperRow">
          <p>{name}</p>
          <div className="socialLinks">
            {github && 
              <a aria-label={github} href={`https://github.com/${github}`} className="socialLinks__github"><i></i></a>
            }
            {twitter &&
              <a aria-label={twitter} href={`https://twitter.com/${twitter}`} className="socialLinks__twitter"><i></i></a>
            }
            {linkedin &&
              <a aria-label={linkedin} href={`https://www.linkedin.com/${linkedin}`} className="socialLinks__linkedin"><i></i></a>
            }
          </div>
        </div>
        <div className="profile__content--lowerRow">
          <p>Office: {location}</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard;