import {Aws_infrastructure_access_role_grantsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAws_infrastructure_access_role_grantsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Aws_infrastructure_access_role_grantsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Aws_infrastructure_access_role_grantsResponse();
}
