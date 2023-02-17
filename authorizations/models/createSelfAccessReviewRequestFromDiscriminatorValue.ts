import {SelfAccessReviewRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSelfAccessReviewRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : SelfAccessReviewRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SelfAccessReviewRequest();
}
