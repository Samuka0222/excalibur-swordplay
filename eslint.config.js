import pluginJs from "@eslint/js";
import prettier from "eslint-config-prettier";
import globals from "globals";
import tseslint from "typescript-eslint";


export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "sort-imports": ["error", {
        "ignoreCase": false,
        "ignoreDeclarationSort": false,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": ["all", "multiple", "single", "none"],
        "allowSeparatedGroups": false
      }],
    },
    plugins: {
      prettier
    }
  },
  {
    settings: {
      "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
      }
    }
  }
];
