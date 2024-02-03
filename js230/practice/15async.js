// https://launchschool.com/lessons/519eda67/assignments/90b41710
// lesson 2 assignment 25

// #region Problem 1
const p1 = function () {
  // (my) promise version
  // function downloadFile() {
  //   return new Promise (res => {
  //     console.log('Downloading file...');
  //     setTimeout(() => {
  //       res('Download complete');
  //     }, 1500);
  //   });
  // }

  async function downloadFile() {
    let timeout = function () {
      return new Promise(res => {
        setTimeout(() => res('Download complete'), 1500);
      });
    };

    console.log('Downloading file...');
    let data = await timeout();
    console.log(data);
  }

  downloadFile();
};
// p1();
// #endregion

// #region Problem 2
const p2 = function () {
  // Prior version
  // function loadData() {
  //   return new Promise((res, rej) => {
  //     Math.random() > 0.8
  //       ? res('Data loaded')
  //       : rej(new Error('Network error'));
  //   })
  //   .catch(err => {
  //     console.log(err.message, ' using cached data');
  //     return Promise.resolve('Using cached data');
  //   });
  // }

  async function loadData() {
    let output;
    try {
      output = await new Promise((res, rej) => {
        Math.random() > 0.8
          ? res('Data loaded')
          : rej(new Error('Network error'));
      });
      console.log(output);
    } catch (err) {
      output = 'Using cached data';
      console.error(output);
    }
    return output;
  }

  loadData();
};
// p2();
// #endregion

// #region Problem 3
const p3 = function () {
  async function fetchResource(url) {
    try {
      const response = await fetch(url);
      let json = await response.json();
      console.log(json);
    } catch (err) {
      console.error('Failed to load resource');
    } finally {
      console.log('Resource fetch attempt made');
    }
  }

  // Example usage:
  fetchResource("https://jsonplaceholder.typicode.com/todos/1");
  // Logs fetched data, then "Resource fetch attempt made"
  // On error, logs "Failed to load resource", then "Resource fetch attempt made"
};
// p3();
// #endregion

// #region Problem 4
const p4 = function() {
  async function fetchUserProfile(id) {
    async function useFetch(url) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch (err) {
        console.error(err.message);
        return err;
      }
    }

    try {
      let profile = await useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      console.log(profile);
      let posts = await useFetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
      console.log('posts: ', posts.length);
      let comments = await useFetch(`https://jsonplaceholder.typicode.com/users/${id}/comments`);
      console.log('comments: ', comments.length);
    } catch (err) {
      console.error(err.message);
    }
  }

  // Example usage:
  fetchUserProfile(1);
  // Logs user profile, posts, and comments. Catches and logs errors at each step if they occur.
};
// p4();
// #endregion


