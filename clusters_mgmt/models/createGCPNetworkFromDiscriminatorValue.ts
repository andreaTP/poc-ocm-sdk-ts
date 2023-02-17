import {GCPNetwork} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGCPNetworkFromDiscriminatorValue(parseNode: ParseNode | undefined) : GCPNetwork {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GCPNetwork();
}
