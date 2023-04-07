export const BASE_URL = "https://driveze-api.onrender.com/api";

//Cart Endpoints
export const createCart = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        userId,
      }),
    });

    const result = await response.json();

    return result;
  } catch (err) {
    console.error(err);
  }
};

export const getCartByUserId = async (userId) => {
    try {
      const response = await fetch(`${BASE_URL}/cart/${userId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
  
      return result;
    } catch (error) {
      console.error(error);
    }
  };
  

export const addCarToCart = async (userId, carId, price) => {
  try {
    const response = await fetch(`${BASE_URL}/cart/${userId}/${carId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, carId, price }),
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
};

//Car Endpoints
export const getAllVehicles = async () => {
  try {
    const response = await fetch(`${BASE_URL}/cars`, {
      method: "GET",
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const carsByTag = async (tagId) => {
  try {
    const response = await fetch(`${BASE_URL}/car`);
  } catch (error) {}
};

export const getCarById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/cars/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

