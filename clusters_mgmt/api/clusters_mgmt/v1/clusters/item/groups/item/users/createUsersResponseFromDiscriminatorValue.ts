import {UsersResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUsersResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UsersResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UsersResponse();
}
