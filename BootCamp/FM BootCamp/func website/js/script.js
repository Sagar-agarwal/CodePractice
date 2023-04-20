let data = "";
let imgURLs = [];
let index = 0;

const next = document.querySelector(".next").addEventListener("click", (e) => {
	// debugger;
	if (index < 10) {
		index++;
		updateImageSrc();
	} else {
		return;
	}
	e.preventDefault();
});
const back = document.querySelector(".back").addEventListener("click", (e) => {
	if (index > 0) {
		index--;
		updateImageSrc();
	} else {
		return;
	}
	e.preventDefault();
});

const header = new Headers();
header.append("Access-Control-Allow-Origin", "http://127.0.0.1:5500");

const getCats = () => {
	return fetch("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME", {
		header: header,
	})
		.then((res) => res.json())
		.then((resData) => {
			init(resData);
			data = resData;
			return data;
		})
		.catch((err) => err);
};

const parseDataForImageURLS = (data) => {
	imgURLs = data.map((ele) => ele.url);
	updateImageSrc(imgURLs[index]);
	return;
};

const init = (data) => {
	parseDataForImageURLS(data);
};

const updateImageSrc = () => {
	const img = document.querySelector("#image");
	img.src = imgURLs[index];
};

(() => {
	// getCats();

	init(sampleInput);
})();
