import {Gate_agreementsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGate_agreementsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Gate_agreementsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Gate_agreementsResponse();
}
