import React from 'react';
import { ProfileList } from '../index';

export default ({profiles}) => {
  console.log(profiles)
  return (
    <div>
      <ProfileList />
    </div>
  )
}