import {Limited_support_reason_templatesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLimited_support_reason_templatesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Limited_support_reason_templatesResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Limited_support_reason_templatesResponse();
}
