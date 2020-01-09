import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface State {
  [key:string]: any;
}

export const reducers: ActionReducerMap<State> = {
  // todo: (state: any, action: any) => state
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
