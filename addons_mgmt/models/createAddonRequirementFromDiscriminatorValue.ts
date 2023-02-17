import {AddonRequirement} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddonRequirementFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddonRequirement {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddonRequirement();
}
