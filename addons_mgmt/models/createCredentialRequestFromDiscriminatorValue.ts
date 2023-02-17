import {CredentialRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCredentialRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : CredentialRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CredentialRequest();
}
