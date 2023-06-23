const API_KEY =
  'live_KeUFYzJ3tzrXVHT8wWsozCTv7JV9BRSMQHLAelmPTx9tCGfuNlXfyrgWP71spt4p';
const BASE_URL = `https://api.thecatapi.com/v1`;

const loaderRef = document.querySelector('.loader');
const breedSelectRef = document.querySelector('.breed-select');

export function fetchBreeds() {
  loaderRef.classList.remove('hidden');
  breedSelectRef.classList.add('hidden');

  return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}&SameSite=None,Secure`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch(err => console.log(err));
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}&SameSite=None,Secure`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch cat by breed.');
      }
      return response.json();
    })
    .then(cat => {
      return cat[0];
    })
    .catch(error => {
      console.error('Error fetching cat data:', error);
      throw error;
    });
}
