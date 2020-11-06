import scss from "./scss/main.scss";
import apiService from "./js/apiService.js";
import hbs_imageCards from "./templates/imageCards.hbs";


const dom = {
  app: document.querySelector('#app'),
  dataIn: document.querySelector('#dataIn'),
  dataOut: document.querySelector('#dataOut')
}
const requestConfig = {
  page: 1,
  value: '',
  lastChild: '',
  falseStart: false
}

//  ------- автозапит при скроллінгу -------
const subRuquest = function(entries, observer) {  
  if(requestConfig.falseStart) {
    observer.disconnect();
    apiService(requestConfig.value, requestConfig.page)
      .then(data => data.json())
      .then(({hits}) => dom.dataOut.insertAdjacentHTML('beforeend', hbs_imageCards(hits)))
      .then(()=> {
        requestConfig.lastChild = dom.dataOut.lastElementChild;
        observer.observe(requestConfig.lastChild);
      })
      requestConfig.falseStart = false;
  } else {
    requestConfig.falseStart = true;
  }
  requestConfig.page++;
}

const observer = new IntersectionObserver(subRuquest, {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
});
//  -------END автозапит при скроллінгу -------

const mainRequest = function(e) {
  e.preventDefault();
  requestConfig.page = 1;
  requestConfig.value = e.target['main-input'].value;
  apiService(requestConfig.value, requestConfig.page)
    .then(data => data.json())
    .then(({hits}) => dom.dataOut.innerHTML = hbs_imageCards(hits))
    .then(() => {
      requestConfig.lastChild = dom.dataOut.lastElementChild;
      observer.observe(requestConfig.lastChild);
    })
    // .then(() => {
    //   window.scrollTo({
    //     top: (window.innerHeight)*2,
    //     left: 0,
    //     behavior: 'smooth'
    //   });
    requestConfig.page++;
}
 
dom.dataIn.addEventListener('submit', mainRequest);

