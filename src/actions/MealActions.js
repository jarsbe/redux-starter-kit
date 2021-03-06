import { createAction } from 'redux-actions';

import {
  UPDATE_MEAL_PROP,
  BEGIN_CREATING_MEAL,
  SUCCESS_CREATING_MEAL,
  ERROR_CREATING_MEAL
} from '../constants/MealsConstants';

export const updateMealProp = createAction(UPDATE_MEAL_PROP);
export const successCreatingMeal = createAction(SUCCESS_CREATING_MEAL);
export const errorCreatingMeal = createAction(ERROR_CREATING_MEAL);

export function beginCreatingMeal(payload) {
  return {
    payload: payload,
    promise: null,
    types: [BEGIN_CREATING_MEAL, SUCCESS_CREATING_MEAL, ERROR_CREATING_MEAL],
  }
}
