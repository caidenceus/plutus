# Plutus
Working proof-of-concept full stack application to aggregate data accross banking and investment accounts.

![demo](https://github.com/caidenceus/vanguard-rest/assets/109473462/f56ba7da-4922-489b-a1c5-49e60cc1d49a)

### How it works

A poll cycle will poll for financial data from Fidelity, Vanguard, and many other financial institutions every six hours. The data is placed into a PostgreSQL database that is presented to the frontend via RESTful API.

The frontend is written in React and JavaScript, the backend is written in Python an Django.

### Setup

`eksctl create cluster --name <cluster name> --region <region> --nodegroup-name linux-nodes --node-type t2.micro --nodes 2`

### Teardown

`eksctl delete cluster --name <cluster name> --region <region>`

### Generate kubeconfig

`aws eks update-kubeconfig --region <region> --name <cluster name>`
