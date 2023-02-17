import {NodePool} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNodePoolFromDiscriminatorValue(parseNode: ParseNode | undefined) : NodePool {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new NodePool();
}
