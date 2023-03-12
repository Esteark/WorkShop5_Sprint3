export const getInfoUser = () => {
  return JSON.parse(localStorage.getItem("user")) || {};
};

export const setInfoUser = (data) => {
  localStorage.setItem("user", JSON.stringify(data));
};

export const setCarrito = (inCar) => {
  localStorage.setItem("car", JSON.stringify(inCar));
};

export const getCarrito = () =>{
  return JSON.parse(localStorage.getItem('car')) || [{}]
}

export const setLocalFavorites = (data) =>{
  localStorage.setItem('favorites', JSON.stringify(data))
}

export const getFavorites = () =>{
  return JSON.parse(localStorage.getItem('favorites')) || []
}


export const clearCarrito = () => {
  localStorage.removeItem("car");
};
