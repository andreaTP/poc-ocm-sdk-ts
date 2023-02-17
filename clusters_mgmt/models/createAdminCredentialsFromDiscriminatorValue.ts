import {AdminCredentials} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAdminCredentialsFromDiscriminatorValue(parseNode: ParseNode | undefined) : AdminCredentials {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AdminCredentials();
}
