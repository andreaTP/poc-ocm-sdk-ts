import {GCPEncryptionKey} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGCPEncryptionKeyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GCPEncryptionKey {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GCPEncryptionKey();
}
