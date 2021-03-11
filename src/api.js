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

export const getAllStoreItems = () => {
  return axios.get(`${base_url}store`).then((response) => {
    return response.data.items;
  });
};

export const getAllTypes = () => {
  return axios.get(`${base_url}types`).then((response) => {
    return response.data.type;
  });
};

export const getItemsByType = (type) => {
  return axios.get(`${base_url}store/${type}`).then((response) => {
    return response.data.items;
  });
};

export const addFighter = ({
  first_name,
  surname,
  full_name,
  weight,
  age,
  dob,
  champ_status,
  next_fight,
  img_url,
}) => {
  return axios
    .post(`${base_url}fighters`, {
      first_name: first_name,
      surname: surname,
      full_name: full_name,
      weight: weight,
      age: age,
      dob: dob,
      champ_status: champ_status,
      next_fight: next_fight,
      img_url: img_url,
    })
    .then((response) => {
      console.log(response, "response");
      console.log(response.data, "response dot data");
      return response.data;
    });
};
//ufc hq 6650 South Torrey Pines Drive, Las Vegas, NV, USA
