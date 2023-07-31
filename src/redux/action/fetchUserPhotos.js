import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserPhotos = createAsyncThunk(
    "user/fetchUserPhotos",
    async (data) => {
      console.log("PageNumber",data);
      if (data.username && data.pageNumber) {
        const result = await axios({
          method: "get",
          url: `https://api.unsplash.com/users/${data.username}/photos?page=${data.pageNumber}&client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}&per_page=10`,
        });
        return result.data;
      }
    }
  );