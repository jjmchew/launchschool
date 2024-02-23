// object values at runtime
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
  
  // (userSettings as any).colorScheme = "light";
  // (userSettings as any).notifications.push("sms");

  // userSettings.colorScheme = "light";      // this line and below will raise TS errors, but will still run in the 'js' version
  // userSettings.notifications.push("sms");

  console.log(userSettings.colorScheme);
  console.log(userSettings.notifications);


  // code will run - no errors since type `any` is asserted on `userSettings`
  // output will be:
  // light
  // ['email', 'push', 'sms']
}