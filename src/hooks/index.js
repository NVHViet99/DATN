import { configureStore } from "@reduxjs/toolkit";

import loadingReducer from "./Loading";

const store = configureStore({
  reducer: { loading: loadingReducer },
});

export default store;
