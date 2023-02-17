import {EncryptionKey} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEncryptionKeyFromDiscriminatorValue(parseNode: ParseNode | undefined) : EncryptionKey {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EncryptionKey();
}
