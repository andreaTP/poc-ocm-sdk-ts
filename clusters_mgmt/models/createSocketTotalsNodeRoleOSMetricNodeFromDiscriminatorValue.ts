import {SocketTotalsNodeRoleOSMetricNode} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSocketTotalsNodeRoleOSMetricNodeFromDiscriminatorValue(parseNode: ParseNode | undefined) : SocketTotalsNodeRoleOSMetricNode {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SocketTotalsNodeRoleOSMetricNode();
}
