import {GCPVolume} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGCPVolumeFromDiscriminatorValue(parseNode: ParseNode | undefined) : GCPVolume {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GCPVolume();
}
