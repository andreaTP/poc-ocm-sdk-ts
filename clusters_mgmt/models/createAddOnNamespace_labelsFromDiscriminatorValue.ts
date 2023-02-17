import {AddOnNamespace_labels} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddOnNamespace_labelsFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddOnNamespace_labels {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddOnNamespace_labels();
}
