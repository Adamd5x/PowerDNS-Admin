import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InitConfigService } from '@app/initializer/init-config.service';
import { Observable, throwError } from 'rxjs';
import { ApplicationError, BadInputError, NotFoundError } from '../errors';

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

    private handleError(error: Response): Observable<never> {
        if (error.status === PageNotFoundCode)    {
            return throwError(() => new NotFoundError(error))
        }

        if (error.status === BadRequestCode) {
            return throwError(() => new BadInputError(error));
        }

        return throwError(() => new ApplicationError(error));
    }
}