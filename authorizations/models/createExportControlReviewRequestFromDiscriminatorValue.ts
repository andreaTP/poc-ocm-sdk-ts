import {ExportControlReviewRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExportControlReviewRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExportControlReviewRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExportControlReviewRequest();
}
