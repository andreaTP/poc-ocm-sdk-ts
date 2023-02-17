import {OpenIDIdentityProvider} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOpenIDIdentityProviderFromDiscriminatorValue(parseNode: ParseNode | undefined) : OpenIDIdentityProvider {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OpenIDIdentityProvider();
}
