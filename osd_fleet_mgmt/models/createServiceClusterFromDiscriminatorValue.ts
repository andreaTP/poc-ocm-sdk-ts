import {ServiceCluster} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceClusterFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServiceCluster {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServiceCluster();
}
