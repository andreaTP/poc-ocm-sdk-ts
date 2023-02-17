import {ClusterOperatorInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createClusterOperatorInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : ClusterOperatorInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ClusterOperatorInfo();
}
