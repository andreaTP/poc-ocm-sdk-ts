import {AWSVolume} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAWSVolumeFromDiscriminatorValue(parseNode: ParseNode | undefined) : AWSVolume {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AWSVolume();
}
