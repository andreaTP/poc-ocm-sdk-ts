import {AddOn_common_annotations} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddOn_common_annotationsFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddOn_common_annotations {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddOn_common_annotations();
}
