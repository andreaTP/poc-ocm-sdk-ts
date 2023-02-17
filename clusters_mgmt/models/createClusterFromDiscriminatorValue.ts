import {Cluster} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createClusterFromDiscriminatorValue(parseNode: ParseNode | undefined) : Cluster {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Cluster();
}
