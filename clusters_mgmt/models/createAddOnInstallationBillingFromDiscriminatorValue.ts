import {AddOnInstallationBilling} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddOnInstallationBillingFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddOnInstallationBilling {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddOnInstallationBilling();
}
