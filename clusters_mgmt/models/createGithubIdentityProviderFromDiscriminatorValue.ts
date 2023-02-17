import {GithubIdentityProvider} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGithubIdentityProviderFromDiscriminatorValue(parseNode: ParseNode | undefined) : GithubIdentityProvider {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GithubIdentityProvider();
}
