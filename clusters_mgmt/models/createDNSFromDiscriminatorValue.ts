import {DNS} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDNSFromDiscriminatorValue(parseNode: ParseNode | undefined) : DNS {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DNS();
}
