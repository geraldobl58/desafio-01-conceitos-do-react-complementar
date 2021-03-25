import { useEffect, useState } from 'react';

import { Button } from '../components/Button';

import { api } from '../services/api';

import '../styles/sidebar.scss';

interface IGenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  selectGender: (value: number) => void
}

export function SideBar({ selectGender }: SideBarProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<IGenreResponseProps[]>([]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
    selectGender(id)
  }

  useEffect(() => {
    api.get<IGenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
      handleClickButton(response.data[0].id)
    });
  }, []);

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={genre.id}
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}