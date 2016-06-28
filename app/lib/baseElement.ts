/// <reference path="../../typings/index.d.ts" />

import * as _ from 'lodash';


export class BaseElement {

    protected myLocalStore: any;

    protected myState: any;
    protected globalState: any;
    protected localGlobalState: any;
    public tag: any;
    protected reduxCore: any = null;

    private stateSubscription: any = null;

    constructor() {
        
    }


  
    doInit = function() {
        
        this.tag = this;

        this.reduxCore = this.tag.opts.store;
       

        let i: number = 0;
        let c: any = null;
        while (!this.reduxCore) {
            i++;
            c = this.parent;
            this.reduxCore = c.opts.store;
            if (i > 1000) {
                throw 'Went in circles trying to find a store';
            }
        }

        this.reduxCore = this.reduxCore;

        this.globalState = this.reduxCore.getState();
        this.localGlobalState = this.reduxCore.getState();

        this.buildLocal(this.getLocalStore(this.localGlobalState));
        this.stateChange(this.localGlobalState);

        this.on('mount', function () {
            this.storeSubscription = this.reduxCore.subscribe(function () {
                this.persistLocalAndUpdate();
            }.bind(this));


        }.bind(this));

        this.on('unmount', function () {
           console.log("Unmounting");
        }.bind(this));
    }
  

    protected buildLocal = function (localState) {

        this.myState = localState;
        this.stateChange(localState, this.globalState);
        console.log("Updating..");
        this.update();
    }

    protected persistLocalAndUpdate = function () {

        let globalLocal = this.getLocalStore(this.reduxCore.getState());

        if (!_.isEqual(globalLocal, this.myState)) {
            this.buildLocal(globalLocal);
        }
        else {
            console.log("still equivlent");
        }
    }

    protected stateChange = function (localState, globalState) {
        console.log(`The tag ${this.tagName} did not impliment stateChange`);
    };

}

