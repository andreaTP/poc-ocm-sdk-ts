import {KeyRing} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createKeyRingFromDiscriminatorValue(parseNode: ParseNode | undefined) : KeyRing {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new KeyRing();
}
