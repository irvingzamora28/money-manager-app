import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import config from "../../config/config";
import CategoryInterface from "../../interfaces/CategoryInterface";
import CategoryStateInterface from "../../interfaces/CategoryStateInterface";
import { ErrorResponseInterface } from "../../interfaces/ErrorResponseInterface";
import categoryService from "./categoryService";

const getCategories = createAsyncThunk<
CategoryInterface[],
null,
{
	state: RootState;
	rejectValue: ErrorResponseInterface;
}
>("categories/all", async (_, thunkAPI) => {
	const token = thunkAPI.getState().auth.user?.token ?? "";
	if (token) {
		const result = await categoryService.getCategories(token)
		console.log("result");
		console.log(result);
		
		return result;

	}
	console.log(token);
	

	// const response = await fetch(`${API_URL}`, {
	// 	// method: "GET",
	// 	// mode: "cors",
	// 	// cache: "no-cache",
	// 	// credentials: "same-origin",
	// 	headers: {
	// 		"Content-Type": "application/json",
	// 		Authorization: `Bearer ${token}`,
	// 	},
	// 	// redirect: "follow",
	// 	// referrerPolicy: "no-referrer",
	// });
	// const categories = await response.json();
	// console.log(categories.categories);
	
	// return categories.categories;
})

const initialState: CategoryStateInterface = {
	categories: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	error: { type: "", message: "" },
	success: { type: "", message: "" }
}

const categorySlice = createSlice({
	name: "category",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getCategories.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getCategories.fulfilled, (state, action: PayloadAction<CategoryInterface[]>) => {
				console.log("fulfilled");
				console.log(action.payload);
				
				state.isLoading = false;
				state.categories = action.payload;
			})
			.addCase(getCategories.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
			})
	}
})

export { getCategories }
export default categorySlice.reducer;
