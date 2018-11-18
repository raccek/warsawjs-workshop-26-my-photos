let imagesList = ['./images/team.jpg', './images/team2.jpg', './images/team3.jpg'];
let images = ['./images/team.jpg', './images/team2.jpg', './images/team3.jpg'];
let active = 0;
let time = 5000;
let imgHtml = document.querySelector('.image-slide');

function displayImages() {
	let i = 0, 
		length = imagesList.length;
	for(; i < length; i++){
		let img = new Image();
		img.src = imagesList[i];
		img.style.width = '180px';
		img.style.height = '120px';
		console.log(img.src);
		document.getElementById('images-list').appendChild(img);
	}
}

function slideSlide() {
	imgHtml.src = imagesList[active];
	active++;
	if (active == imagesList.length) {
		active = 0;
	}
	setTimeout(slideSlide, time);
}



function changeSlide() {
	if (this.className === 'right') {
		active++;
	} else if (this.className === 'left') {
	// } else {
		active--;
	}
	if (active < 0) active = imagesList.length -1;
	else if(active == imagesList.length) active = 0;
	imgHtml.src = imagesList[active];
}

let arrows = document.querySelectorAll('img + img');
for (let i = 0; i < arrows.length; i++) {
	// console.log('clicked');
	arrows[i].addEventListener('click', changeSlide);
}


displayImages();
slideSlide();
changeSlide();

