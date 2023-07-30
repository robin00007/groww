import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFeed = createAsyncThunk(
    "photos/fetchPhotos",
    async (pageNumber) => {
      const result = await axios({
        method: "get",
        url: `https://api.unsplash.com/photos?page=${pageNumber}&client_id=gB0miyPX9vZmDP8BK8Ltc9co495f4xQyoA3QPcCgB7Y&per_page=10`,
      });
      return result.data;
    }
  );