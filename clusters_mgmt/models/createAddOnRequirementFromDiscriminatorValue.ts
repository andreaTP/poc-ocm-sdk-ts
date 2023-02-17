import {AddOnRequirement} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddOnRequirementFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddOnRequirement {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddOnRequirement();
}
