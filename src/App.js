import React, { Component } from 'react';
import './App.css';
import Contact from './component/contact';

const profil = {
  name: 'S',
  avatar: 'https://upload.wikimedia.org/wikipedia/fr/thumb/7/7a/Logo_Daria.svg/1032px-Logo_Daria.svg.png',
  online: true
}
const profil1 = {
  name: 'ST',
  avatar: 'https://upload.wikimedia.org/wikipedia/fr/thumb/7/7a/Logo_Daria.svg/1032px-Logo_Daria.svg.png',
  // online=true
};
const profil2 = {
  name: 'SV',
  avatar: 'https://upload.wikimedia.org/wikipedia/fr/thumb/7/7a/Logo_Daria.svg/1032px-Logo_Daria.svg.png',
  online: true
}
class App extends Component {
  render() {
    return (
      <div>
        {Contact(profil)}
        {Contact(profil1)}
        {Contact(profil2)}
      </div>
    );
  }
}

export default App;
