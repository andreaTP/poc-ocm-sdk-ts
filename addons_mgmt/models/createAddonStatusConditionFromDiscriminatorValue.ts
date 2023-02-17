import {AddonStatusCondition} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddonStatusConditionFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddonStatusCondition {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddonStatusCondition();
}
