import {RolesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRolesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RolesResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RolesResponse();
}
