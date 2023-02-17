import {Environment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEnvironmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Environment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Environment();
}
