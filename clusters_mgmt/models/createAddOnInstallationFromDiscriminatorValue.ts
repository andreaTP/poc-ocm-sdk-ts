import {AddOnInstallation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddOnInstallationFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddOnInstallation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddOnInstallation();
}
