import {Reserved_resourcesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReserved_resourcesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Reserved_resourcesResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Reserved_resourcesResponse();
}
