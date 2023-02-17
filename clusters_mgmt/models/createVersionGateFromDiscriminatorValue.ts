import {VersionGate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVersionGateFromDiscriminatorValue(parseNode: ParseNode | undefined) : VersionGate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new VersionGate();
}
