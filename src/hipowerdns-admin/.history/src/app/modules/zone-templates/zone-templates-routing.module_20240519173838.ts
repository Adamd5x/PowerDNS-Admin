import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TemplatesHomeComponent } from "./templates-home/templates-home.component";
import { zoneTemplateResolver, zonesTemplatesResolver } from './zones-templates-resolver';

const routes : Routes = [
    {
        path : '',
        component : TemplatesHomeComponent,
        resolve: { data: zonesTemplatesResolver}
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