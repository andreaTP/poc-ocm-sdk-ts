import {Cloud_providersResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCloud_providersResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Cloud_providersResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Cloud_providersResponse();
}
