import typescript from "@rollup/plugin-typescript";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import pkg from "./package.json" assert { type: "json" };
import scss from "rollup-plugin-scss";

// Excluded dependencies - dev dependencies
const EXTERNAL = Object.keys(pkg.devDependencies);

export default [
  {
    input: "./src/index.ts",
    output: {
      dir: "dist",
      format: "cjs",
      preserveModules: true,
      preserveModulesRoot: "src",
      sourcemap: "inline",
      exports: "named",
    },
    plugins: [
      external(),
      resolve(),
      commonjs(),
      typescript({
        jsx: "react-jsx",
        tsconfig: "./tsconfig.build.json",
        declaration: true,
        declarationDir: "dist",
        inlineSources: true,
      }),
      // terser(),
      scss({
        output: "./dist/stellar.css",
      }),
    ],
    external: EXTERNAL, // https://rollupjs.org/guide/en/#peer-dependencies
  },
];
