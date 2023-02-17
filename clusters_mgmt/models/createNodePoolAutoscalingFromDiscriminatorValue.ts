import {NodePoolAutoscaling} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNodePoolAutoscalingFromDiscriminatorValue(parseNode: ParseNode | undefined) : NodePoolAutoscaling {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new NodePoolAutoscaling();
}
