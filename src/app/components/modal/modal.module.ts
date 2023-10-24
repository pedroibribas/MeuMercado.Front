import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ModalComponent } from "./modal.component";
import { ModalService } from "./modal.service";
import { ModalDirective } from "./modal.directive";


@NgModule({
    declarations: [
        ModalComponent,
        ModalDirective
    ],
    imports: [
        CommonModule
    ],
    providers: [
        ModalService
    ],
    exports: [
        ModalComponent
    ]
})
export class ModalModule { }