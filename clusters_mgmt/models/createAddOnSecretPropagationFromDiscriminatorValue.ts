import {AddOnSecretPropagation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddOnSecretPropagationFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddOnSecretPropagation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddOnSecretPropagation();
}
