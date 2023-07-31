import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFeed = createAsyncThunk(
    "photos/fetchPhotos",
    async (pageNumber) => {
      const result = await axios({
        method: "get",
        url: `https://api.unsplash.com/photos?page=${pageNumber}&client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}&per_page=10`,
      });
      return result.data;
    }
  );