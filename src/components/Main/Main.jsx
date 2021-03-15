import React from 'react';
import { ProfileList, Input } from '../index';
import './Main.scss';
const expectArr = [
  { name: "Adam" }, { name: "Dragan" }, { name: "Ingvar" }, { name: "Olof" }, { name: "Zehna" }
]
console.log(expectArr)

const Main = () => {
  return (
    <div className="main">
      <Input />
      <ProfileList />
    </div>
  )
}

export default Main;