import {Resource_quotaResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResource_quotaResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Resource_quotaResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Resource_quotaResponse();
}
