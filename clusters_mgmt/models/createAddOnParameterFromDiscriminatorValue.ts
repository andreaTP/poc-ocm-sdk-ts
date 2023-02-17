import {AddOnParameter} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddOnParameterFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddOnParameter {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddOnParameter();
}
