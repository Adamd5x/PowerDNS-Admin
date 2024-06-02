import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TemplatesHomeComponent } from "./templates-home/templates-home.component";
import { zoneTemplateResolver, zonesTemplatesResolver } from './zones-templates-resolver';
import { ZoneTemplateDetailsComponent } from "./zone-template-details/zone-template-details.component";
import { ZoneTemplateEditComponent } from "./zone-template-edit/zone-template-edit.component";

const routes : Routes = [
    {
        path : '',
        component : TemplatesHomeComponent,
        resolve: { data: zonesTemplatesResolver },
        children: [
            {
                path: 'edit/:templateId',
                component: ZoneTemplateDetailsComponent,
                resolve: { data: zoneTemplateResolver }
            },
            {
                path: 'create',
                component: ZoneTemplateEditComponent
            }
        ]
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