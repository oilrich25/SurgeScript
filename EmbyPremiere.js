// 超级会员 subscription purchased via 秋城落叶 expires 且会员资格永远不会失效

// LS0tLS1CRUdJTiBQR1AgU0lHTkVEIE1FU1NBR0UtLS0tLQpIYXNoOiBTSEEyNTYKCmlkID0gODk4OGQ4MjAtYzQzMC00ZDA0LWEyZWQtOTE1ZjVjNDRjYTIwCmlzc3VlZEF0ID0gMjAyNC0wMS0yMgp2YWxpZFVudGlsID0gMjAyNi0xMC0yOAotLS0tLUJFR0lOIFBHUCBTSUdOQVRVUkUtLS0tLQoKd3NCY0JBRUJDQUFRQlFKbHJuR01DUkJ3VWpiTGIzbVAzZ0FBcUhvSUFDMi9vU3NsUVJpRlNVc0lWQ0VTVzRjSQpRNEhNdkRyaloyR202N1dmenhWRXpZMWc2L2RHMGpOTkFtTFFWbzE4WDBVbzFjWXFub3VKVXl0ekR3U1laOUN0CjY0OXFwSWJlQjV1R2NNVVJ4QlpCdUZ0NmNSenB1VUppb1pMdVVaYlFqNm5LTm1QRDhkSnV5SWhPZVoxRmRHUysKS096amIrQ0svV3JkaUNYYzh3SDU3MytyQTRRb29kYlpITXROamgzeVdxU0xMNFN2R0tHYXpSTDNKeWd2Y2xFUwpOSFZXaVYwZ0J5emF2OFpjZUlRbHpnK3IweUJzdVR1N0JJSC9GdFRFcjRuNWFRVHRxbDV1Rmhsc3JMR0lOZVZGCmk2TFlUcHQzczFBd2p0ZnRraGNWV25zTHFRVEpUSEI1b0JnUmFaUmRuVzF6czZhQ0VHdzh5TyttMWR4MEtQcz0KPXdieUkKLS0tLS1FTkQgUEdQIFNJR05BVFVSRS0tLS0t

const endpoints = {
    getStatus: "https://mb3admin.com/admin/service/registration/getStatus",
    validate: "https://mb3admin.com/admin/service/registration/validate",
    validateDevice: "https://mb3admin.com/admin/service/registration/validateDevice"
  };
  
  const commonHeaders = {
    'Content-Type': 'application/json; charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Range, Accept, X-Emby-Token, X-Admin-Token, X-Application',
  };
  
  function handleRequest(url, responseBody) {
    console.log(`处理请求: ${url}`);
    $done({
      response: {
        body: responseBody,
        headers: commonHeaders,
      },
    });
    console.log(`响应已发送: ${responseBody}`);
  }
  
  let url = $request.url;
  console.log(`收到请求: ${url}`);
  
  if (url.startsWith(endpoints.getStatus)) {
    handleRequest(url, JSON.stringify({
      deviceStatus: 0,
      planType: "超级会员",
      subscriptions: [{
        autoRenew: true,
        store: "秋城落叶",
        feature: "all",
        planType: "超级会员",
        expDate: "且会员资格永远不会失效"
      }]
    }));
  } else if (url.startsWith(endpoints.validate)) {
    handleRequest(url, JSON.stringify({
      featId: "",
      registered: true,
      expDate: "2099-01-01",
      key: ""
    }));
  } else if (url.startsWith(endpoints.validateDevice)) {
    handleRequest(url, JSON.stringify({
      cacheExpirationDays: 999,
      resultCode: "GOOD",
      message: "Device Valid"
    }));
  } else {
    console.log(`未知的请求URL: ${url}`);
    $done({});
  }
  
