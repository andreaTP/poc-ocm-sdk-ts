/** Controls how mappings are established between provider identities and user objects. */
export enum IdentityProviderMappingMethod {
    Add = "add",
    Claim = "claim",
    Generate = "generate",
    Lookup = "lookup",
}
