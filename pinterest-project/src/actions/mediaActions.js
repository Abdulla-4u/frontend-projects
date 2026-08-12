import axios from "axios";
import { setIsLoading, setError, incrementPage, appendPhotos } from "../store/features/MediaSlice";

const API_URI = import.meta.env.VITE_API_URI;

export const getPhotos = () => async (dispatch, getState) => {
  const { page, hasMore } = getState().media;
  if (!hasMore) return;

  try {
    dispatch(setIsLoading(true));
    const { data } = await axios.get(`${API_URI}?page=${page}&limit=12`);
    
    dispatch(appendPhotos(data));
    dispatch(incrementPage());
  } catch (error) {
    dispatch(setError(error.message || "Something went wrong"));
  } finally {
    dispatch(setIsLoading(false));
  }
};
