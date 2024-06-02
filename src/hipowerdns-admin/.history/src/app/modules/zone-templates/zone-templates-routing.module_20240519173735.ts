import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TemplatesHomeComponent } from "./templates-home/templates-home.component";

const routes : Routes = [
    {
        path : '',
        component : TemplatesHomeComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ZoneTemplatesRoutingMonule {
}