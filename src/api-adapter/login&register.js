import { BASE_URL } from "./index";

export const registerUser = async (username, password, email) => {
  try {
    const response = await fetch(`${BASE_URL}users/register`, {
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
    const response = await fetch(`${BASE_URL}users/login`, {
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

export const getCart = async (token) => {
  console.log(token);
  try {
    const response = await fetch(`${BASE_URL}cart/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response, "LOGIN RESPONSE");
    const result = await response.json();
    console.log();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const guestUser = async (name) => {
  try {
    const response = await fetch(`${BASE_URL}guests/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
    console.log(response, "GUEST RESPONSE LOG");
    const result = await response.json();
    console.log(result, "RESULT LOG");
    return { ...result, guestId: result.id };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
