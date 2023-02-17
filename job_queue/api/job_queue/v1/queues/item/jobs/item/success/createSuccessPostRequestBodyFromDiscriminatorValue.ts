import {SuccessPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSuccessPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SuccessPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SuccessPostRequestBody();
}
