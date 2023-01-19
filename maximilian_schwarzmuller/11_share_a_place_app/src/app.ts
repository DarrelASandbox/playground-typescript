import axios from 'axios';

const GOOGLE_API_KEY = '';

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: 'OK' | 'ZERO_RESULTS';
};

const form = document.querySelector('form');
const addressInput = document.getElementById('address') as HTMLInputElement;

function searchAddressHandler(e: Event) {
  e.preventDefault();
  const enteredAddress = addressInput.value;

  axios
    .get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${GOOGLE_API_KEY}
  `
    )
    .then((res) => {
      if (res.data.status !== 'OK') throw new Error('Could not fetch location!');
      const coordinates = res.data.results[0].geometry.location;
      console.log(coordinates);
    })
    .catch((err) => console.log(err));
}

form?.addEventListener('submit', searchAddressHandler);
