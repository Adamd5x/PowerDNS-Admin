import { ZoneTemplateBase } from "./zone-template-base";

export interface ZoneTemplateRecord extends ZoneTemplateBase {
    description? : string;
    data?: string;
    ttl?: number;
}