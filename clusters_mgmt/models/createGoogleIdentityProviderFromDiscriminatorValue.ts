import {GoogleIdentityProvider} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGoogleIdentityProviderFromDiscriminatorValue(parseNode: ParseNode | undefined) : GoogleIdentityProvider {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GoogleIdentityProvider();
}
