import {LDAPIdentityProvider} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLDAPIdentityProviderFromDiscriminatorValue(parseNode: ParseNode | undefined) : LDAPIdentityProvider {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LDAPIdentityProvider();
}
