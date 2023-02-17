import {Quota_costResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createQuota_costResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Quota_costResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Quota_costResponse();
}
