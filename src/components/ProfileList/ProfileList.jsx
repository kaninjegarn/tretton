import React, { useState } from 'react';
import { ProfileCard } from '../index';
import './ProfileList.scss';
// import { pagination } from '../../assets/helpers';

import Sort from '../../assets/helpers/Sort';

const ProfileList = ({profiles}) => {
  const [sort, setSort] = useState('desc');
  const [currentPage, setCurrentPage] = useState(0);

  if(profiles) {
    var employees = new Sort(...profiles);
    var sortedEmployees = employees.orderBy('id', sort);
    var pages = sortedEmployees.getPages(50);
  }

  if(profiles) {
    const test = profiles.sort(function (a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if(sort === "asc") {
        if (nameB < nameA) {
          return 1;
        }
        if (nameB > nameA) {
          return -1;
        }
      }
      if (sort === "desc") {
        if (nameB < nameA) {
          return -1;
        }
        if (nameB > nameA) {
          return 1;
        }
      }

      // names must be equal
      return 0;
    });
    console.log(test)
  }
  // This is used to give every profileCard a unique key
  let key = 0
  return (
    <>
      <button
        onClick={() => {
          setSort('asc');
          setCurrentPage(0);
        }}
      >
        ASC
          </button>
      <button onClick={() => {
        setSort('desc');
        setCurrentPage(0);
      }}
      >DESC</button>

      <div className="pagination">
        {currentPage != 0 && 
          <button onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>}
        <h3>Page {currentPage + 1}</h3>
        { pages && pages.length > currentPage + 1 &&
          <button onClick={() => setCurrentPage(currentPage + 1)}>Next page</button>}
      </div>
      <div className="profileList">
        {
          pages && pages
            .find((page, index) => index === currentPage)
            .map(profile => 
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
            />)
        }
        {/* {
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
        } */}
      </div>
    </>
  )
}

export default ProfileList;