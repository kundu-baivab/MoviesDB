import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchMovies = createAsyncThunk("fetchMovies", async () => {
  const response = await fetch("https://dummyapi.online/api/movies");
  return response.json();
});

const movieSlice = createSlice({
  name: "movies",
  initialState:{
    isLoading:false,
    data:null,
    favorites: {},
    isError:false
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const {movieId,timestamp} = action.payload;
      if (state.favorites[movieId]) {
        delete state.favorites[movieId];
      } else {
        state.favorites[movieId] = timestamp;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending,(state)=>{
        state.isLoading=true
    })
    builder.addCase(fetchMovies.fulfilled,(state,action)=>{
        state.isLoading=false
        state.data=action.payload
    })
    builder.addCase(fetchMovies.rejected,(state,action)=>{
        console.log('Error',action.payload)
        state.isError=true
    })
  },
});

export const { toggleFavorite } = movieSlice.actions;
export default movieSlice.reducer;
