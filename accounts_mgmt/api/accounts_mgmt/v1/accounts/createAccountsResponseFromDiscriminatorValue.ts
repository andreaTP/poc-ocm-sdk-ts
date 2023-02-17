import {AccountsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccountsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccountsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccountsResponse();
}
