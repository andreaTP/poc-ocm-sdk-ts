import {TermsReviewResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTermsReviewResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TermsReviewResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TermsReviewResponse();
}
