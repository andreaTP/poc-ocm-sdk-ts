import {FeatureToggleQueryRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFeatureToggleQueryRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : FeatureToggleQueryRequest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FeatureToggleQueryRequest();
}
