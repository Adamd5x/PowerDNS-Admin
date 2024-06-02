import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { ZoneCreateComponent } from './zone-create/zone-create.component';
import { ZoneRemoveComponent } from './zone-remove/zone-remove.component';
import { ZoneManagementZones } from "./zone-management-resolvers";

const routes : Routes = [
    {
        path: '',
        component: HomeComponent,
        resolve: { data: ZoneManagementZones},
        'children': [
            {
                'path': 'create',
                'component' : ZoneCreateComponent
            },
            {
                'path': 'remove',
                'component': ZoneRemoveComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    providers: []
})
export class ZoneManagementRoutingModule {}