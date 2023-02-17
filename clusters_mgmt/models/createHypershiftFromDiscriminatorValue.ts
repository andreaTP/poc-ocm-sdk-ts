import {Hypershift} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHypershiftFromDiscriminatorValue(parseNode: ParseNode | undefined) : Hypershift {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Hypershift();
}
