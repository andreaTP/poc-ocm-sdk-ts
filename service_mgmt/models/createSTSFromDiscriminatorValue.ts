import {STS} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSTSFromDiscriminatorValue(parseNode: ParseNode | undefined) : STS {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new STS();
}
