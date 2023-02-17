import {Syncset_resources} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSyncset_resourcesFromDiscriminatorValue(parseNode: ParseNode | undefined) : Syncset_resources {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Syncset_resources();
}
