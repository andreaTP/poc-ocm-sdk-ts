import {ExternalConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExternalConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExternalConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExternalConfiguration();
}
