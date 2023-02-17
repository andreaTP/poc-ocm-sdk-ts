import {StatusResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createStatusResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : StatusResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new StatusResponse();
}
