import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import useBreedList from '../hooks/useBreedList';
import fetchPets from '../hooks/fetchPets';
import Results from './Results';
import Loader from './Loader';

const SearchParams = () => {
  let ANIMALS: string[] = ['dog', 'bird', 'reptile', 'rabbit'];
  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');
  const [breeds, status] = useBreedList(animal);
  const [pets, setPets] = useState([]);
  const fetchPetsResult = useQuery(['pets', { animal, breed, location }], fetchPets);

  useEffect(() => {
    if (fetchPetsResult.status == 'success') {
      setPets(fetchPetsResult.data.pets);
    }
  }, [fetchPetsResult]);

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            type="text"
            name="location"
            placeholder="Location"
            id="location"
            value={location}
            className="search"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            id="animal"
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
            value={animal}
          >
            <option>-- None --</option>
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            disabled={breeds.length === 0}
            name="breed"
            id="breed"
            onChange={(e) => setBreed(e.target.value)}
            value={breed}
          >
            <option>-- None --</option>
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>
      {fetchPetsResult.isLoading ? <Loader></Loader> : <Results pets={pets}></Results>}
      {/* <Results pets={pets}></Results> */}
    </div>
  );
};

export default SearchParams;
