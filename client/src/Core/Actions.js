import axios from "axios";
axios.defaults.baseURL = `http://localhost:3001`;

// GET ALL RECIPES: get all recipes
export function getAllRecipes() {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/recipes`);
      //console.warn(response);
      return dispatch({
        type: "GET_ALL_RECIPES",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

// GET RECIPES BY KEYWORD: get all recipes searching by keyword
export function getRecipeByKeyword(keyWord) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/recipes?name=${keyWord}`);
      return dispatch({
        type: "GET_RECIPES_BY_KEYWORD",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

// GET DETAILS RECIPE: get recipe searching by id
export function getDetailsRecipe(idRecipe) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/recipes/${idRecipe}`);
      return dispatch({
        type: "GET_DETAILS_RECIPE",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

// GET TYPES DIET: get all types diet
export function getTypesDiet() {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/types`);
      return dispatch({
        type: "GET_TYPES_DIET",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

// SET FILTER TYPES DIET: set filter by types diet
export function filterByTypesDiet(dietName, recipes) {
  return (dispatch) => {
    dispatch({
      type: "FILTER_TYPES_DIET",
      payload: { dietName, recipes },
    });
  };
}

// SORT BY NAME
export function sortByTitle(typeOrder, recipes, order) {
  return (dispatch) => {
    dispatch({
      type: "SORT_BY_TITLE",
      payload: { typeOrder, recipes, order },
    });
  };
}

// SORT BY SCORE
export function sortByScore(typeOrder, recipes, order) {
  return (dispatch) => {
    dispatch({
      type: "SORT_BY_SCORE",
      payload: { typeOrder, recipes, order },
    });
  };
}

// Create Recipe (POST)
export function postRecipe(payload) {
  console.log("Arigato", payload);
  return async () => {
    try {
      return await axios.post(`/recipe`, payload);
    } catch (error) {
      console.log(error);
    }
  };
}

export function setPage(payload) {
  return {
    type: "SET_PAGE",
    payload,
  };
}
