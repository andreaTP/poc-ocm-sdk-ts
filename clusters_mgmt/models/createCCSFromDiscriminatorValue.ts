import {CCS} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCCSFromDiscriminatorValue(parseNode: ParseNode | undefined) : CCS {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CCS();
}
