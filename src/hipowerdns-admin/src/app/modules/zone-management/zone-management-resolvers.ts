import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router"
import { ZoneManagementService } from "@app/core/http/zone-management.service"
import { Zone } from "@app/shared/models/zone-management";

export const ZoneManagementZones : ResolveFn<Zone[]> =
    (route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot
    ) => {
        return inject(ZoneManagementService).getZones();
    }