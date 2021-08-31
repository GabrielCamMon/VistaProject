import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productsReducer";
import {
  charactersReducer,
  selectedCharactersReducer,
} from "./charactersReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  character: selectedCharactersReducer,
  allcharacters: charactersReducer,
});
export default reducers;
