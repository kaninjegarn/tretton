import React, { useEffect, useState } from 'react';
import './ProfileCard.scss';

const ProfileCard = ({ name, email, location, github, twitter, linkedin, phone, image, text}) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // whenever you clear the input -> show all profiles again(reset)
    if (text || text === "") {
      setShow(true);
    }
    // if name doesnt match text -> dont show it
    if (text && !name.toLowerCase().includes(text.toLowerCase())) {
      setShow(false);
    }
  }, [text])

  return (
    <div className={`profile ${show ? '' : 'hide'}`}>
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