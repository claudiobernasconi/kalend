import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "node:url";
import globals from "globals";
import js from "@eslint/js";
import path from "node:path";
import react from "eslint-plugin-react";
import sortImportsEs6Autofix from "eslint-plugin-sort-imports-es6-autofix";
import tsParser from "@typescript-eslint/parser";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import unusedImports from "eslint-plugin-unused-imports";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["build/*", "example_app/*", "docs/*", "dist/*", "mocharc.js", "gulpfile.js"],
}, ...compat.extends(
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
), {
    plugins: {
        react,
        "@typescript-eslint": typescriptEslint,
        "sort-imports-es6-autofix": sortImportsEs6Autofix,
        "unused-imports": unusedImports,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.jasmine,
            ...globals.jest,
        },

        parser: tsParser,
    },

    settings: {
        react: {
            pragma: "React",
            version: "detect",
        },
    },

    rules: {
        "no-console": "error",
        "unused-imports/no-unused-imports": "error",
        "@typescript-eslint/no-unused-vars": "error",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/ban-ts-ignore": "off",

        "sort-imports-es6-autofix/sort-imports-es6": [2, {
            ignoreCase: false,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        }],
    },
}];