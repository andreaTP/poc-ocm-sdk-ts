import {CapabilitiesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCapabilitiesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : CapabilitiesResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CapabilitiesResponse();
}
