import {CloudProviderData} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCloudProviderDataFromDiscriminatorValue(parseNode: ParseNode | undefined) : CloudProviderData {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CloudProviderData();
}
