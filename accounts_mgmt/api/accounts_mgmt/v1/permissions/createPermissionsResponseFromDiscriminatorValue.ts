import {PermissionsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPermissionsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PermissionsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PermissionsResponse();
}
