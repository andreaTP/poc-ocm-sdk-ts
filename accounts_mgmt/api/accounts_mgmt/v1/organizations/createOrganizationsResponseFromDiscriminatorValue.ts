import {OrganizationsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOrganizationsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : OrganizationsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OrganizationsResponse();
}
