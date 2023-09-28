// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12



import axios from 'axios';

let API_KEY = '38783667-102dd7a1eb53387882edbc878';
let BASE_URL = 'https://pixabay.com/api/';
let IMAGE_TYPE = 'photo';
let ORIENT = 'horizontal';
let SAFE_SEARCH = 'true';
let PER_PAGE = 12;


export const pixabayApi = ({ searchQuery = '', currentPage = 1}) => {
  return axios
    .get(
      `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=${IMAGE_TYPE}&orientation=${ORIENT}&safesearch=${SAFE_SEARCH}&per_page=${PER_PAGE}&page=${currentPage}`,
    )
    .then(response => {return response.data.hits});
};

