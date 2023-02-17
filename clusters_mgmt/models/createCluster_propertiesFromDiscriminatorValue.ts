import {Cluster_properties} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCluster_propertiesFromDiscriminatorValue(parseNode: ParseNode | undefined) : Cluster_properties {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Cluster_properties();
}
