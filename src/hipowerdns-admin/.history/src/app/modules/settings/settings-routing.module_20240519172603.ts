import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZoneTemplateEditComponent } from './zone-templates/zone-template-edit/zone-template-edit.component';
import { zoneTemplateResolver, zonesTemplatesResolver } from './zone-templates/zones-templates-resolver';
import { TemplatesHomeComponent } from './zone-templates/templates-home/templates-home.component';
import { ZoneTemplateDetailsComponent } from './zone-templates/zone-template-details/zone-template-details.component';

const routes: Routes = [
    {
        path : '',
        component: TemplatesHomeComponent,
        resolve : { data: zonesTemplatesResolver },
        children: [            
            {
                'path' : 'create',
                'component' : ZoneTemplateEditComponent
            },
            {
                'path' : 'template/:templateid',
                'component': ZoneTemplateDetailsComponent,
                'resolve': { data: zoneTemplateResolver }
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class SettingsRoutingModule {}