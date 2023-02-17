import {Deleted_subscriptionsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeleted_subscriptionsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Deleted_subscriptionsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Deleted_subscriptionsResponse();
}
