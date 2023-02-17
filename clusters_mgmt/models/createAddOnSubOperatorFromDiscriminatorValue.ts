import {AddOnSubOperator} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddOnSubOperatorFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddOnSubOperator {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddOnSubOperator();
}
