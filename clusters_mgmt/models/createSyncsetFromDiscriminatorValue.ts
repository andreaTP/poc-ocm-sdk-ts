import {Syncset} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSyncsetFromDiscriminatorValue(parseNode: ParseNode | undefined) : Syncset {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Syncset();
}
