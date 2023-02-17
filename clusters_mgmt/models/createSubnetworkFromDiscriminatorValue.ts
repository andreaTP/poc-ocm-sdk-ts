import {Subnetwork} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubnetworkFromDiscriminatorValue(parseNode: ParseNode | undefined) : Subnetwork {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Subnetwork();
}
