import {ClusterUpgrade} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createClusterUpgradeFromDiscriminatorValue(parseNode: ParseNode | undefined) : ClusterUpgrade {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ClusterUpgrade();
}
