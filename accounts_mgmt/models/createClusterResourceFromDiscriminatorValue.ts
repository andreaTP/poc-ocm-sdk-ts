import {ClusterResource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createClusterResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : ClusterResource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ClusterResource();
}
