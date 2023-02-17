import {AddOnNamespace_annotations} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddOnNamespace_annotationsFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddOnNamespace_annotations {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddOnNamespace_annotations();
}
