import {SubscriptionsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubscriptionsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SubscriptionsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SubscriptionsResponse();
}
