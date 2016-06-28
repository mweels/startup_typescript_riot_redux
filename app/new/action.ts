/// <reference path="../../typings/index.d.ts" />
import Thunk from 'redux-thunk';
import { Promise } from 'es6-promise';

export enum ActionTypes { TYPE_SELECTED, FETCH_ORGANIZATIONS, ORGANIZATIONS_LOADED, ERROR }

var payload = {};


export class ActionSelectedCommand {
  constructor(public actionitem: any) {
  }
}
export function ActionSelected(actionItem): any {
  return {
    type: ActionTypes.TYPE_SELECTED,
    payload: JSON.stringify(new ActionSelectedCommand(actionItem))
  };
}

export class OrganizationsLoadedCommand {
  constructor(public organizations: any) {
  }
}
export function OrganizationsLoaded(organizations): any {
  return {
    type: ActionTypes.ORGANIZATIONS_LOADED,
    payload: JSON.stringify(new OrganizationsLoadedCommand(organizations))
  };
}

export class ErrorCommand {
  constructor(public message: any) {
  }
}
export function Error(message): any {
  return {
    type: ActionTypes.ERROR,
    payload: JSON.stringify(new ErrorCommand(message))
  };
}

export function FetchOrganizations(): any {

  return function (dispatch) {

    new Promise(function (resolve, reject) {

      $.get('/home/GetOrganizationTree').done(function (data) {
        dispatch(OrganizationsLoaded(data));
      }).fail(function(e) {
        dispatch(Error(e.statusText));
      })
    }
  }
}

export function asyncexample(action: any): any {

  // return function (dispatch) {

  //   new Promise(function (resolve, reject) {

  //     setTimeout(function () {
  //       console.log("Weee");
  //       reject("Weee");
  //     }, 2000);

  //   }).then(function () {
  //     console.log("Dispatching.success");
  //     dispatch(Login_Success())
  //   }).catch((err) => {
  //     console.log("Got err");
  //     dispatch(Login_Failure());
  //   });

  // }
}

// export function Login_Success(): IBaseAction {
//   return { type: ACTION.LOGIN_SUCCESS };
// };

// export function Login_Failure(): IBaseAction {
//   return { type: ACTION.LOGIN_FAILURE };
// };

