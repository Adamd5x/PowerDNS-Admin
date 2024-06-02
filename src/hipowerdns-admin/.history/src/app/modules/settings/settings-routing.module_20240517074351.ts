import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
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
    
})
export class SettingsRoutingModule {}