import {Service_clustersResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createService_clustersResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Service_clustersResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Service_clustersResponse();
}
