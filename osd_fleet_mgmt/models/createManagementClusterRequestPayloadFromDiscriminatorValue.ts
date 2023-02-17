import {ManagementClusterRequestPayload} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagementClusterRequestPayloadFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagementClusterRequestPayload {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagementClusterRequestPayload();
}
