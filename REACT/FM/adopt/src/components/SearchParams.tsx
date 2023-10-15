import { useState, useEffect, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import useBreedList from '../hooks/useBreedList';
import fetchSearch from '../hooks/fetchSearch';
import Results from './Results';
import Loader from './Loader';
import AdoptedPetContext from '../contexts/AdoptedPetContext';

const SearchParams = () => {
  type pets = [];

  // const [pets, setPets] = useState([]);

  const searchParams = () => {};
  const [reqParams, setReqParams] = useState({
    animal: '',
    location: '',
    breed: '',
  });

  const ANIMALS: string[] = ['dog', 'bird', 'reptile', 'rabbit'];
  const [animal, setAnimal] = useState('');
  const [breeds, status] = useBreedList(animal);
  const [adoptedPet, _] = useContext(AdoptedPetContext);

  const results = useQuery(['search', reqParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            location: formData.get('location') ?? '',
            animal: formData.get('animal') ?? '',
            breed: formData.get('breed') ?? '',
          };
          setReqParams(obj);
        }}
      >
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt="adoptedPet.name" />
          </div>
        ) : null}
        <label htmlFor="location">
          Location
          <input
            type="text"
            name="location"
            placeholder="Location"
            id="location"
            className="search"
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
          <select disabled={breeds.length === 0} name="breed" id="breed">
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
      {results.isLoading ? <Loader></Loader> : <Results pets={pets}></Results>}
      {/* <Results pets={pets}></Results> */}
    </div>
  );
};

export default SearchParams;
