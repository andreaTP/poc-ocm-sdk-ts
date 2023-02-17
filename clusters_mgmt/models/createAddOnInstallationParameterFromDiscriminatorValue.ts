import {AddOnInstallationParameter} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddOnInstallationParameterFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddOnInstallationParameter {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddOnInstallationParameter();
}
