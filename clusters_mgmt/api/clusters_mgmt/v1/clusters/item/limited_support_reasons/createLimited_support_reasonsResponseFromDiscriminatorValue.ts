import {Limited_support_reasonsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLimited_support_reasonsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Limited_support_reasonsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Limited_support_reasonsResponse();
}
