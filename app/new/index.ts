/// <reference path="../require.ts"/>
/// <reference path="../../typings/index.d.ts"/>

require("../globalComponents/organizationSelect/organizationSelectTree.tag");

require("../../script/initials.js");

require("./index.tag");

let riot = require("riot");


import { createStore, applyMiddleware} from 'redux';
import { default as appReducers } from './reducer';
import * as _ from 'lodash';
import Thunk from 'redux-thunk';


let store = createStore(appReducers, applyMiddleware(Thunk));
window["store"] = store;

riot.mount('index', { store: store });


