import { Component } from "@angular/core";


@Component({
    selector:'app-loading-spinner',
    template:'<div class="spinner-border m-5" role="status"> <span class="visually-hidden">Loading...</span></div>',
    styleUrls:['./loading-spinner.css']
})
export class LoadingSpinner {

}