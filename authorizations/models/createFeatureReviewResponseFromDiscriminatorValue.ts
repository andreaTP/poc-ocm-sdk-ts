import {FeatureReviewResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFeatureReviewResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : FeatureReviewResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FeatureReviewResponse();
}
