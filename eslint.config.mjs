import { dirname } from "path"
import { fileURLToPath } from "url"

import { FlatCompat } from "@eslint/eslintrc"
import readableTailwind from "eslint-plugin-readable-tailwind"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
})

const eslintConfig = [
    {
        ignores: ["components/ui/**/*"],
    },
    ...compat.extends(
        "next/core-web-vitals",
        "next/typescript",
        "standard",
        "prettier"
        // "plugin:tailwindcss/recommended"
    ),
    {
        rules: {
            "import/order": [
                "error",
                {
                    groups: [
                        "builtin",
                        "external",
                        "internal",
                        ["parent", "sibling"],
                        "index",
                        "object",
                    ],

                    "newlines-between": "always",

                    pathGroups: [
                        {
                            pattern: "@app/**",
                            group: "external",
                            position: "after",
                        },
                    ],

                    pathGroupsExcludedImportTypes: ["builtin"],

                    alphabetize: {
                        order: "asc",
                        caseInsensitive: true,
                    },
                },
            ],
            "comma-dangle": "off",
        },
    },
    {
        plugins: {
            "readable-tailwind": readableTailwind,
        },
    },
    {
        files: ["**/*.ts", "**/*.tsx"],
        rules: {
            "no-undef": "off",
        },
    },
]

export default eslintConfig
