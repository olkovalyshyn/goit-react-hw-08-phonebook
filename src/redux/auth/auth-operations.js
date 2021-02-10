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

export const logIn = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    //   token.set(data.token)
    return { data };
  } catch (error) {
    //Добавить обработку ошибки error.message
  }
});

const authOperations = {
  register,
  logIn,
};
export default authOperations;
