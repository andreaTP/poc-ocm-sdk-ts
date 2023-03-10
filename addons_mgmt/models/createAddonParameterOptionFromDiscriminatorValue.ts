import {AddonParameterOption} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddonParameterOptionFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddonParameterOption {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddonParameterOption();
}
