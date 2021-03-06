// Import
import {
  SAVE_SERIES_TENDANCE,
  SAVE_SERIES_TOP_RATED,
  SAVE_SERIES_RECENT,
  SET_LOAD_TENDANCE,
  SET_LOAD_TOP_RATED,
  SET_LOAD_RECENT,
} from 'src/actions/series';
import { SAVE_SERIE_INPUT } from 'src/actions/input';
// console.log(data);

import {
  SAVE_SERIE,
  CHANGE_DROPDOWN,
} from 'src/actions/name';


// Initial State
const initialState = {
  idGenres: '',
  idNetwork: '',
  idNote: '',
  idTime: '',
  seriesTendance: [],
  seriesTopRated: [],
  seriesRecent: [],
  serieInput: [],
  inputName: '',
  loadTendance: false,
  loadTopRated: false,
  loadRecent: false,
};

const homeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_SERIES_TENDANCE:
      // console.log(action.series);
      return {
        ...state, // state actuel
        seriesTendance: action.series,
      };
    case SAVE_SERIES_TOP_RATED:
      // console.log(action.series);
      return {
        ...state, // state actuel
        seriesTopRated: action.series,
      };
    case SAVE_SERIES_RECENT:
      // console.log(action.series);
      return {
        ...state, // state actuel
        seriesRecent: action.series,
      };
    case SAVE_SERIE_INPUT:
      // console.log(action.serieInput);
      return {
        ...state, // state actuel
        serieInput: action.serieInput,
      };
    case SAVE_SERIE:
      return {
        ...state, // state actuel
        inputName: action.value,
      };
    case CHANGE_DROPDOWN:
      return {
        ...state, // state actuel
        idGenres: action.idGenres,
        idNetwork: action.idNetwork,
        idNote: action.idNote,
        idTime: action.idTime,
      };
    case SET_LOAD_TENDANCE:
      // console.log(action.serie);
      return {
        ...state, // state actuel
        loadTendance: action.load,
      };
    case SET_LOAD_TOP_RATED:
      // console.log(action.serie);
      return {
        ...state, // state actuel
        loadTopRated: action.load,
      };
    case SET_LOAD_RECENT:
      // console.log(action.serie);
      return {
        ...state, // state actuel
        loadRecent: action.load,
      };
    default:
      // console.log(state);
      return state;
  }
};

export default homeReducer;
