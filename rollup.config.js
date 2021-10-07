import typescript from "@rollup/plugin-typescript";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";
import scss from "rollup-plugin-scss";

// Excluded dependencies - dev dependencies
const EXTERNAL = Object.keys(pkg.devDependencies);

export default [
  {
    input: "./src/index.ts",
    output: {
      dir: "dist",
      format: "esm",
      preserveModules: true,
      preserveModulesRoot: "src",
      sourcemap: true,
    },
    plugins: [
      external(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.build.json",
        declaration: true,
        declarationDir: "dist",
      }),
      // terser(),
      scss({
        output: './dist/stellar.css'
      }),
    ],
    external: EXTERNAL, // https://rollupjs.org/guide/en/#peer-dependencies
  },
];
