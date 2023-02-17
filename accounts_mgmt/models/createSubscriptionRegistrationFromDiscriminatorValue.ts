import {SubscriptionRegistration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubscriptionRegistrationFromDiscriminatorValue(parseNode: ParseNode | undefined) : SubscriptionRegistration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SubscriptionRegistration();
}
