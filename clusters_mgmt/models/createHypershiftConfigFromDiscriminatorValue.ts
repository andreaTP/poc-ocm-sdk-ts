import {HypershiftConfig} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHypershiftConfigFromDiscriminatorValue(parseNode: ParseNode | undefined) : HypershiftConfig {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new HypershiftConfig();
}
