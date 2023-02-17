import {MachineType} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMachineTypeFromDiscriminatorValue(parseNode: ParseNode | undefined) : MachineType {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MachineType();
}
