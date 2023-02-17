import {SubscriptionNotify} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubscriptionNotifyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SubscriptionNotify {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SubscriptionNotify();
}
