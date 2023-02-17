import {ClusterResources_resources} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createClusterResources_resourcesFromDiscriminatorValue(parseNode: ParseNode | undefined) : ClusterResources_resources {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ClusterResources_resources();
}
