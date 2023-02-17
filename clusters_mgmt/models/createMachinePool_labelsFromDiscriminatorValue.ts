import {MachinePool_labels} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMachinePool_labelsFromDiscriminatorValue(parseNode: ParseNode | undefined) : MachinePool_labels {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MachinePool_labels();
}
