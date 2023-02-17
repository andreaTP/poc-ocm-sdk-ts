import {Addon} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddonFromDiscriminatorValue(parseNode: ParseNode | undefined) : Addon {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Addon();
}
