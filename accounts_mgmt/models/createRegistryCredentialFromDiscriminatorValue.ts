import {RegistryCredential} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRegistryCredentialFromDiscriminatorValue(parseNode: ParseNode | undefined) : RegistryCredential {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RegistryCredential();
}
