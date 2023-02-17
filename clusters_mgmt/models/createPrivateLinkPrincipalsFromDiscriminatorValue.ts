import {PrivateLinkPrincipals} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrivateLinkPrincipalsFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrivateLinkPrincipals {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrivateLinkPrincipals();
}
