import {Key_ringsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createKey_ringsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Key_ringsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Key_ringsResponse();
}
