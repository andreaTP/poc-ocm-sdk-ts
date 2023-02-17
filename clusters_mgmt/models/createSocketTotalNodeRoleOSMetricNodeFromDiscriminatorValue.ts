import {SocketTotalNodeRoleOSMetricNode} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSocketTotalNodeRoleOSMetricNodeFromDiscriminatorValue(parseNode: ParseNode | undefined) : SocketTotalNodeRoleOSMetricNode {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SocketTotalNodeRoleOSMetricNode();
}
