// https://launchschool.com/lessons/f1e59145/assignments/8390cb74

{
  // given
  type UserSettings = {
    readonly colorScheme: string;
    readonly notifications: ReadonlyArray<string>;
  };
  
  const userSettings: UserSettings = {
    colorScheme: "dark",
    notifications: ["email", "push"],
  };
  
  (userSettings as any).colorScheme = "light";
  (userSettings as any).notifications.push("sms");

  // what is output
  console.log(userSettings.colorScheme);
  console.log(userSettings.notifications);
}

{
    //  assume no errors
    // "light"
    // ["email", "push", "sms"]
}
