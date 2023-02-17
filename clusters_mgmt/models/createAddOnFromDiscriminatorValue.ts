import {AddOn} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddOnFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddOn {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddOn();
}
