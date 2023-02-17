import {AccessReviewRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewRequest();
}
