import Pet from './Pet';

const Results = ({ pets }: { pets: [] }) => {
  type pet = {
    name: string;
    animal: string;
    breed: string;
    id: string;
    images?: string[];
    city?: string;
    state?: string;
    description?: string;
  };

  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets found</h1>
      ) : (
        pets.map((pet: pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            id={pet.id}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            description={pet.description}
            key={pet.id}
          ></Pet>
        ))
      )}
    </div>
  );
};

export default Results;
