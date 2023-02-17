import {CloudVPC} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCloudVPCFromDiscriminatorValue(parseNode: ParseNode | undefined) : CloudVPC {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CloudVPC();
}
