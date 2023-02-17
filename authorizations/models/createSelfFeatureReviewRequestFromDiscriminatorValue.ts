import {SelfFeatureReviewRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSelfFeatureReviewRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : SelfFeatureReviewRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SelfFeatureReviewRequest();
}
