import {AddOnConfig} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddOnConfigFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddOnConfig {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddOnConfig();
}
