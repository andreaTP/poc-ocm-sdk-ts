import {AddOn_common_labels} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddOn_common_labelsFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddOn_common_labels {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddOn_common_labels();
}
