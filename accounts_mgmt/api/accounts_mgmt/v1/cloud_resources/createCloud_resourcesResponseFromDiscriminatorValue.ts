import {Cloud_resourcesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCloud_resourcesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Cloud_resourcesResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Cloud_resourcesResponse();
}
