import {NodesInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNodesInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : NodesInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new NodesInfo();
}
