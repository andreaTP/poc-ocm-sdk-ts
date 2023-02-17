import {ClusterAPI} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createClusterAPIFromDiscriminatorValue(parseNode: ParseNode | undefined) : ClusterAPI {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ClusterAPI();
}
