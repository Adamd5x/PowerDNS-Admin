import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@app/../environments/environment';
import { InitConfigService } from '@app/initializer/init-config.service';

const BadRequestCode = 400;
const PageNotFoundCode = 404;


@Injectable()
export class BaseDataService {
    constructor(private http: HttpClient,
                private config: InitConfigService) {
    }


    public get<T>(): T {
        return this.http.get<T>()
    }

}