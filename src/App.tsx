import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

export function App() {

  const [gender, genderId] = useState<number>(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar selectGender={(id) => genderId(id)} />
      <Content selectedGenreId={gender} />
    </div>
  )
}