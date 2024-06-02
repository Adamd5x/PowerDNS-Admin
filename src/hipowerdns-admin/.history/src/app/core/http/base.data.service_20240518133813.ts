import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InitConfigService } from '@app/initializer/init-config.service';
import { Observable, catchError, throwError } from 'rxjs';
import { ApplicationError, BadInputError, NotFoundError } from '../errors';

const BadRequestCode = 400;
const PageNotFoundCode = 404;


@Injectable()
export class BaseDataService {
    constructor(private http: HttpClient,
                private config: InitConfigService) {
    }

    public get<T>(entryUrl: string,
                  headers?: HttpHeaders | {[header: string]: string | string[]},
                  params?: HttpParams | {[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>},
                  withCredentials?: boolean): Observable<T> {
        const url = `${this.config.api}/${entryUrl}`;
        return this.http
                   .get<T>(
                        url,
                        {
                            headers: headers,
                            params: params,
                            withCredentials: withCredentials
                        })
                    .pipe(
                        catchError(this.handleError)
                    )
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