import {ClusterRegistrationResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createClusterRegistrationResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ClusterRegistrationResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ClusterRegistrationResponse();
}
