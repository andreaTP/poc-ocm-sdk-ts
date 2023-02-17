import {AddonSecretPropagation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddonSecretPropagationFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddonSecretPropagation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddonSecretPropagation();
}
