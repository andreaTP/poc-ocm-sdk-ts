import {ServerConfig} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServerConfigFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServerConfig {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServerConfig();
}
