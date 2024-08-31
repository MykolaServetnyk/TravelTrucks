import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const getCampers = async (page = 1, limit = 4) => {
    const response = await axios.get("/campers", {
        params: {
            page,
            limit,
        },
    });
    return response.data;
};

export const getCamperById = async (camperId) => {
    const response = await axios.get(`/campers/${camperId}`);
    return response.data;
};




