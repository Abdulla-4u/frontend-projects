import axios from "axios";
import { useDispatch} from "react-redux";
import { setError, setLoading, setPhotos } from "../store/features/MediaSlice";

const API_URI = import.meta.env.VITE_API_URI;
