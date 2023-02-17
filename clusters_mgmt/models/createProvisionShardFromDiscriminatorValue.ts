import {ProvisionShard} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProvisionShardFromDiscriminatorValue(parseNode: ParseNode | undefined) : ProvisionShard {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ProvisionShard();
}
