import axios from 'axios';

export const fetchCoffee = () => (dispatch) => {
  axios.get("http://localhost:3001/coffee").then(({data}) => {
    dispatch(setCoffee(data))
  })
}

export const setCoffee = (items) => ({
  type: 'SET_COFFEE',
  payload: items
});
