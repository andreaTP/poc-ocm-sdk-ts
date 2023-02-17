import {Encryption_keysResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEncryption_keysResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Encryption_keysResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Encryption_keysResponse();
}
