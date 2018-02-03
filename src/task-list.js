import { WebAPI } from './web-api';
import { inject } from 'aurelia-framework';

@inject(WebAPI)
export class TaskList {

    //static inject() { return [WebAPI] };  can be used in place of the @inject decorator
    // if you don't feel like jumping that far into the future of JavaScript

    constructor(api) {
        this.api = api;
        this.tasks = [];
    }

    created() {
        // get task list as soon as view is created
        this.api.getList().then( x => this.tasks = x);
    }

    select(task) {
        this.selectedId = task.id;
        return true;
    }
}