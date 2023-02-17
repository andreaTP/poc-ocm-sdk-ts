import {AddonConfig} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddonConfigFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddonConfig {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddonConfig();
}
