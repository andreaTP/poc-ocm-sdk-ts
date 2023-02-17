import {AddonVersion} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddonVersionFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddonVersion {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddonVersion();
}
