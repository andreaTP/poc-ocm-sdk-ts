import {ProductsResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createProductsResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ProductsResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ProductsResponse();
}
