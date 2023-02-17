import {ResourceReviewRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResourceReviewRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : ResourceReviewRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ResourceReviewRequest();
}
