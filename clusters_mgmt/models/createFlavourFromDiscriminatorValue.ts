import {Flavour} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFlavourFromDiscriminatorValue(parseNode: ParseNode | undefined) : Flavour {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Flavour();
}
