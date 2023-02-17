import {ClusterCredentials} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createClusterCredentialsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ClusterCredentials {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ClusterCredentials();
}
