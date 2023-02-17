import {ClusterOperatorsInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createClusterOperatorsInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : ClusterOperatorsInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ClusterOperatorsInfo();
}
