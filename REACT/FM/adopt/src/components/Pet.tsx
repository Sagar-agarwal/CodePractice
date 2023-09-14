import { Link } from 'react-router-dom';

const Pet = ({ name, breed, animal, location, images, id, description }) => {
  let hero1 = 'http://pets-images.dev-apis.com/pets/none.jpg';
  let hero2 = 'http://pets-images.dev-apis.com/pets/none.jpg';
  if (images.length) {
    hero1 = images[0];
    hero2 = images[images.length - 1];
  }
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container ic-1">
        <img src={hero1} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed}`}</h2>
        <h2>{`${location}`}</h2>
        <h3>{`${description}`}</h3>
      </div>
      <div className="image-container ic-2">
        <img src={hero2} alt={name} />
      </div>
    </Link>
  );
};

export default Pet;
