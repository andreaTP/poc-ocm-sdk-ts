import {Taint} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTaintFromDiscriminatorValue(parseNode: ParseNode | undefined) : Taint {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Taint();
}
