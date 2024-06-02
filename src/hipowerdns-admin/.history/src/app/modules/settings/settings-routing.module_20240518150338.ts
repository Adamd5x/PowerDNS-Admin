import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ZoneTemplateComponent } from './zone-templates/zone-template/zone-template.component';
import { TemplatesHomeComponent } from './zone-templates/templates-home/templates-home.component';
import { ZoneTemplateEditComponent } from './zone-templates/zone-template-edit/zone-template-edit.component';
import { zoneTemplateResolver, zonesTemplatesResolver } from './zone-templates/templates-home/resolvers/zones-templates-resolver';

const routes: Routes = [
    {
        path : '',
        component: HomeComponent,
        children: [
            {
                'path': 'zones-templates',
                'component': TemplatesHomeComponent,
                'canActivate': [true],
                'resolve' : { data: zonesTemplatesResolver},
                'children': [
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
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    providers: []
})
export class SettingsRoutingModule {}