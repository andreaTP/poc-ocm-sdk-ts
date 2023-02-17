import {ServiceClusterRequestPayload} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceClusterRequestPayloadFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServiceClusterRequestPayload {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServiceClusterRequestPayload();
}
