import {AddonNamespace_annotations} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddonNamespace_annotationsFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddonNamespace_annotations {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddonNamespace_annotations();
}
