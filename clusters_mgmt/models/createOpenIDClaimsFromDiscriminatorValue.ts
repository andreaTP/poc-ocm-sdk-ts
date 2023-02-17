import {OpenIDClaims} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOpenIDClaimsFromDiscriminatorValue(parseNode: ParseNode | undefined) : OpenIDClaims {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OpenIDClaims();
}
