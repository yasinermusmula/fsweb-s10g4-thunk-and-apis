import { toast } from "react-toastify";
import axios from "axios";

export const GET_FAVS_FROM_LS = "GET_FAVS_FROM_LS";
export const FAV_ADD = "FAV_ADD";
export const FAV_REMOVE = "FAV_REMOVE";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_LOADING = "FETCH_LOADING";
export const FETCH_ERROR = "FETCH_ERROR";

export const getFavsFromLocalStorage = () => {
  return { type: GET_FAVS_FROM_LS };
};

export const addFav = (info) => {
  toast("Favorilere Eklendi", {
    type: "success",
    autoClose: 2000,
  });
  const data = {
    ...info,
    id: Date.now(),
  };
  return { type: FAV_ADD, payload: data };
};

export const removeFav = (id) => {
  toast("Favorilerden Çıkarıldı", {
    type: "warning",
    autoClose: 2000,
  });
  return { type: FAV_REMOVE, payload: id };
};

export const fetchAnother = () => (dispatch) => {
  const toasterWithPromise = toast.loading("Bekleyedur..");

  dispatch({ type: FETCH_LOADING });
  axios
    .get("https://www.boredapi.com/api/activity")
    .then(function (response) {
      console.log(response);
      // handle success
      // console.log(response);
      toast.update(toasterWithPromise, {
        render: "All is good",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });

      dispatch({ type: FETCH_SUCCESS, payload: response.data });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      toast.update(toasterWithPromise, {
        render: "Hata Oluştu",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
      dispatch({ type: FETCH_ERROR, payload: error.message });
    })
    .finally(function () {
      // always executed
    });
};
