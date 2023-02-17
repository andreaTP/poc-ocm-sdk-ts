import {Cluster_logsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCluster_logsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Cluster_logsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Cluster_logsResponse();
}
