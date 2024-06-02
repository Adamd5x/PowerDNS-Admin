import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ZoneTemplateComponent } from './zone-templates/zone-template/zone-template.component';
import { TemplatesHomeComponent } from './zone-templates/templates-home/templates-home.component';
import { ZoneTemplateEditComponent } from './zone-templates/zone-template-edit/zone-template-edit.component';

const routes: Routes = [
    {
        path : '',
        component: HomeComponent,
        children: [
            {
                'path': 'zones-templates',
                'component': TemplatesHomeComponent,
                'children': [
                    {
                    'path' : 'template/{template}',
                    'component' : ZoneTemplateComponent
                    },
                    {
                        'path' : 'create',
                        'component' : ZoneTemplateEditComponent
                    },
                    {
                        'path' : 'edit/{template}',
                        'component': ZoneTemplateEditComponent
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