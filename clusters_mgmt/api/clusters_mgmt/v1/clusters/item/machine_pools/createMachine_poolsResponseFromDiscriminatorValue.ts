import {Machine_poolsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMachine_poolsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Machine_poolsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Machine_poolsResponse();
}
