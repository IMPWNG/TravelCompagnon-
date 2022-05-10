import type { NextPage } from 'next';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const coordinates = { lat: -34.397, lng: 150.644 };

const Home: NextPage = () => {
  return (
    
    <>

      <Header />
      <Map coords={coordinates} />
      <List />

    </>
  )
}

export default Home
