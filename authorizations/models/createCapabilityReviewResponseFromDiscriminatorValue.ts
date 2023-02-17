import {CapabilityReviewResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCapabilityReviewResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : CapabilityReviewResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CapabilityReviewResponse();
}
