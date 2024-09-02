import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk("campers/fetchAll", async (_, thunkAPI) => {
    const { campers, filters } = thunkAPI.getState();

    const { page } = campers;
    const { location, AC, transmission, kitchen, TV, bathroom, } = filters.filterParams;

    const params = new URLSearchParams({
        page,
        limit: 4,
        ...(location && { location }),
        ...(AC && { AC: true }),
        ...(transmission && { transmission: "automatic" }),
        ...(kitchen && { kitchen: true }),
        ...(TV && { TV: true }),
        ...(bathroom && { bathroom: true }),
        ...(form && { form }),
    });

    try {
        const response = await axios.get(`/campers?${params}`);
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return thunkAPI.rejectWithValue("No such campers were found");
        } else {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
});

export const fetchCamperById = createAsyncThunk(`campers/fetchCamperById`, async (id, thunkAPI) => {
    try {
        const response = await axios.get(`/campers/${id}`);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
