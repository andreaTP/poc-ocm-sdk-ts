import {AWSInfrastructureAccessRoleGrant} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAWSInfrastructureAccessRoleGrantFromDiscriminatorValue(parseNode: ParseNode | undefined) : AWSInfrastructureAccessRoleGrant {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AWSInfrastructureAccessRoleGrant();
}
