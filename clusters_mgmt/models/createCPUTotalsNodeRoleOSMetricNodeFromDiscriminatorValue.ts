import {CPUTotalsNodeRoleOSMetricNode} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCPUTotalsNodeRoleOSMetricNodeFromDiscriminatorValue(parseNode: ParseNode | undefined) : CPUTotalsNodeRoleOSMetricNode {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CPUTotalsNodeRoleOSMetricNode();
}
