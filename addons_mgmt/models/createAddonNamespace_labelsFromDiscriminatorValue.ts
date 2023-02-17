import {AddonNamespace_labels} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddonNamespace_labelsFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddonNamespace_labels {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddonNamespace_labels();
}
