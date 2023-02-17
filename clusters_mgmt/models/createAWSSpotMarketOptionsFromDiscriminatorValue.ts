import {AWSSpotMarketOptions} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAWSSpotMarketOptionsFromDiscriminatorValue(parseNode: ParseNode | undefined) : AWSSpotMarketOptions {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AWSSpotMarketOptions();
}
