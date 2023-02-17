import {CloudRegion} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCloudRegionFromDiscriminatorValue(parseNode: ParseNode | undefined) : CloudRegion {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CloudRegion();
}
