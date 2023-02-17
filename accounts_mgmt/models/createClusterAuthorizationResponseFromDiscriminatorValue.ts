import {ClusterAuthorizationResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createClusterAuthorizationResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ClusterAuthorizationResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ClusterAuthorizationResponse();
}
