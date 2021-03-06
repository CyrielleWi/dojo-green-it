/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.ts, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux';

import { reducer as avatar } from './Avatar';
import { reducer as slider } from './Slider';
import { RootState } from './types';

export default combineReducers<RootState>({
  avatar,
  slider,
});
