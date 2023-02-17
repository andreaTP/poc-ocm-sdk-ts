import {GCPFlavour} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGCPFlavourFromDiscriminatorValue(parseNode: ParseNode | undefined) : GCPFlavour {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GCPFlavour();
}
