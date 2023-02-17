import {Role_bindingsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRole_bindingsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Role_bindingsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Role_bindingsResponse();
}
