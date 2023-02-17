import {NodePoolStatus} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNodePoolStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : NodePoolStatus {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new NodePoolStatus();
}
