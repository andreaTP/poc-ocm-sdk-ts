import {Sts_operator_rolesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSts_operator_rolesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Sts_operator_rolesResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Sts_operator_rolesResponse();
}
