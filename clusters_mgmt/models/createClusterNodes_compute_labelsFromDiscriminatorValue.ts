import {ClusterNodes_compute_labels} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createClusterNodes_compute_labelsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ClusterNodes_compute_labels {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ClusterNodes_compute_labels();
}
