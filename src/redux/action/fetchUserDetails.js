import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserDetails = createAsyncThunk(
    "user/fetchUserDetails",
    async (username) => {
      if (username) {
        const result = await axios({
          method: "get",
          url: `https://api.unsplash.com/users/${username}?client_id=gB0miyPX9vZmDP8BK8Ltc9co495f4xQyoA3QPcCgB7Y`,
        });
        return result.data;
      }
    }
  );