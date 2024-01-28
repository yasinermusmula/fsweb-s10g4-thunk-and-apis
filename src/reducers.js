import {
  FAV_ADD,
  FAV_REMOVE,
  FETCH_SUCCESS,
  FETCH_LOADING,
  FETCH_ERROR,
  GET_FAVS_FROM_LS,
} from "./actions";


const initial = {
  favs: [],
  current: {
    activity: "Learn to play a new instrument",
    type: "music",
    participants: 1,
    price: 0.55,
    link: "",
    key: "3192099",
    accessibility: 0.6,
  },
  error: null,
  loading: true,
};

function writeFavsToLocalStorage(state) {
  localStorage.setItem("s10g4", JSON.stringify(state.favs));
}

function readFavsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("s10g4"));
}

export function myReducer(state = initial, action) {
  switch (action.type) {
    case FAV_ADD:
      const favAddedState = {
        ...state,
        favs: [...state.favs, action.payload],
      };
      writeFavsToLocalStorage(favAddedState);
      return favAddedState;
    case FAV_REMOVE:
      const favRemoveState = {
        ...state,
        favs: state.favs.filter((item) => item.key !== action.payload),
      };
      writeFavsToLocalStorage(favRemoveState);
      return favRemoveState;

    case FETCH_SUCCESS:
      return { ...state, current: action.payload, loading: false, error: null };

    case FETCH_LOADING:
      return { ...state, loading: true, current: null, error: null };

    case FETCH_ERROR:
      return { ...state, error: action.payload, loading: false };

    case GET_FAVS_FROM_LS:
      return { ...state, favs: readFavsFromLocalStorage() || [] };

    default:
      return state;
  }
}
