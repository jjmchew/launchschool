"use strict";
// object values at runtime
{
    const userSettings = {
        colorScheme: "dark",
        notifications: ["email", "push"],
    };
    // (userSettings as any).colorScheme = "light";
    // (userSettings as any).notifications.push("sms");
    userSettings.colorScheme = "light";
    userSettings.notifications.push("sms");
    console.log(userSettings.colorScheme);
    console.log(userSettings.notifications);
    // code will run - no errors since type `any` is asserted on `userSettings`
    // output will be:
    // light
    // ['email', 'push', 'sms']
}
