import {ExportControlReviewResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExportControlReviewResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExportControlReviewResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExportControlReviewResponse();
}
