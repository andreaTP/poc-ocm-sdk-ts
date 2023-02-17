import {PushResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPushResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PushResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PushResponse();
}
