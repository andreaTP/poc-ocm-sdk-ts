import {QueuesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createQueuesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : QueuesResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new QueuesResponse();
}
