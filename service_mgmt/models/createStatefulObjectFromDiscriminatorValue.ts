import {StatefulObject} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStatefulObjectFromDiscriminatorValue(parseNode: ParseNode | undefined) : StatefulObject {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new StatefulObject();
}
