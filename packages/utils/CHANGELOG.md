# @talend/utils

## 3.0.0

### Major Changes

- 922e3eb: deps: bump date-fns to 3.X

## 2.9.0

### Minor Changes

- 1bc49cd: fix(): Reduce package size by fixing date-fns import
- 424544a: chore: upgrade date-fns to 2.x and fix

## 2.8.0

### Minor Changes

- b9cc5b097: Add missing deps and fix tsconfig

## 2.7.0

### Minor Changes

- 841be39f3: TDOPS-5386 - remove phone validation as not in use

## 2.6.0

### Minor Changes

- 8520b05f9: Types (Typescript) add util function to filter undefined or null values from array

## 2.5.2

### Patch Changes

- 20388beea: fix(TDOPS-3587) - update email validation pattern

## 2.5.1

### Patch Changes

- c595c55ce: fix(TDOPS-4043/dateUtils): export dateUtil generator functions

## 2.5.0

### Minor Changes

- f0a97113e: feat: add randomUUID function based on crypto

## 2.4.0

### Minor Changes

- 4961b509d: feat(TDC-6345): add MD date formatter

## 2.3.0

### Minor Changes

- 47b758112: feat(ARCH-482): use React 17 internally and extend react peer dep version

## 2.2.0

### Minor Changes

- 9f87b591a: return wrong date when calling “convertToTimeZone” function with specific timezone and summer time

## 2.1.1

### Patch Changes

- 275c25ee0: fix: add types in package.json for ts project

## 2.1.0

### Minor Changes

- c73332a32: feat(utils/date): format date in specified locale

## 2.0.1

### Patch Changes

- 039b85775: chore: upgrade dependencies and align @talend scoped packages to latest

## 2.0.0

### Major Changes

- d5f261f49: utils: remove default export, use named exports instead
  - WHAT the breaking change is
    Remove default export of @talend/utils package, use named exports instead
  - WHY the change was made
    The utils package used a default export. so we can't do a destruction import as readme described:
  ```
  import { validation } from '@talend/utils';
  ```
  - HOW a consumer should update their code
    Use destruction import like `import { validation, date } from '@talend/utils';` to replace default import.

## 1.4.5

### Patch Changes

- 667cd0a50: chore: upgrade dependencies and align @talend scoped packages to latest

## 1.4.4

### Patch Changes

- f1f4ec5bc: fix(workspace-run): package run order

## 1.4.3

### Patch Changes

- 3e9121287: chore(build): order packages on pre-release hook
