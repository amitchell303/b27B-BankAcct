import { configureStore } from "@reduxjs/toolkit";
import transactions from "../features/transactions/transactionsSlice.js";

// TODO: Configure the store to use the reducer from the transactions slice.
const store = configureStore({
  reducer: {
    transactions,
  },
});

export default store;
