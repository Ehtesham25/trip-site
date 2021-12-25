import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3003" });

export const createATrip = (trip) => API.post("/trips", trip);
export const getAllTripss = () => API.get("/trips");
export const updateTrip = ( id,trip) => API.put(`/trips/${id}`, trip);
export const deleteTrip = (id) => API.delete(`/trips/${id}`);
