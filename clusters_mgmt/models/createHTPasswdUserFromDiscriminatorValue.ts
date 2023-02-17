import {HTPasswdUser} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHTPasswdUserFromDiscriminatorValue(parseNode: ParseNode | undefined) : HTPasswdUser {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new HTPasswdUser();
}
