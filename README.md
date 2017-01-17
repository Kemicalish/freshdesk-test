#Testing Freshdesk

## Install / Getting Started

```shell
git clone https://github.com/Kemicalish/freshdesk-test.git
cd freshdesk-test
npm install
```

Before running project, create /credentials/freshdesk.json 
which should have the form:

```json
{
    "basicAuth":"Basic YOUR_ENCODED_API_KEY",
    "companyName":"YOUR_COMPANY_NAME"
}
```
Note: To get your basicAuth encoded key you can use postman set authorization to BasicAuth with Username YOUR_API_KEY and no password (then get the encoded key within header params) 

Then run local server and you should see your agents, contacts and tickets
```shell
npm run serve
```

