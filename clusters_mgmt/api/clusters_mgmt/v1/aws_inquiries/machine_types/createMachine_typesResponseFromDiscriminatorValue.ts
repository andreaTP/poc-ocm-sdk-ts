import {Machine_typesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMachine_typesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Machine_typesResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Machine_typesResponse();
}
