import {SelfCapabilityReviewRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSelfCapabilityReviewRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : SelfCapabilityReviewRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SelfCapabilityReviewRequest();
}
