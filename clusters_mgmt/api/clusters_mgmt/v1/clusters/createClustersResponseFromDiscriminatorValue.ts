import {ClustersResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createClustersResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ClustersResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ClustersResponse();
}
