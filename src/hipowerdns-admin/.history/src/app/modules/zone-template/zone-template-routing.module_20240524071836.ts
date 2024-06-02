import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TemplatesHomeComponent } from "./templates-home/templates-home.component";
import { zoneTemplateResolver, zonesTemplatesResolver } from './zone-template-resolver';
import { ZoneTemplateDetailsComponent } from "./zone-template-details/zone-template-details.component";

const routes : Routes = [
    {
        path : '',
        component : TemplatesHomeComponent,
        resolve: { data: zonesTemplatesResolver }
    },
    {
        path: ':templateId',
        component: ZoneTemplateDetailsComponent,
        resolve: { data: zoneTemplateResolver }
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