import './index.html';
// new modules
import './index.scss';
import 'swiper/css';
import 'swiper/css/pagination';



// use modules

const videoBG = document.querySelector('.video-bg');

videoBG.innerHTML = `
        <source src="video/video.webm" type="video/webm">
        <source src="video/video.mp4" type="video/mp4">
        `;