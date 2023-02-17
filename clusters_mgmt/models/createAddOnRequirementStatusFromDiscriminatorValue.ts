import {AddOnRequirementStatus} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddOnRequirementStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddOnRequirementStatus {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddOnRequirementStatus();
}
