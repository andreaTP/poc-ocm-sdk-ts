import {AddonNamespace} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddonNamespaceFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddonNamespace {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddonNamespace();
}
