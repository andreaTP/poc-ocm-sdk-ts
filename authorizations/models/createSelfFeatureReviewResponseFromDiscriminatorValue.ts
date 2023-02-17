import {SelfFeatureReviewResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSelfFeatureReviewResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SelfFeatureReviewResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SelfFeatureReviewResponse();
}
