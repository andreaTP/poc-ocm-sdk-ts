import {FeatureReviewRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFeatureReviewRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : FeatureReviewRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FeatureReviewRequest();
}
