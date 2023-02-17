import {Capability} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCapabilityFromDiscriminatorValue(parseNode: ParseNode | undefined) : Capability {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Capability();
}
