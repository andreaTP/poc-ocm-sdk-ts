import {AddOnParameterOption} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddOnParameterOptionFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddOnParameterOption {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddOnParameterOption();
}
