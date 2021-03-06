import axios from "axios";
const base_url = "https://backend-ufc-api.herokuapp.com/api/";

export const getAllFighters = () => {
  return axios.get(`${base_url}fighters`).then((response) => {
    return response.data.fighters;
  });
};

export const getAllStaff = () => {
  return axios.get(`${base_url}staff`).then((response) => {
    return response.data.staff;
  });
};

export const getSingleFighter = (full_name) => {
  return axios.get(`${base_url}fighters/${full_name}`).then((response) => {
    return response.data.fighter;
  });
};

export const getSingleStaff = (full_name) => {
  return axios.get(`${base_url}staff/${full_name}`).then((response) => {
    return response.data.staff;
  });
};

export const getAllEvents = () => {
  return axios.get(`${base_url}events`).then((response) => {
    return response.data.events;
  });
};

export const getFightersByWeight = (weight) => {
  return axios.get(`${base_url}fighters/weight/${weight}`).then((response) => {
    return response.data.fighters;
  });
};

export const getAllWeights = () => {
  return axios.get(`${base_url}weights`).then((response) => {
    return response.data.weights;
  });
};
//ufc hq 6650 South Torrey Pines Drive, Las Vegas, NV, USA
