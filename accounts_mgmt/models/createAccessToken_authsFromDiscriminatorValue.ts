import {AccessToken_auths} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessToken_authsFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessToken_auths {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessToken_auths();
}
