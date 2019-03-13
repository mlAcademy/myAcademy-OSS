<p align="center"><img width=60% src="https://mlacademy.blob.core.windows.net/assets/text_black_large.png"></p>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![Python](https://img.shields.io/badge/python-v3.5+-blue.svg)
![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)
[![GitHub Issues](https://img.shields.io/github/issues/mlacademy/myacademy-oss.svg)](https://github.com/mlacademy/myacademy-oss/issues)
[![Build Status](https://dev.azure.com/mlacademy/mlacademy/_apis/build/status/mlAcademy.frontend?branchName=production)](https://dev.azure.com/mlacademy/mlacademy/_build/latest?definitionId=1&branchName=production)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

# myAcademy Skinnable Interactive Tuition Platform


_Written in React (w/ React Router, styled-components, Hooks, Bulma, Axios, Ace Editor + more)_

**Used for [https://mlacademy.ml](https://mlacademy.ml)**

Authored by:

- Adam Peace
- Sotirios Vavaroutas
- Samuil Stoychev

### Set Up

[_Make sure you have yarn installed_](https://yarnpkg.com/lang/en/docs/install/)

```bash

$ git clone https://github.com/mlacademy/myacademy-oss.git

$ cd myacademy-oss

$ yarn install

$ cp src/assets.example src/assets

```

**Now update configuration in `src/assets` to suit your needs** 

### Run Locally

```bash

# In myacademy-oss/src 

$ yarn start

```

### Deploy

```bash

# In myacademy-oss/src 

$ yarn build

$ serve -s build

```