(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{265:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return r})),a.d(e,"metadata",(function(){return c})),a.d(e,"rightToc",(function(){return O})),a.d(e,"default",(function(){return j}));var b=a(1),n=a(9),l=(a(0),a(308)),r={title:"Config Options for c",sidebar_label:"c"},c={id:"generators/c",title:"Config Options for c",description:"These options may be applied as additional-properties (cli) or configOptions (plugins). Refer to [configuration docs](https://openapi-generator.tech/docs/configuration) for more details.",source:"@site/../docs/generators/c.md",permalink:"/docs/generators/c",editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/generators/c.md",lastUpdatedBy:"William Cheng",lastUpdatedAt:1616823811,sidebar_label:"c"},O=[{value:"IMPORT MAPPING",id:"import-mapping",children:[]},{value:"INSTANTIATION TYPES",id:"instantiation-types",children:[]},{value:"LANGUAGE PRIMITIVES",id:"language-primitives",children:[]},{value:"RESERVED WORDS",id:"reserved-words",children:[]},{value:"FEATURE SET",id:"feature-set",children:[{value:"Client Modification Feature",id:"client-modification-feature",children:[]},{value:"Data Type Feature",id:"data-type-feature",children:[]},{value:"Documentation Feature",id:"documentation-feature",children:[]},{value:"Global Feature",id:"global-feature",children:[]},{value:"Parameter Feature",id:"parameter-feature",children:[]},{value:"Schema Support Feature",id:"schema-support-feature",children:[]},{value:"Security Feature",id:"security-feature",children:[]},{value:"Wire Format Feature",id:"wire-format-feature",children:[]}]}],i={rightToc:O};function j(t){var e=t.components,a=Object(n.a)(t,["components"]);return Object(l.b)("wrapper",Object(b.a)({},i,a,{components:e,mdxType:"MDXLayout"}),Object(l.b)("p",null,"These options may be applied as additional-properties (cli) or configOptions (plugins). Refer to ",Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"https://openapi-generator.tech/docs/configuration"}),"configuration docs")," for more details."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Option"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Values"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"allowUnicodeIdentifiers"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"boolean, toggles whether unicode identifiers are allowed in names or not, default is false"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"disallowAdditionalPropertiesIfNotPresent"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"If false, the 'additionalProperties' implementation (set to true by default) is compliant with the OAS and JSON schema specifications. If true (default), keep the old (incorrect) behaviour that 'additionalProperties' is set to false by default."),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(l.b)("dl",null,Object(l.b)("dt",null,Object(l.b)("strong",{parentName:"td"},"false")),Object(l.b)("dd",null,"The 'additionalProperties' implementation is compliant with the OAS and JSON schema specifications."),Object(l.b)("dt",null,Object(l.b)("strong",{parentName:"td"},"true")),Object(l.b)("dd",null,"Keep the old (incorrect) behaviour that 'additionalProperties' is set to false by default."))),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"true")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ensureUniqueParams"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Whether to ensure parameter names are unique in an operation (rename parameters that are not)."),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"true")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"hideGenerationTimestamp"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Hides the generation timestamp when files are generated."),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"true")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"legacyDiscriminatorBehavior"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Set to false for generators with better support for discriminators. (Python, Java, Go, PowerShell, C#have this enabled by default)."),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(l.b)("dl",null,Object(l.b)("dt",null,Object(l.b)("strong",{parentName:"td"},"true")),Object(l.b)("dd",null,"The mapping in the discriminator includes descendent schemas that allOf inherit from self and the discriminator mapping schemas in the OAS document."),Object(l.b)("dt",null,Object(l.b)("strong",{parentName:"td"},"false")),Object(l.b)("dd",null,"The mapping in the discriminator includes any descendent schemas that allOf inherit from self, any oneOf schemas, any anyOf schemas, any x-discriminator-values, and the discriminator mapping schemas in the OAS document AND Codegen validates that oneOf and anyOf schemas contain the required discriminator and throws an error if the discriminator is missing."))),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"true")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"prependFormOrBodyParameters"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Add form or body parameters to the beginning of the parameter list."),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"sortModelPropertiesByRequiredFlag"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Sort model properties to place required parameters before optional parameters."),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"true")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"sortParamsByRequiredFlag"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Sort method arguments to place required parameters before optional parameters."),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"true")))),Object(l.b)("h2",{id:"import-mapping"},"IMPORT MAPPING"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type/Alias"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Imports"))),Object(l.b)("tbody",{parentName:"table"})),Object(l.b)("h2",{id:"instantiation-types"},"INSTANTIATION TYPES"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type/Alias"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Instantiated By"))),Object(l.b)("tbody",{parentName:"table"})),Object(l.b)("h2",{id:"language-primitives"},"LANGUAGE PRIMITIVES"),Object(l.b)("ul",{class:"column-ul"},Object(l.b)("li",null,"Object"),Object(l.b)("li",null,"binary_t*"),Object(l.b)("li",null,"char"),Object(l.b)("li",null,"double"),Object(l.b)("li",null,"float"),Object(l.b)("li",null,"int"),Object(l.b)("li",null,"list"),Object(l.b)("li",null,"list_t*"),Object(l.b)("li",null,"long"),Object(l.b)("li",null,"short")),Object(l.b)("h2",{id:"reserved-words"},"RESERVED WORDS"),Object(l.b)("ul",{class:"column-ul"},Object(l.b)("li",null,"_alignas"),Object(l.b)("li",null,"_alignof"),Object(l.b)("li",null,"_atomic"),Object(l.b)("li",null,"_bool"),Object(l.b)("li",null,"_complex"),Object(l.b)("li",null,"_generic"),Object(l.b)("li",null,"_imaginary"),Object(l.b)("li",null,"_noreturn"),Object(l.b)("li",null,"_static_assert"),Object(l.b)("li",null,"_thread_local"),Object(l.b)("li",null,"alignas"),Object(l.b)("li",null,"alignof"),Object(l.b)("li",null,"and"),Object(l.b)("li",null,"and_eq"),Object(l.b)("li",null,"asm"),Object(l.b)("li",null,"atomic_cancel"),Object(l.b)("li",null,"atomic_commit"),Object(l.b)("li",null,"atomic_noexcept"),Object(l.b)("li",null,"auto"),Object(l.b)("li",null,"bitand"),Object(l.b)("li",null,"bitor"),Object(l.b)("li",null,"bool"),Object(l.b)("li",null,"break"),Object(l.b)("li",null,"case"),Object(l.b)("li",null,"catch"),Object(l.b)("li",null,"char"),Object(l.b)("li",null,"char16_t"),Object(l.b)("li",null,"char32_t"),Object(l.b)("li",null,"char8_t"),Object(l.b)("li",null,"class"),Object(l.b)("li",null,"co_await"),Object(l.b)("li",null,"co_return"),Object(l.b)("li",null,"co_yield"),Object(l.b)("li",null,"compl"),Object(l.b)("li",null,"concept"),Object(l.b)("li",null,"const"),Object(l.b)("li",null,"const_cast"),Object(l.b)("li",null,"consteval"),Object(l.b)("li",null,"constexpr"),Object(l.b)("li",null,"constinit"),Object(l.b)("li",null,"continue"),Object(l.b)("li",null,"decltype"),Object(l.b)("li",null,"default"),Object(l.b)("li",null,"delete"),Object(l.b)("li",null,"do"),Object(l.b)("li",null,"double"),Object(l.b)("li",null,"dynamic_cast"),Object(l.b)("li",null,"else"),Object(l.b)("li",null,"enum"),Object(l.b)("li",null,"explicit"),Object(l.b)("li",null,"export"),Object(l.b)("li",null,"extern"),Object(l.b)("li",null,"false"),Object(l.b)("li",null,"final"),Object(l.b)("li",null,"float"),Object(l.b)("li",null,"for"),Object(l.b)("li",null,"friend"),Object(l.b)("li",null,"goto"),Object(l.b)("li",null,"if"),Object(l.b)("li",null,"inline"),Object(l.b)("li",null,"int"),Object(l.b)("li",null,"long"),Object(l.b)("li",null,"mutable"),Object(l.b)("li",null,"namespace"),Object(l.b)("li",null,"new"),Object(l.b)("li",null,"noexcept"),Object(l.b)("li",null,"not"),Object(l.b)("li",null,"not_eq"),Object(l.b)("li",null,"nullptr"),Object(l.b)("li",null,"operator"),Object(l.b)("li",null,"or"),Object(l.b)("li",null,"or_eq"),Object(l.b)("li",null,"override"),Object(l.b)("li",null,"private"),Object(l.b)("li",null,"protected"),Object(l.b)("li",null,"public"),Object(l.b)("li",null,"reflexpr"),Object(l.b)("li",null,"register"),Object(l.b)("li",null,"reinterpret_cast"),Object(l.b)("li",null,"remove"),Object(l.b)("li",null,"requires"),Object(l.b)("li",null,"restrict"),Object(l.b)("li",null,"return"),Object(l.b)("li",null,"short"),Object(l.b)("li",null,"signed"),Object(l.b)("li",null,"sizeof"),Object(l.b)("li",null,"static"),Object(l.b)("li",null,"static_assert"),Object(l.b)("li",null,"static_cast"),Object(l.b)("li",null,"struct"),Object(l.b)("li",null,"switch"),Object(l.b)("li",null,"synchronized"),Object(l.b)("li",null,"template"),Object(l.b)("li",null,"this"),Object(l.b)("li",null,"thread_local"),Object(l.b)("li",null,"throw"),Object(l.b)("li",null,"transaction_safe"),Object(l.b)("li",null,"transaction_safe_dynamic"),Object(l.b)("li",null,"true"),Object(l.b)("li",null,"try"),Object(l.b)("li",null,"typedef"),Object(l.b)("li",null,"typeid"),Object(l.b)("li",null,"typename"),Object(l.b)("li",null,"union"),Object(l.b)("li",null,"unsigned"),Object(l.b)("li",null,"using"),Object(l.b)("li",null,"virtual"),Object(l.b)("li",null,"void"),Object(l.b)("li",null,"volatile"),Object(l.b)("li",null,"wchar_t"),Object(l.b)("li",null,"while"),Object(l.b)("li",null,"xor"),Object(l.b)("li",null,"xor_eq")),Object(l.b)("h2",{id:"feature-set"},"FEATURE SET"),Object(l.b)("h3",{id:"client-modification-feature"},"Client Modification Feature"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Supported"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"BasePath"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Authorizations"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"UserAgent"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"MockServer"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")))),Object(l.b)("h3",{id:"data-type-feature"},"Data Type Feature"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Supported"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Custom"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Int32"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Int64"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Float"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Double"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Decimal"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"String"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Byte"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Binary"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Boolean"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Date"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"DateTime"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Password"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"File"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Array"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Maps"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"CollectionFormat"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"CollectionFormatMulti"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Enum"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ArrayOfEnum"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ArrayOfModel"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ArrayOfCollectionOfPrimitives"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ArrayOfCollectionOfModel"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ArrayOfCollectionOfEnum"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"MapOfEnum"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"MapOfModel"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"MapOfCollectionOfPrimitives"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"MapOfCollectionOfModel"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"MapOfCollectionOfEnum"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")))),Object(l.b)("h3",{id:"documentation-feature"},"Documentation Feature"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Supported"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Readme"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Model"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Api"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")))),Object(l.b)("h3",{id:"global-feature"},"Global Feature"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Supported"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Host"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"BasePath"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Info"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Schemes"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"PartialSchemes"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Consumes"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Produces"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ExternalDocumentation"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Examples"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"XMLStructureDefinitions"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"MultiServer"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ParameterizedServer"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ParameterStyling"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Callbacks"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"LinkObjects"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS3")))),Object(l.b)("h3",{id:"parameter-feature"},"Parameter Feature"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Supported"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Path"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Query"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Header"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Body"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"FormUnencoded"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"FormMultipart"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Cookie"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS3")))),Object(l.b)("h3",{id:"schema-support-feature"},"Schema Support Feature"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Supported"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Simple"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Composite"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Polymorphism"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Union"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS3")))),Object(l.b)("h3",{id:"security-feature"},"Security Feature"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Supported"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"BasicAuth"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ApiKey"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OpenIDConnect"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"BearerToken"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAuth2_Implicit"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAuth2_Password"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAuth2_ClientCredentials"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAuth2_AuthorizationCode"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")))),Object(l.b)("h3",{id:"wire-format-feature"},"Wire Format Feature"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Supported"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"JSON"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"XML"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"PROTOBUF"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Custom"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")))))}j.isMDXComponent=!0},308:function(t,e,a){"use strict";a.d(e,"a",(function(){return u})),a.d(e,"b",(function(){return m}));var b=a(0),n=a.n(b);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);e&&(b=b.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,b)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function O(t,e){if(null==t)return{};var a,b,n=function(t,e){if(null==t)return{};var a,b,n={},l=Object.keys(t);for(b=0;b<l.length;b++)a=l[b],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(b=0;b<l.length;b++)a=l[b],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=n.a.createContext({}),j=function(t){var e=n.a.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):c({},e,{},t)),a},u=function(t){var e=j(t.components);return n.a.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.a.createElement(n.a.Fragment,{},e)}},d=Object(b.forwardRef)((function(t,e){var a=t.components,b=t.mdxType,l=t.originalType,r=t.parentName,i=O(t,["components","mdxType","originalType","parentName"]),u=j(a),d=b,m=u["".concat(r,".").concat(d)]||u[d]||p[d]||l;return a?n.a.createElement(m,c({ref:e},i,{components:a})):n.a.createElement(m,c({ref:e},i))}));function m(t,e){var a=arguments,b=e&&e.mdxType;if("string"==typeof t||b){var l=a.length,r=new Array(l);r[0]=d;var c={};for(var O in e)hasOwnProperty.call(e,O)&&(c[O]=e[O]);c.originalType=t,c.mdxType="string"==typeof t?t:b,r[1]=c;for(var i=2;i<l;i++)r[i]=a[i];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);