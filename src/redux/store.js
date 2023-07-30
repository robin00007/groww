import { configureStore } from '@reduxjs/toolkit'

// by using the configure store it will automatically create the the createstore of redux and it combines the redux dev tools extension along with it . 
import feedSlice from './slice/feedSlice';
export const store = configureStore({
  reducer: {
    feed: feedSlice,
   
  },
})