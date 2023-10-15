import { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import fetchPet from '../hooks/fetchPet';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import Modal from './Modal';
import AdoptedPetContext from '../contexts/AdoptedPetContext';

const Details = () => {
  const { id }: { id: string } = useParams();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);
  const results = useQuery(['details', id], fetchPet);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <div className="loader">🌀</div>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    <div className="details">
      <Carousel images={pet.images}></Carousel>
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
        </h2>
        <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
        {showModal ? (
          <Modal>
            <h2>Do you want to adopt {pet.name}?</h2>
            <div className="buttons">
              <button
                onClick={() => {
                  setAdoptedPet(pet);
                  navigate('/');
                }}
              >
                Yes
              </button>
              <button onClick={() => setShowModal(false)}>No</button>
            </div>
          </Modal>
        ) : null}
        <p>{pet.description}</p>
      </div>
    </div>
  );
};

function DetailsErrorBoundary() {
  return (
    <ErrorBoundary>
      <Details></Details>
    </ErrorBoundary>
  );
}

export default DetailsErrorBoundary;
