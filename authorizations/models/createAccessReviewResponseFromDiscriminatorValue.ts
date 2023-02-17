import {AccessReviewResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewResponse();
}
