import {AddOnNamespace} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddOnNamespaceFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddOnNamespace {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddOnNamespace();
}
