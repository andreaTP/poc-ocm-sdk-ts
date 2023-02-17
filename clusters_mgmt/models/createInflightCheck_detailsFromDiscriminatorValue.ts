import {InflightCheck_details} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInflightCheck_detailsFromDiscriminatorValue(parseNode: ParseNode | undefined) : InflightCheck_details {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InflightCheck_details();
}
