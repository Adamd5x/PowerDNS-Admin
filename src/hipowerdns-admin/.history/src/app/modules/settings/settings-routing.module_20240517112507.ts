import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TemplatesHomeComponent } from './zone-templates/templates-home/templates-home.component';

const routes: Routes = [
    {
        path : '',
        component: HomeComponent,
        children: [
            {
                path: 'templates',
                component: TemplatesHomeComponent
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class SettingsRoutingModule {}