const init = () => {
	fetch('https://dog.ceo/api/breeds/list/all')
		.then((res) => res.json())
		.then((data) => addBreedOptions(data.message)); //

	const imageBtn = document.querySelector('#get-dog-imgs').addEventListener('click', getImages);
};

const addBreedOptions = (breedObj) => {
	let breedList = [];
	for (let key in breedObj) {
		breedList.push(key);
	}

	const breedSelection = document.querySelector('#breed-list');

	breedList.forEach((breed) => {
		let breedOption = createBreedOption(breed);
		breedSelection.appendChild(breedOption);
	});
};

const createBreedOption = (breed, selected = false) => {
	let ele = document.createElement('option');
	ele.textContent = breed;
	ele.value = breed;
	return ele;
};

// Breed is selected

const getImages = (e) => {
	const breedSelection = document.querySelector('#breed-list');
	let selectedBreed = breedSelection.value;
	if (selectedBreed !== '') {
		emptyGallery();

		fetch(`https://dog.ceo/api/breed/${selectedBreed}/images`)
			.then((res) => res.json())
			.then((data) => {
				let imgs = data.message;
				addImgsToGallery(imgs);
			});
	}
	e.preventDefault();
};

const emptyGallery = () => {
	const gallery = document.querySelector('.section__gallery');
	gallery.innerHTML = '';
};

const addImgsToGallery = (dogImgLinks) => {
	const gallerySection = document.querySelector('.section__gallery');
	dogImgLinks.forEach((imgLink) => {
		let imgEle = getDogImageElement(imgLink);
		gallerySection.appendChild(imgEle);
	});
};

const getDogImageElement = (imgLink) => {
	let divEle = document.createElement('div');
	divEle.className = 'gallery__img-box';
	let imgEle = document.createElement('img');
	imgEle.className = 'gallery__img-link';
	imgEle.setAttribute('src', imgLink);
	divEle.appendChild(imgEle);

	return divEle;
};

init();
