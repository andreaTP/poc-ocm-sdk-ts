import {STSOperator} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSTSOperatorFromDiscriminatorValue(parseNode: ParseNode | undefined) : STSOperator {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new STSOperator();
}
