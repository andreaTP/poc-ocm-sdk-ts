import {ClusterManagementReference} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createClusterManagementReferenceFromDiscriminatorValue(parseNode: ParseNode | undefined) : ClusterManagementReference {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ClusterManagementReference();
}
