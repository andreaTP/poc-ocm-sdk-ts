import {AddonSubOperator} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddonSubOperatorFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddonSubOperator {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddonSubOperator();
}
