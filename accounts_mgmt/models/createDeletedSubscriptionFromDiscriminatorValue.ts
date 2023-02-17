import {DeletedSubscription} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeletedSubscriptionFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeletedSubscription {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeletedSubscription();
}
