const BASE_URL = "http://localhost:3000/api/";

//Cart Endpoints
export const createCart = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}cart`, {
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

export const addCarToCart = async (cartId, carId, price) => {
    try {
        const response = await fetch(`${BASE_URL}/cart/${cartId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cartId: cartId, 
            carId: carId, 
            price: price,
          }),
        });
        const result = await response.json();

        return result;
      } catch (err) {
        console.error(err);
      }
    };

