// #region Q1
// async function asyncDownloadFile() {
//   console.log('Downloading file...');
//   let message = await new Promise(res => setTimeout(() => res("Download Complete"), 1500))
//   console.log(message);
// }

// asyncDownloadFile();
// #endregion


// #region Q2
// async function asyncLoadData() {
//   let msg;
//   try {
//     msg = await new Promise((res, rej) => {
//       setTimeout(()=> {
//         if (Math.random() > 0.5) res("Data loaded");
//         else rej("Network error");
//       }, 1000);
//     });
//     console.log(msg);
//   } catch (error) {
//     console.error(error);
//   }
// }

// asyncLoadData();
// #endregion


// #region Q3
// async function fetchResource(url) {
//   try {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Failed to load resource");
//   } finally {
//     console.log("Resource fetch attempt made");
//   }
// }

// fetchResource("https://jsonplaceholder.typicode.com/todos/1");
// Logs fetched data, then "Resource fetch attempt made"
// On error, logs "Failed to load resource", then "Resource fetch attempt made"
// #endregion


// #region Q4
async function fetchUserProfile(id) {
  const url1 = `https://jsonplaceholder.typicode.com/users/${id}`;
  const url2 = `https://jsonplaceholder.typicode.com/users/${id}/posts`;
  const url3 = `https://jsonplaceholder.typicode.com/users/${id}/comments`;
  const urls = [url1, url2, url3];
  try {
    let response = await Promise.allSettled(urls.map(async function(url) {
      return await fetch(url)
        .then(res => res.json())
        .catch(err => {
          throw err;
        });
    }));
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

fetchUserProfile(1);
// Logs user profile, posts, and comments. Catches and logs errors at each step if they occur.
// #endregion