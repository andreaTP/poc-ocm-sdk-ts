import {AddonParameter} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddonParameterFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddonParameter {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddonParameter();
}
