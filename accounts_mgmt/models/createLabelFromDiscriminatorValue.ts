import {Label} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLabelFromDiscriminatorValue(parseNode: ParseNode | undefined) : Label {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Label();
}
