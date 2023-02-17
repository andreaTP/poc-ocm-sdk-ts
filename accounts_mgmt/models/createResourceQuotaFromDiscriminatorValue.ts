import {ResourceQuota} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResourceQuotaFromDiscriminatorValue(parseNode: ParseNode | undefined) : ResourceQuota {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ResourceQuota();
}
