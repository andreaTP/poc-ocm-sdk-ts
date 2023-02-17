import {ClusterNodes} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createClusterNodesFromDiscriminatorValue(parseNode: ParseNode | undefined) : ClusterNodes {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ClusterNodes();
}
