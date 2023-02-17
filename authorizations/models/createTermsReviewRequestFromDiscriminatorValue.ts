import {TermsReviewRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTermsReviewRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : TermsReviewRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TermsReviewRequest();
}
