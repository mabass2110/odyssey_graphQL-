import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "./src/schema.ts",
    generates: {
        "./src/types.ts": {},
      },
};
  
export default config;