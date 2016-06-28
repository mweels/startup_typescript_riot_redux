/// <reference path="./action.ts"/>
/// <reference path="./store.ts"/>


import { BaseElement } from '../lib/baseElement';
import  * as actions from './action.ts';
import { NewStore } from './store.ts';

export default class CodeBehind extends BaseElement  {
  
  
  constructor() {
    super();
  }

  init = function () {
   
    this.doInit();
    this.reduxCore.dispatch(actions.FetchOrganizations());
  }

  getLocalStore = (store) => {
    return store;
  }

  actionSelected = (e,tag) => {
      tag.reduxCore.dispatch(actions.ActionSelected(tag._item.v));
      
  }

}
