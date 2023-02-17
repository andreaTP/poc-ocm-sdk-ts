import {CapabilityReviewRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCapabilityReviewRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : CapabilityReviewRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CapabilityReviewRequest();
}
