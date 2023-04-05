const BASE_URL = "http://localhost:3000/api";

export const registerUser = async (username, password, email) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, email }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const result = await response.json();
    return result;
  } catch (error) {}
};

// export const assignCart = async (userId) => {
//   try {
//     const response = await fetch(`${BASE_URL}/cart/new`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ userId }),
//     });
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getCart = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/cart/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response, "LOGIN RESPONSE");
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
