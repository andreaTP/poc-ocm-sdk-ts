import {CloudProvider} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCloudProviderFromDiscriminatorValue(parseNode: ParseNode | undefined) : CloudProvider {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CloudProvider();
}
