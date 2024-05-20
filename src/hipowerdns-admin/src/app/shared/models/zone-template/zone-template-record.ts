import { ZoneRecordType } from "@app/core/types/record-type";
import { ZoneTemplateBase } from "./zone-template-base";

export interface ZoneTemplateRecord extends ZoneTemplateBase {
    description? : string;
    data?: string;
    ttl?: number;
    type: ZoneRecordType
}