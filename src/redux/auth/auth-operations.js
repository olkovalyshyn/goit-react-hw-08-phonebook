import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      //   token.set(data.token)
      return data;
    } catch (error) {
      //Добавить обработку ошибки error.message
    }
  }
);

const logIn = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    //   token.set(data.token)
    return data;
  } catch (error) {
    //Добавить обработку ошибки error.message
  }
});

export const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("/users/logout");
    // token.unset();
  } catch (error) {
    //Добавить обработку ошибки error.message
  }
});

const authOperations = {
  register,
  logIn,
  logOut,
};
export default authOperations;
