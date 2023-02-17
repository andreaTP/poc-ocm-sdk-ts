import {Management_clustersResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagement_clustersResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Management_clustersResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Management_clustersResponse();
}
