function getAcc(URL) {
  const url = URL.split("/");
  const acc = url[url.length - 2];
  return acc;
}

function redirect(requestDetails) {
    const acc = getAcc(requestDetails.url);
    const targetUrl = "https://imginn.com/" + acc + "/";

    if (requestDetails.url === targetUrl) {
    return;
  }
  return {
    redirectUrl: targetUrl
  };
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  {urls:["*://www.instagram.com/*"]},
  ["blocking"]
);
