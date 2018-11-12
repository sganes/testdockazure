FROM mcr.microsoft.com/azure-functions/node:2.0
ENV AzureWebJobsScriptRoot=/home/site/wwwroot
ENV NODE_ENV staging
COPY . /home/site/wwwroot