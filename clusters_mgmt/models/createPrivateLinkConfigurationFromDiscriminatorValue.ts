import {PrivateLinkConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrivateLinkConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrivateLinkConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrivateLinkConfiguration();
}
