import {SelfAccessReviewResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSelfAccessReviewResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SelfAccessReviewResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SelfAccessReviewResponse();
}
