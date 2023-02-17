import {SummaryMetrics} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSummaryMetricsFromDiscriminatorValue(parseNode: ParseNode | undefined) : SummaryMetrics {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SummaryMetrics();
}
