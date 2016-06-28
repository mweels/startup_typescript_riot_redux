/// <reference path="../../typings/index.d.ts" />

export enum CurrentStateEnum { NEW,TYPESELECTED,ORGANIZATIONSELECTED }

export class NewStore {

    public ActionSelected: any;
    Title: string;
    public Description: string;
    public CurrentState : CurrentStateEnum; 
    public Organizations: any;
    public Workflows: any;
    public WorkflowSelected: number;
    public OrganizationId: number;
    public ActionsBuilt: any;

    constructor() {
            this.Description = "Kids";
    }
 

}
