import {MachinePoolAutoscaling} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMachinePoolAutoscalingFromDiscriminatorValue(parseNode: ParseNode | undefined) : MachinePoolAutoscaling {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MachinePoolAutoscaling();
}
