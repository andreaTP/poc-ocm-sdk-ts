import {NodeInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNodeInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : NodeInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new NodeInfo();
}
