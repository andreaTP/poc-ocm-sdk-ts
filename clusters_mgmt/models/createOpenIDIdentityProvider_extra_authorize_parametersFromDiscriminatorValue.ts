import {OpenIDIdentityProvider_extra_authorize_parameters} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOpenIDIdentityProvider_extra_authorize_parametersFromDiscriminatorValue(parseNode: ParseNode | undefined) : OpenIDIdentityProvider_extra_authorize_parameters {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OpenIDIdentityProvider_extra_authorize_parameters();
}
