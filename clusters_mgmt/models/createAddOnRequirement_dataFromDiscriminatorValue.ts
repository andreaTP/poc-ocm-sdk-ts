import {AddOnRequirement_data} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddOnRequirement_dataFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddOnRequirement_data {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddOnRequirement_data();
}
