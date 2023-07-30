import axios from "axios";
import { fetchFeed,fetchUserDetails,fetchUserPhotos } from "../action";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

////////////////// Initial State values ////////////////////////////////
const initialState = {
  feeds: [],
  user: [],
  username: "",
  userDetails: {},
  userPhotos: [],
  isLoading: false,
  loader: true,
  error: null,
  page: 1,
};
/////////////////////////Feed Slice/////////////////////////////////////
const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    addPage: (state, action) => {
      state.page = state.page + 1;
    },
    resetPage: (state, action) => {
      state.page = 1;
    },
    changeUsername: (state, action) => {
      state.username = action.payload.username;
    },
  },
  extraReducers: (builder) => {

    ///////// cases for fetch feed ///////////////////////
    builder.addCase(fetchFeed.pending, (state) => {
      if (state.page == 1) {
        state.loader = true;
      } else {
        state.isLoading = true;
      }
    });
    builder.addCase(fetchFeed.fulfilled, (state, action) => {
      state.isLoading = false;
      state.loader = false;
      state.feeds = [...state.feeds, ...action.payload];
      if (state.page == 1 && state.user.length == 0) {
        for (let i = 0; i < 10; i++) {
          state.user.push(action.payload[i].user);
        }
      }
    });
    builder.addCase(fetchFeed.rejected, (state, action) => {
      state.loader = false;
      state.error = action.error.message;
    });

    ///////// cases for fetch user details ///////////////////////

    builder.addCase(fetchUserDetails.pending, (state) => {
      if (state.page == 1) {
        state.loader = true;
      } else {
        state.isLoading = true;
      }
    });
    builder.addCase(fetchUserDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.loader = false;
      state.userDetails = { ...state.userDetails, ...action.payload };
    });
    builder.addCase(fetchUserDetails.rejected, (state, action) => {
      state.loader = false;
      state.error = action.error.message;
    });


    ///////// cases for fetch user photos ///////////////////////

    builder.addCase(fetchUserPhotos.pending, (state) => {
      if (state.page == 1) {
        state.loader = true;
      } else {
        state.isLoading = true;
      }
    });
    builder.addCase(fetchUserPhotos.fulfilled, (state,action) => {
      state.loader = false;
      state.isLoading = false;
      console.log("photo action : ",action);
      if(action.payload){
        state.userPhotos = [...state.userPhotos, ...action.payload];
        state.photoCount=state.userPhotos.length;
      }
     
    });
    builder.addCase(fetchUserPhotos.rejected, (state,action) => {
      state.loader = false;
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

/////////////////////////Exporting Actions//////////////////////////////
export const { addPage ,changeUsername ,resetPage } = feedSlice.actions;

/////////////////////////Exporting Reducer//////////////////////////////
export default feedSlice.reducer;
