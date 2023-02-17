import {ResourceReview} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResourceReviewFromDiscriminatorValue(parseNode: ParseNode | undefined) : ResourceReview {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ResourceReview();
}
