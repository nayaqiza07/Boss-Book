import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  limitData: 0,
  totalData: 0,

  page: 0,
  totalPage: 0,

  keyword: "",
  query: "",
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setLimitData: (state, action) => {
      state.limitData = action.payload;
    },
    setTotalData: (state, action) => {
      state.totalData = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setTotalPage: (state, action) => {
      state.totalPage = action.payload;
    },
    setKeyword: (state, action) => {
      state.keyword = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const {
  setLimitData,
  setTotalData,
  setPage,
  setTotalPage,
  setKeyword,
  setQuery,
} = paginationSlice.actions;

export default paginationSlice.reducer;
