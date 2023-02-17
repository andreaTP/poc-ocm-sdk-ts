import {ClusterMetricsNodes} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createClusterMetricsNodesFromDiscriminatorValue(parseNode: ParseNode | undefined) : ClusterMetricsNodes {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ClusterMetricsNodes();
}
