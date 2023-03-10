import {ManagementCluster} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagementClusterFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagementCluster {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagementCluster();
}
