import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import expenseReducer from "../features/expenses/expenseSlice";
import categoryReducer from "../features/categories/categorySlice";

const store = configureStore({
	reducer: {
		auth: authReducer,
		expenses: expenseReducer,
		categories: categoryReducer
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
