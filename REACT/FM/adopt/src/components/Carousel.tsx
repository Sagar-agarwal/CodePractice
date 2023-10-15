import { Component } from 'react';

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ['http://pets-images.dev-apis.com/pets/none.jpg'],
  };

  thumbnailClickHandler = (e) => {
    this.setState({ active: +e.target.dataset.index });
  };

  render() {
    // Sample Error to check Error Boundary component
    // throw new Error('Error LOL');

    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="Animal hero" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            <img
              onClick={this.thumbnailClickHandler}
              data-index={index}
              key={photo}
              src={photo}
              className={index === active ? 'active' : ''}
              alt="Animal thumbnails"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
