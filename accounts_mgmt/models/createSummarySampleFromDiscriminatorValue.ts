import {SummarySample} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSummarySampleFromDiscriminatorValue(parseNode: ParseNode | undefined) : SummarySample {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SummarySample();
}
