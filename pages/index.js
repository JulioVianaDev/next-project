import React from 'react'
import MeetupList from '../components/meetups/MeetupList';
import Layout from '../components/layout/Layout';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: "uma imagem ai",
    image: "https://static.independent.co.uk/2023/03/07/15/newFile-3.jpg",
    address: 'algum endereço',
    description: "uma descrição ai"
  },
  {
    id: 'm2',
    title: "uma segunda imagem ai",
    image: "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-paris-capa2019-02.jpg",
    address: 'algum endereço',
    description: "uma descrição ai"
  },
]
function HomePage() {
  return (
      <MeetupList meetups={DUMMY_MEETUPS}/>
  )
}

export default HomePage