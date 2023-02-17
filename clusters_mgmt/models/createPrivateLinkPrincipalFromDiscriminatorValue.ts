import {PrivateLinkPrincipal} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrivateLinkPrincipalFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrivateLinkPrincipal {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrivateLinkPrincipal();
}
