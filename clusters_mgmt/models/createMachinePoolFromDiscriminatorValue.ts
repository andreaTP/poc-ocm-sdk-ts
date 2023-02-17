import {MachinePool} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMachinePoolFromDiscriminatorValue(parseNode: ParseNode | undefined) : MachinePool {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MachinePool();
}
