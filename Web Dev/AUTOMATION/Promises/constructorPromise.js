let myPromise = new Promise(function (resolve, reject) {
  const a = 4;
  const b = 4;

  if (a === b) {
    resolve("Yes, a and b are equal");
  } else {
    reject("No, a and b are not equal");
  }
});

//then method is linked to resolve method => the value passed in resolve is recieved in then callback function as "data"
myPromise.then(function (data) {
  console.log("This is coming from resolve method: " + data);
});

//catch method is linked to reject method => the value passed in reject is recieved in catch callback function as "err"
myPromise.catch(function (err) {
  console.log("This is coming from reject method: " + err);
});
