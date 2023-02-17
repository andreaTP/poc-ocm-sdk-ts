import {ValueUnit} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createValueUnitFromDiscriminatorValue(parseNode: ParseNode | undefined) : ValueUnit {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ValueUnit();
}
