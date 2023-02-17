import {ServicesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServicesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServicesResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServicesResponse();
}
