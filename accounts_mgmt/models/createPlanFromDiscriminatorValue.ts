import {Plan} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlanFromDiscriminatorValue(parseNode: ParseNode | undefined) : Plan {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Plan();
}
