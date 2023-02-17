import {Aws_infrastructure_access_rolesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAws_infrastructure_access_rolesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Aws_infrastructure_access_rolesResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Aws_infrastructure_access_rolesResponse();
}
