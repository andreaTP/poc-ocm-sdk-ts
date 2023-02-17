import {FeatureToggle} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFeatureToggleFromDiscriminatorValue(parseNode: ParseNode | undefined) : FeatureToggle {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FeatureToggle();
}
