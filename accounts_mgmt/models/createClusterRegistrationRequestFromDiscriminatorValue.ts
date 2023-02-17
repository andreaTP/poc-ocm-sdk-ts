import {ClusterRegistrationRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createClusterRegistrationRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : ClusterRegistrationRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ClusterRegistrationRequest();
}
