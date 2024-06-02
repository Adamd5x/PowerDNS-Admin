import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { InitConfigService } from '@app/initializer/init-config.service';
import { Observable, catchError, of, throwError } from 'rxjs';
import { ApplicationError, BadInputError, NotFoundError } from '@core/errors';

const BadRequestCode = 400;
const PageNotFoundCode = 404;

@Injectable()
export class BaseDataService {

    config: any;

    constructor(private http: HttpClient) {
        this.config = inject(InitConfigService);
        console.log(`--------------------------------------------------------------`);
        console.log(`Base data service:`);
        console.log(`API url:           ${this.config.api}`);
        console.log(`Logging url:       ${this.config.logging}`);
        console.log(`License check url: ${this.config.licenseCheck}`);        
        console.log(`--------------------------------------------------------------`);
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

    public post<T>(entryUrl: string,
                   entry: T,
                   headers?: HttpHeaders | {[header: string]: string | string[]},
                   params?: HttpParams|{[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>},
                   withCredentials?: boolean): Observable<any> {

        const jsonEntry = JSON.stringify(entry);
        console.log(jsonEntry);
        
        const url = `${this.config.api}/${entryUrl}`;
        return this.http.post<T>(url,
                         jsonEntry,
                         {
                             headers: headers,
                             params: params,
                             withCredentials: withCredentials                
                         })
                         .pipe(
                             catchError(this.handleError)
                         );
    }


    public update<T>(url: string, entry: Partial<T>, 
              headers?: HttpHeaders | {[header: string]: string | string[]},
              params?: HttpParams|{[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>},
              withCredentials?: boolean): Observable<any> {
        return this.http.put(url, entry, {
            headers: headers,
            params: params,
            withCredentials: withCredentials             
        }).pipe(
            catchError(this.handleError)
        );
    }


    public delete(url: string,
           headers?: HttpHeaders | {[header: string]: string | string[]},
           params?: HttpParams|{[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>}): Observable<any> {
        
    return this.http.delete(url, {
                headers: headers,
                params: params
            }).pipe(
                catchError(this.handleError)
            );
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