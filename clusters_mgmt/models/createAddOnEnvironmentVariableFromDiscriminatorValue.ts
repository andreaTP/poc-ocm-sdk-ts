import {AddOnEnvironmentVariable} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddOnEnvironmentVariableFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddOnEnvironmentVariable {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddOnEnvironmentVariable();
}
