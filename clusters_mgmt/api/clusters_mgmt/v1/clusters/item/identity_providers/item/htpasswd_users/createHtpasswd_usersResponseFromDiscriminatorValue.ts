import {Htpasswd_usersResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHtpasswd_usersResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Htpasswd_usersResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Htpasswd_usersResponse();
}
