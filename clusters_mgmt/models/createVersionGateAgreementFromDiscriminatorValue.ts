import {VersionGateAgreement} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVersionGateAgreementFromDiscriminatorValue(parseNode: ParseNode | undefined) : VersionGateAgreement {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new VersionGateAgreement();
}
