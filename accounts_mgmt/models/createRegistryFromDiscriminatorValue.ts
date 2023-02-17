import {Registry} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRegistryFromDiscriminatorValue(parseNode: ParseNode | undefined) : Registry {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Registry();
}
