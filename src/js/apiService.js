export default function(value, page) {

const KEY = '18979440-a7a6e8d5b4453f8671b44f46a';
const URI = 'https://pixabay.com/api/';

 return fetch(`${URI}?key=${KEY}&q=${value}&page=${page}&per_page=12&image_type=photo&orientation=horizontal`)
  
}