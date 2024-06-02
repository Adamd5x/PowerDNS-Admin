import { ErrorHandler } from "@angular/core";

export class AdminErrorHandler implements ErrorHandler
{
    handleError(error: any): void {
        console.error(JSON.stringify(error));
    }
    
}