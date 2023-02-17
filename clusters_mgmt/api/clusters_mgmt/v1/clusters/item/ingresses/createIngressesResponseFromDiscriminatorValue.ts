import {IngressesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIngressesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IngressesResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IngressesResponse();
}
