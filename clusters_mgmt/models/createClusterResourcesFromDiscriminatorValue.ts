import {ClusterResources} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createClusterResourcesFromDiscriminatorValue(parseNode: ParseNode | undefined) : ClusterResources {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ClusterResources();
}
