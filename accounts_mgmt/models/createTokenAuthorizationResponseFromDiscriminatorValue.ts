import {TokenAuthorizationResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTokenAuthorizationResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TokenAuthorizationResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TokenAuthorizationResponse();
}
