import {LimitedSupportReason} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLimitedSupportReasonFromDiscriminatorValue(parseNode: ParseNode | undefined) : LimitedSupportReason {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LimitedSupportReason();
}
