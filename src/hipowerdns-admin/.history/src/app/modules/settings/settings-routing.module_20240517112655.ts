import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TemplatesHomeComponent } from './zone-templates/templates-home/templates-home.component';

const routes: Routes = [
    {
        path : '',
        component: HomeComponent
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