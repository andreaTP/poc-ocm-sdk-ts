import {FlavourNodes} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFlavourNodesFromDiscriminatorValue(parseNode: ParseNode | undefined) : FlavourNodes {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FlavourNodes();
}
