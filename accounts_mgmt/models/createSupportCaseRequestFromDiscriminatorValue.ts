import {SupportCaseRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSupportCaseRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : SupportCaseRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SupportCaseRequest();
}
