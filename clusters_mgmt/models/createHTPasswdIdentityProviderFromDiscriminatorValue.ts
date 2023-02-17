import {HTPasswdIdentityProvider} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHTPasswdIdentityProviderFromDiscriminatorValue(parseNode: ParseNode | undefined) : HTPasswdIdentityProvider {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new HTPasswdIdentityProvider();
}
