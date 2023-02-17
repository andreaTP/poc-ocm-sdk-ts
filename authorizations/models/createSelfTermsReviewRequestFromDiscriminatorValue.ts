import {SelfTermsReviewRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSelfTermsReviewRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : SelfTermsReviewRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SelfTermsReviewRequest();
}
