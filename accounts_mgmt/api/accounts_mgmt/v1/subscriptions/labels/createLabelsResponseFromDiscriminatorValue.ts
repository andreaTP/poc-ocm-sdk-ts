import {LabelsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLabelsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : LabelsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LabelsResponse();
}
