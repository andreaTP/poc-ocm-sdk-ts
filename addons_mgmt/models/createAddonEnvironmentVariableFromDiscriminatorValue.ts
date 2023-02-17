import {AddonEnvironmentVariable} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddonEnvironmentVariableFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddonEnvironmentVariable {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddonEnvironmentVariable();
}
