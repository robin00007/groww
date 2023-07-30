// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { fetchUserDetails ,fetchUserPhotos} from "../action";

// const initialState = {
//   username: "",
//   userDetails: {},
//   userPhotos: [],
//   photoCount:0,
//   isLoading: false,
//   loader: true,
//   error: null,
// };



// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     changeUsername: (state, action) => {
//       state.username = action.payload.username;
//     },
//   },
//   extraReducers: (builder) => {



//     builder.addCase(fetchUserDetails.pending, (state) => {
//       if (state.page == 1) {
//         state.loader = true;
//       } else {
//         state.isLoading = true;
//       }
//     });
//     builder.addCase(fetchUserDetails.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.loader = false;
//       state.userDetails = { ...state.userDetails, ...action.payload };
//     });
//     builder.addCase(fetchUserDetails.rejected, (state, action) => {
//       state.loader = false;
//       state.error = action.error.message;
//     });




//     builder.addCase(fetchUserPhotos.pending, (state) => {
//       if (state.page == 1) {
//         state.loader = true;
//       } else {
//         state.isLoading = true;
//       }
//     });
//     builder.addCase(fetchUserPhotos.fulfilled, (state,action) => {
//       state.loader = false;
//       state.isLoading = false;
//       console.log("photo action : ",action);
//       if(action.payload){
//         state.userPhotos = [...state.userPhotos, ...action.payload];
//         state.photoCount=action.payload.length;
//       }
     
//     });
//     builder.addCase(fetchUserPhotos.rejected, (state,action) => {
//       state.loader = false;
//       state.isLoading = false;
//       state.error = action.error.message;
//     });



//   },
// });

// export const { changeUsername } = userSlice.actions;

// export default userSlice.reducer;
