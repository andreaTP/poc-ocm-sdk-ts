import {OperatorIAMRole} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOperatorIAMRoleFromDiscriminatorValue(parseNode: ParseNode | undefined) : OperatorIAMRole {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OperatorIAMRole();
}
