import {AWSFlavour} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAWSFlavourFromDiscriminatorValue(parseNode: ParseNode | undefined) : AWSFlavour {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AWSFlavour();
}
