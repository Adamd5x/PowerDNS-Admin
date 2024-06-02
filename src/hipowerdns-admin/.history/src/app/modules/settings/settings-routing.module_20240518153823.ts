import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ZoneTemplateComponent } from './zone-templates/zone-template/zone-template.component';
import { ZoneTemplateEditComponent } from './zone-templates/zone-template-edit/zone-template-edit.component';
import { zoneTemplateResolver, zonesTemplatesResolver } from './zone-templates/zones-templates-resolver';
import { TemplatesHomeComponent } from './zone-templates/templates-home/templates-home.component';

const routes: Routes = [
    {
        path : '',
        component: TemplatesHomeComponent,
        resolve : { data: zonesTemplatesResolver },
        children: [            
            {
            'path' : 'template/:templateId',
            'component' : ZoneTemplateComponent,
            'resolve': { data: zoneTemplateResolver }
            },
            {
                'path' : 'create',
                'component' : ZoneTemplateEditComponent,
                'canActivate': [true]
            },
            {
                'path' : 'edit/:templateId',
                'component': ZoneTemplateEditComponent,
                'canActivate': [true],
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