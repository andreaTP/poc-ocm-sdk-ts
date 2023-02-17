import {Value} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createValueFromDiscriminatorValue(parseNode: ParseNode | undefined) : Value {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Value();
}
