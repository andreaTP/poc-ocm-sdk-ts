import {Current_accessResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCurrent_accessResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Current_accessResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Current_accessResponse();
}
