import {AccessToken} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessTokenFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessToken {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessToken();
}
