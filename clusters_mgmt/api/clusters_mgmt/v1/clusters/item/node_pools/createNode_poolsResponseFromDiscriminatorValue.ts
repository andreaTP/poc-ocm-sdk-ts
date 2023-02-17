import {Node_poolsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNode_poolsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Node_poolsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Node_poolsResponse();
}
