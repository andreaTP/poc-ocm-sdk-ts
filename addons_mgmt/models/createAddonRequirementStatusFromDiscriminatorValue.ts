import {AddonRequirementStatus} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddonRequirementStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddonRequirementStatus {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddonRequirementStatus();
}
