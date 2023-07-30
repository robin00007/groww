import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserPhotos = createAsyncThunk(
    "user/fetchUserPhotos",
    async (data) => {
      console.log("PageNumber",data);
      if (data.username && data.pageNumber) {
        const result = await axios({
          method: "get",
          url: `https://api.unsplash.com/users/${data.username}/photos?page=${data.pageNumber}&client_id=gB0miyPX9vZmDP8BK8Ltc9co495f4xQyoA3QPcCgB7Y&per_page=10`,
        });
        return result.data;
      }
    }
  );