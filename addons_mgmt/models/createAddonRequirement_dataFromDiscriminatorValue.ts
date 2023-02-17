import {AddonRequirement_data} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddonRequirement_dataFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddonRequirement_data {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddonRequirement_data();
}
