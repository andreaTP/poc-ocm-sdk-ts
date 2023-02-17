import {Addon_inquiriesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddon_inquiriesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Addon_inquiriesResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Addon_inquiriesResponse();
}
