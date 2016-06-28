/// <reference path="../../typings/index.d.ts" />

import { combineReducers } from 'redux';
import * as actions from './action';
import * as _ from 'lodash';
import { NewStore } from './Store';

function newActions(state: NewStore, action: any): NewStore {

  if (!state)
    state = new NewStore();

  let type: actions.ActionTypes = <actions.ActionTypes>action.type;

  switch (type) {
    case actions.ActionTypes.TYPE_SELECTED: {
      state.ActionSelected = <actions.ActionSelectedCommand>JSON.parse(action.payload)
      return state;
    }
    case actions.ActionTypes.ORGANIZATIONS_LOADED: {
      state.Organizations = <actions.OrganizationsLoadedCommand>JSON.parse(action.payload).organizations;
      return state;
    }
    case actions.ActionTypes.ERROR: {
      let e : actions.ErrorCommand = <actions.ErrorCommand>JSON.parse(action.payload);
      alert(e.message);
      return state;

    }
    default:
      return state;
  }

}

export default combineReducers({ newActions });
