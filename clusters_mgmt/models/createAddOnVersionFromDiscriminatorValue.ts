import {AddOnVersion} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddOnVersionFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddOnVersion {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddOnVersion();
}
