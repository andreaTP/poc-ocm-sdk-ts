import {TokenAuthorizationRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTokenAuthorizationRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : TokenAuthorizationRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TokenAuthorizationRequest();
}
