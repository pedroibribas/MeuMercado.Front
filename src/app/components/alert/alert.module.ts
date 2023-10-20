import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert.component";
import { AlertService } from "./alert.service";

@NgModule({
    declarations: [
        AlertComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        AlertService
    ],
    exports: [
        AlertComponent
    ]
})
export class AlertModule { }