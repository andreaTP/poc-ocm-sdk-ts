import {SelfCapabilityReviewResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSelfCapabilityReviewResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SelfCapabilityReviewResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SelfCapabilityReviewResponse();
}
