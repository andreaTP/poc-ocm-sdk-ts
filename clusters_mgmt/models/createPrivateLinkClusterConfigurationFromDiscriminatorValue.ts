import {PrivateLinkClusterConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrivateLinkClusterConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrivateLinkClusterConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrivateLinkClusterConfiguration();
}
