import {AWSMachinePool} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAWSMachinePoolFromDiscriminatorValue(parseNode: ParseNode | undefined) : AWSMachinePool {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AWSMachinePool();
}
