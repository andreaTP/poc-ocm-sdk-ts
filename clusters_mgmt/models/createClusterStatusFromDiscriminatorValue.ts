import {ClusterStatus} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createClusterStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : ClusterStatus {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ClusterStatus();
}
