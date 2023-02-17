import {NodePool_labels} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNodePool_labelsFromDiscriminatorValue(parseNode: ParseNode | undefined) : NodePool_labels {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new NodePool_labels();
}
