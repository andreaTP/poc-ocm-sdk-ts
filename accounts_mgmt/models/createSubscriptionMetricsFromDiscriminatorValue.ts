import {SubscriptionMetrics} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubscriptionMetricsFromDiscriminatorValue(parseNode: ParseNode | undefined) : SubscriptionMetrics {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SubscriptionMetrics();
}
