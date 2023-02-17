import {InflightCheck} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInflightCheckFromDiscriminatorValue(parseNode: ParseNode | undefined) : InflightCheck {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InflightCheck();
}
