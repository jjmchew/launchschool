"use strict";
// https://launchschool.com/lessons/f1e59145/assignments/8390cb74
{
    const userSettings = {
        colorScheme: "dark",
        notifications: ["email", "push"],
    };
    userSettings.colorScheme = "light";
    userSettings.notifications.push("sms");
    // what is output
    console.log(userSettings.colorScheme);
    console.log(userSettings.notifications);
}
{
    //  assume no errors
    // "light"
    // ["email", "push", "sms"]
}
