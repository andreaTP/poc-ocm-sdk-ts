import {Identity_providersResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentity_providersResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Identity_providersResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Identity_providersResponse();
}
