import {SSHCredentials} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSSHCredentialsFromDiscriminatorValue(parseNode: ParseNode | undefined) : SSHCredentials {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SSHCredentials();
}
