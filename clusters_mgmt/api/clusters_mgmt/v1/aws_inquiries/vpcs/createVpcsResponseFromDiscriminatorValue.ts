import {VpcsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVpcsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : VpcsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new VpcsResponse();
}
