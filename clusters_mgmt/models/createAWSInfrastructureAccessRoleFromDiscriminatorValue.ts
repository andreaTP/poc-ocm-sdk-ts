import {AWSInfrastructureAccessRole} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAWSInfrastructureAccessRoleFromDiscriminatorValue(parseNode: ParseNode | undefined) : AWSInfrastructureAccessRole {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AWSInfrastructureAccessRole();
}
