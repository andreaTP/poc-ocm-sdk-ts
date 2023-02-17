import {CloudAccount} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCloudAccountFromDiscriminatorValue(parseNode: ParseNode | undefined) : CloudAccount {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CloudAccount();
}
