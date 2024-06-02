import { ZoneTemplateBase } from "./zone-template-base";
import { ZoneTemplateRecord } from "./zone-template-record";

export interface ZoneTemplateDetails extends ZoneTemplateBase {
    description?: string;
    records: ZoneTemplateRecord[] | null;
}