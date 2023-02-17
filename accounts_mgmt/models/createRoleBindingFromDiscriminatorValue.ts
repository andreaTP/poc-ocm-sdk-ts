import {RoleBinding} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRoleBindingFromDiscriminatorValue(parseNode: ParseNode | undefined) : RoleBinding {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RoleBinding();
}
