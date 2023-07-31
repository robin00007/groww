import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserDetails = createAsyncThunk(
    "user/fetchUserDetails",
    async (username) => {
      if (username) {
        const result = await axios({
          method: "get",
          url: `https://api.unsplash.com/users/${username}?client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}`,
        });
        return result.data;
      }
    }
  );