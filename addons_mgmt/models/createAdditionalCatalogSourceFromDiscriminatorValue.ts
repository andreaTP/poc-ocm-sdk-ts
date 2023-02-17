import {AdditionalCatalogSource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAdditionalCatalogSourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : AdditionalCatalogSource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AdditionalCatalogSource();
}
