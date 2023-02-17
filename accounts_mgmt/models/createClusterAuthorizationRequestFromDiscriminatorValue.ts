import {ClusterAuthorizationRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createClusterAuthorizationRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : ClusterAuthorizationRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ClusterAuthorizationRequest();
}
